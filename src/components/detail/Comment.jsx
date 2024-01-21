import Button from "../common/Button";

export default function Comment({ data }) {
  return (
    <div className="flex flex-col gap-1 w-full p-3 bg-neutral-100 dark:bg-neutral-700 box-border rounded-md">
      <div className="flex items-center gap-1">
        <img src="/prf.png" alt="" className="w-6 h-6 rounded-full" />
        <h1>이름</h1>
        <h1 className="text-sm text-neutral-400 dark:text-neutral-500">
          2024.01.21
        </h1>
        <Button>수정</Button>
        <Button>삭제</Button>
      </div>
      <h1 className="whitespace-pre-wrap break-words">
        {"데이터\ntest\n에바에바에바에바에바에바에바"}
      </h1>
    </div>
  );
}
