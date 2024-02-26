import WriteMD from "../components/write/WriteMD";
import PreviewMD from "../components/write/PreviewMD";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../utils/queryKeys";
import { detailPost } from "../api/post";
import { useParams } from "react-router-dom";

export const Write = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    title: "",
    tags: "",
    contents: "",
  });

  useEffect(() => {
    if (!!parseInt(id)) {
      detailPost(id).then((res) => {
        const { post } = res.data.data;
        setData({
          title: post.title,
          tags: post.tags.join("_"),
          contents: post.contents,
        });
      });
    }
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex place-content-center w-full h-screen">
      <WriteMD value={data} action={handleChange} id={parseInt(id)} />
      <PreviewMD value={data} />
    </div>
  );
};
