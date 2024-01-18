import WriteMD from "../components/write/WriteMD";
import PreviewMD from "../components/write/PreviewMD";
import { useState } from "react";

export const Write = () => {
  const [data, setData] = useState({
    title: "",
    tags: "",
    contents: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  console.log(data);

  return (
    <div className="grid grid-cols-[49%_1%_49%] place-content-center gap-4 w-full h-[89vh]">
      <WriteMD value={data} action={handleChange} />
      <div className="flex justify-center items-center">
        <div className="w-[1px] h-[52rem] bg-neutral-950 dark:bg-neutral-100" />
      </div>
      <PreviewMD value={data} />
    </div>
  );
};
