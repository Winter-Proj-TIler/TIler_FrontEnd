import { useQuery } from "@tanstack/react-query";
import Post from "../components/home/Post";
import { searchPost } from "../api/post";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { queryKeys } from "../utils/queryKeys";

// 끝

export const Home = () => {
  const sortType = {
    오름차순: "ASC",
    내림차순: "DESC",
  };
  const [sort, setSort] = useState("내림차순");

  const { data } = useQuery({
    queryKey: [queryKeys.post, sort],
    queryFn: () => searchPost(sortType[sort], ""),
    select: (res) => {
      return res.data.posts;
    },
  });

  const handleSort = () => {
    if (sort === "내림차순") {
      setSort("오름차순");
    } else {
      setSort("내림차순");
    }
  };

  return (
    <div className="flex flex-col w-3/4">
      <div
        className="flex gap-1 self-center cursor-pointer"
        onClick={handleSort}
      >
        <Icon icon="flowbite:sort-outline" width="1.5rem" />
        <h1>{sort}</h1>
      </div>
      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_18rem)] justify-center gap-6 p-3 w-full">
        {data?.map((i) => {
          return <Post data={i} key={i.postId} />;
        })}
      </div>
    </div>
  );
};
