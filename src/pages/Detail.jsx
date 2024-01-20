import { Icon } from "@iconify/react";
import Button from "../components/common/Button";
import Tags from "../components/detail/Tags";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { detailData } from "../constants/detail";

export const Detail = () => {
  return (
    <div className="flex flex-col gap-3 w-2/3">
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-end gap-1">
          <h1 className="text-2xl">{detailData.title}</h1>
          <h1 className="text-md text-neutral-400 dark:text-neutral-600">
            {detailData.createdAt.split(" ")[0]}
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <h1>{detailData.writer}</h1>
          <Button className="px-[1rem]">팔로우</Button>
          <Button className="px-[1rem]">
            <Icon icon="mdi:heart" width="1.5rem" />
            <h1>{detailData.likeCnt}</h1>
          </Button>
        </div>
        <div className="flex flex-wrap w-full items-center gap-1">
          {detailData.tags.map((i) => {
            return <Tags>React</Tags>;
          })}
        </div>
        <div>
          <Markdown
            remarkPlugins={remarkGfm}
            className="prose text-[#000000] dark:invert"
          >
            {detailData.contents}
          </Markdown>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full"># 댓글은 나중에 퍼블리싱</div>
    </div>
  );
};
