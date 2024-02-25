import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import Post from "../components/home/Post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { searchUser } from "../api/user";
import { follow } from "../api/follow";

export const Profile = () => {
  const { name } = useParams();
  const { data } = useQuery({
    queryKey: [queryKeys.profile, name],
    queryFn: () => searchUser(name),
    select: (res) => {
      const { data } = res.data;
      return { ...data, posts: [...data.posts].reverse() };
    },
  });

  const queryClient = useQueryClient();
  const userID = localStorage.getItem("userID");
  const isFollow = localStorage.getItem(`follow${data?.user.userId}`);

  const { mutate } = useMutation({
    mutationFn: () => follow(data.user.userId),
    onSuccess: () => {
      localStorage.setItem(`follow${data.user.userId}`, true);
      queryClient.invalidateQueries([queryKeys.follow, queryKeys.detail]);
    },
  });

  return (
    <div className="flex flex-col w-3/4 gap-5">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img
            src={data?.user.profileImg}
            alt=""
            className="w-[100px] h-[100px] rounded-full"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl">{data?.user.username}</h1>
              {name !== userID && !!!isFollow && (
                <Button className="px-2 py-0" onClick={mutate}>
                  팔로우
                </Button>
              )}
            </div>
            <h1 className="text-lg">{data?.user.statusMsg}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>팔로워 {data?.followData.followerCnt}</h1>
          <h1>팔로잉 {data?.followData.followingCnt}</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_18rem)] justify-center gap-6 p-3 w-full">
        {data?.posts.map((i) => {
          return <Post data={i} key={i.postId} />;
        })}
      </div>
    </div>
  );
};
