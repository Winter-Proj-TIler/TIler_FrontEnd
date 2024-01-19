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

  return (
    <div className="flex place-content-center w-full h-screen">
      <WriteMD value={data} action={handleChange} />
      <PreviewMD value={data} />
    </div>
  );
};
