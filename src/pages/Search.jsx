import { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import { debounce } from "../utils/debounce";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { searchPost, searchPostTag } from "../api/post";
import Post from "../components/home/Post";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [debSearch, setDebSearch] = useState("");

  const [sort, setSort] = useState({
    view: "키워드",
    code: "keyword",
  });

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.search, debSearch, sort.code],
    queryFn: () => {
      return sort === "keyword"
        ? searchPost("DESC", debSearch)
        : searchPostTag(debSearch);
    },
    select: (res) => {
      return res.data.posts;
    },
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
    debounce(() => setDebSearch(e.target.value), 200);
  };

  return (
    <div className="flex flex-col gap-10 items-center p-3 w-full">
      <SearchBar
        value={search}
        action={handleChange}
        sort={sort}
        setSort={setSort}
      />
      <div className="flex w-3/4 justify-center">
        {isLoading ? (
          <h1>불러오고 있습니다</h1>
        ) : data?.length !== 0 ? (
          <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_17rem)] justify-center gap-6 p-3 w-full">
            {data?.map((i) => (
              <Post data={i} key={i.postId} />
            ))}
          </div>
        ) : (
          <h1>검색 결과가 없습니다</h1>
        )}
      </div>
    </div>
  );
};
