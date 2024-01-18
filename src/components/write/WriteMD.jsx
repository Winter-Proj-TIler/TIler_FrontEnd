import { Image, Save, Upload } from "../../assets";

export default function WriteMD({ value, action }) {
  return (
    <div className="flex flex-col w-full self-start gap-2 h-full">
      <input
        placeholder="타이틀"
        value={value.title}
        id="title"
        onChange={action}
        className="text-4xl font-bold dark:bg-neutral-950 dark:text-neutral-100"
      />
      <hr className="w-full" />
      <input
        placeholder="태그 (_로 구분)"
        value={value.tags}
        onChange={action}
        className="dark:bg-neutral-950 dark:text-neutral-100"
        id="tags"
      />
      <textarea
        placeholder="내용 (Markdown 문법 지원)"
        id="contents"
        value={value.contents}
        onChange={action}
        className="h-full dark:bg-neutral-950 dark:text-neutral-100"
      />
      <hr className="w-full" />
      <div className="flex gap-3 p-3">
        <div className="flex justify-center items-center p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 cursor-pointer">
          <img src={Upload} className="dark:invert" title="업로드" alt="" />
        </div>
        <div className="flex justify-center items-center p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 cursor-pointer">
          <img
            src={Image}
            className="dark:invert"
            title="이미지 업로드"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
