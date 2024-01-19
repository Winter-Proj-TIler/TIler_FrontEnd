export default function Preview({ value }) {
  return (
    <div className="flex flex-col w-[50%] self-start gap-2 h-full overflow-auto dark:bg-neutral-700 pt-10 p-3">
      <h1 className="min-h-[40px] text-4xl font-bold dark:text-neutral-100">
        {value.title}
      </h1>
      <hr className="w-full dark:border-neutral-100" />
      <div className="flex gap-1 flex-wrap">
        {value.tags !== "" &&
          value.tags.split("_").map((i) => {
            return (
              <div className="px-3 border-[1px] border-neutral-950 dark:border-neutral-100 dark:text-neutral-100 rounded-full">
                {i}
              </div>
            );
          })}
      </div>
      <h1 className="break-all whitespace-pre-wrap dark:text-neutral-100 h-full">
        {value.contents}
      </h1>
    </div>
  );
}
