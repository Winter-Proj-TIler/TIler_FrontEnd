import { useQuery } from "@tanstack/react-query";
import { followList } from "../api/follow";
import Following from "../components/follow/Following";
import { queryKeys } from "../utils/queryKeys";

// 끝

export const Follow = () => {
  const { data } = useQuery({
    queryKey: [queryKeys.follow],
    queryFn: followList,
    select: (res) => {
      return res.data.list;
    },
  });

  return (
    <div className="flex flex-col items-center gap-3 w-[68rem]">
      <h1 className="self-start text-2xl font-bold">팔로잉 관리</h1>
      {data?.map((i) => (
        <Following user={i} />
      ))}
    </div>
  );
};
