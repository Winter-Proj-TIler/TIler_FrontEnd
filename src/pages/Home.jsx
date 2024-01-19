import Post from "../components/home/Post";
import { postlistdata } from "../constants/posts";

export const Home = () => {
  return (
    <div className="grid grid-flow-row grid-cols-[repeat(auto-fill,_18rem)] justify-center gap-6 p-3 w-3/4">
      {postlistdata.map((i) => {
        return <Post data={i} key={i.postId} />;
      })}
    </div>
  );
};
