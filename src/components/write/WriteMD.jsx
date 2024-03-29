import { Icon } from "@iconify/react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { updatePost, uploadImg, uploadPost } from "../../api/post";
import { toast } from "react-toastify";

export default function WriteMD({ value, action, id }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  const { mutate: uploadImage } = useMutation({
    mutationFn: (item) => uploadImg(item),
    onSuccess: (res) => {
      const e = {
        target: {
          id: "contents",
          value: value.contents + `  \n![image](${res.data.url})`,
        },
      };
      action(e);
    },
  });

  const upload = async () => {
    let load = toast.loading("업로드중입니다..");
    let res = undefined;
    if (!!id) {
      res = await updatePost(id, value);
    } else {
      res = await uploadPost(value);
    }
    if (res) {
      const { postId } = !!!id && res.data.data;
      toast.update(load, {
        render: "업로드되었습니다",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      navigate(`/detail/${id ? id : postId}`);
    } else {
      toast.update(load, {
        render: "업로드에 실패했습니다",
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    }
  };

  const handleImage = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();
    formData.append("IMG", img);
    uploadImage(formData);
  };

  return (
    <div className="flex flex-col w-[50%] h-full bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-100 ">
      <div className="flex justify-between bg-gray-200 dark:bg-neutral-900 w-full p-[0.1rem]">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleBack}
        >
          <Icon icon="maki:arrow" rotate="180deg" width="1rem" />
          <h1 className="select-none">돌아가기</h1>
        </div>
        <div className="flex gap-2 select-none">
          <input
            className="hidden"
            type="file"
            accept="image/*"
            id="image"
            onChange={handleImage}
          />
          <label
            htmlFor="image"
            className="flex items-center gap-1 cursor-pointer"
          >
            <Icon icon="material-symbols:image" width="1rem" />
            <h1>이미지 추가</h1>
          </label>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={upload}
          >
            <Icon icon="ic:round-upload" width="1rem" />
            <h1>{!!id ? "수정" : "업로드"}</h1>
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
