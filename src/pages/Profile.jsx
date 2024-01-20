import Button from "../components/common/Button";
import Post from "../components/home/Post";
import { userData as data } from "../constants/user";

export const Profile = () => {
  return (
    <div className="flex flex-col w-3/4 gap-5">
      <div className="flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <img src={data.user.profileImg} alt="" />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl">{data.user.username}</h1>
              <Button className="px-2 py-0">팔로우</Button>
            </div>
            <h1 className="text-lg">{data.user.statusMsg}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>팔로워 {data.user.follower}</h1>
          <h1>팔로잉 {data.user.following}</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_18rem)] justify-center gap-6 p-3 w-3/4">
        {data.posts.map((i) => {
          return <Post data={i} key={i.postId} />;
        })}
      </div>
    </div>
  );
};
