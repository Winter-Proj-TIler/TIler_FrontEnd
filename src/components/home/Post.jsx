import { Like, Comment } from "../../assets";
import { calcDate } from "../../utils/calcDate";
import Dot from "./Dot";
import useDark from "../../hooks/useDark";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Post({ data }) {
  const { dark } = useDark();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.postId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[18rem] h-[22rem] shadow-lg dark:bg-neutral-900 self-start cursor-pointer bg-neutral-100 rounded-lg transition-all duration-75 hover:transform hover:translate-y-[-4px]"
    >
      {data.mainImg && (
        <img
          src={data.mainImg}
          alt=""
          className="w-full h-[10.2rem] rounded-tr-[0.45rem] rounded-tl-[0.45rem] object-cover"
        />
      )}

      <div
        className={`${
          data.mainImg ? "h-[calc(100%-10.18rem)]" : "h-full"
        } w-full flex flex-col justify-between p-3`}
      >
        <div className="w-full h-[calc(100%-24px)]">
          <h1 className="text-lg font-bold dark:text-neutral-100">
            {data.title}
          </h1>
          <Markdown
            remarkPlugins={remarkGfm}
            components={{
              img() {
                return;
              },
              h1() {
                return;
              },
              h2() {
                return;
              },
              h3() {
                return;
              },
              h4() {
                return;
              },
              h5() {
                return;
              },
              h6() {
                return;
              },
              p({ children }) {
                return children;
              },
            }}
            className="prose w-full mt-0 mb-0 text-[#000000] dark:invert text-overflow break-all"
          >
            {data.contents}
          </Markdown>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <img
              src={data.userProfile}
              alt=""
              className="w-6 h-6 rounded-full"
            />
            <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
              {data.writer}
            </h1>
          </div>
          <Dot />
          <div>
            <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
              {calcDate(data.createdAt)}
            </h1>
          </div>
          <Dot />
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-[3px]">
              <Comment fill={dark ? "#525252" : "#9ca3af"} />
              <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
                {data.commentCnt}개
              </h1>
            </div>
            <div className="flex items-center gap-[3px]">
              <Like fill={dark ? "#525252" : "#9ca3af"} />
              <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
                {data.likeCnt}개
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
