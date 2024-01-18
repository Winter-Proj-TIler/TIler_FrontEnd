import Post from "../components/home/Post";
import { postlistdata } from "../constants/posts";

export const Home = () => {
  return (
    <div className="grid justify-center grid-flow-row grid-cols-[repeat(auto-fill,_18rem)] p-3 w-3/4 gap-6">
      {postlistdata.map((i) => {
        return <Post data={i} key={i.postId} />;
      })}
    </div>
  );
};
