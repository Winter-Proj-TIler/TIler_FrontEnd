import { Icon } from "@iconify/react";
import Button from "../components/common/Button";
import Tags from "../components/common/Tags";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { detailData } from "../constants/detail";
import Comment from "../components/detail/Comment";

export const Detail = () => {
  return (
    <div className="flex flex-col gap-5 w-2/4">
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
          <Button>수정</Button>
          <Button>삭제</Button>
        </div>
        <div className="flex flex-wrap w-full items-center gap-1">
          {detailData.tags.map((i) => {
            return <Tags>{i}</Tags>;
          })}
        </div>
        <hr />
        <div>
          <Markdown
            remarkPlugins={remarkGfm}
            className="prose text-[#000000] dark:invert"
          >
            {detailData.contents}
          </Markdown>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="flex items-center gap-1 text-lg">
          <Icon icon="mdi:comment" width="1.5rem" />
          Comments
          <span className="text-neutral-400 dark:text-neutral-500">
            {detailData.commentCnt}
          </span>
        </h1>
        <textarea
          className="w-full bg-neutral-100 dark:bg-neutral-700 dark:placeholder:text-neutral-500 rounded-md p-3 box-border"
          placeholder="댓글을 입력하세요 (shift+enter로 등록)"
        ></textarea>
        <Comment />
      </div>
    </div>
  );
};
