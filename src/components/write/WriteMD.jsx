import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

export default function WriteMD({ value, action }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col w-[50%] h-full bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 ">
      <div className="flex justify-between bg-gray-200 dark:bg-neutral-900 w-full p-[0.1rem]">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleBack}
        >
          <Icon icon="maki:arrow" rotate="180deg" width="1rem" />
          <h1>돌아가기</h1>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <Icon icon="material-symbols:image" width="1rem" />
            <h1>이미지 추가</h1>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Icon icon="ic:round-upload" width="1rem" />
            <h1>업로드</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full h-full p-3">
        <input
          placeholder="타이틀"
          value={value.title}
          id="title"
          onChange={action}
          className="text-4xl font-bold bg-transparent dark:placeholder:text-neutral-600"
        />
        <hr className="w-full" />
        <input
          placeholder="태그 (_로 구분)"
          value={value.tags}
          onChange={action}
          className="bg-transparent dark:placeholder:text-neutral-600"
          id="tags"
        />
        <textarea
          placeholder="내용 (Markdown 문법 지원)"
          id="contents"
          value={value.contents}
          onChange={action}
          className="h-full bg-transparent dark:placeholder:text-neutral-600"
        />
      </div>
    </div>
  );
}
