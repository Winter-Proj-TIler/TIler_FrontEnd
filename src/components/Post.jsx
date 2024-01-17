import { Like, Comment } from "../assets";
import { calcDate } from "../utils/calcDate";
import useDark from "../hooks/useDark";

export default function Post({ data }) {
  const { dark } = useDark();

  return (
    <div className="w-[18rem] shadow-lg dark:bg-neutral-900 self-start cursor-pointer bg-neutral-100 rounded-lg transition-all duration-75 hover:transform hover:translate-y-[-4px]">
      <img
        src="/tmp.png"
        alt=""
        className="rounded-tr-[0.45rem] rounded-tl-[0.45rem] object-cover"
      />
      <div className="min-h-48 flex flex-col justify-between p-3">
        <div>
          <h1 className="text-lg font-bold dark:text-neutral-100">
            {data.title}
          </h1>
          <h1 className="dark:text-neutral-100">{data.contents}</h1>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <img src="/prf.png" alt="" className="w-6 h-6 rounded-full" />
            <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
              {data.writer}
            </h1>
          </div>
          <div className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
          <div>
            <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
              {calcDate(data.createdAt)}
            </h1>
          </div>
          <div className="w-1 h-1 bg-neutral-400 dark:bg-neutral-600 rounded-full" />
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-[3px]">
              <Comment fill={dark ? "#525252" : "#9ca3af"} />
              <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
                0개
              </h1>
            </div>
            <div className="flex items-center gap-[3px]">
              <Like fill={dark ? "#525252" : "#9ca3af"} />
              <h1 className="text-neutral-400 dark:text-neutral-600 text-xs">
                0개
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
