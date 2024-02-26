import { Icon } from "@iconify/react";
import Button from "../components/common/Button";
import Tags from "../components/common/Tags";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Comment from "../components/detail/Comment";
import { queryKeys } from "../utils/queryKeys";
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, detailPost } from "../api/post";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { unLike, like as likeFn } from "../api/like";
import { follow } from "../api/follow";
import { addComment } from "../api/comment";

export const Detail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: [queryKeys.detail, id],
    queryFn: () => detailPost(id),
    select: (res) => {
      return res.data.data;
    },
  });

  const isFollow = localStorage.getItem(`follow${data?.post.userId}`);
  const isLiked = localStorage.getItem(`like${id}`);

  const { mutate: followUser } = useMutation({
    mutationFn: () => follow(data.post.userId),
    onSuccess: () => {
      localStorage.setItem(`follow${data.post.userId}`, true);
      queryClient.invalidateQueries([queryKeys.follow, queryKeys.detail]);
    },
  });

  const { mutate: like } = useMutation({
    mutationFn: () => (isLiked ? unLike(id) : likeFn(id)),
    onSuccess: async () => {
      await queryClient.invalidateQueries([queryKeys.detail]);
      !isLiked
        ? localStorage.setItem(`like${id}`, true)
        : localStorage.removeItem(`like${id}`);
    },
  });

  const { mutate: delPost } = useMutation({
    mutationFn: () => deletePost(id),
    onSuccess: () => {
      navigate("/");
    },
  });

  const { mutate: uploadComment } = useMutation({
    mutationFn: (comment) => addComment(id, comment),
    onSuccess: (res) => {
      queryClient.invalidateQueries([queryKeys.detail, id]);
    },
  });

  const userID = parseInt(localStorage.getItem("userID"));

  if (data) {
    return (
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="flex flex-col gap-2 w-[50rem]">
          <div className="flex items-end gap-1">
            <h1 className="text-2xl">{data.post.title}</h1>
            <h1 className="text-md text-neutral-400 dark:text-neutral-600">
              {data?.post.createdAt.split(" ")[0]}
            </h1>
          </div>
          <div className="flex items-center gap-1">
            <h1
              className="cursor-pointer"
              onClick={() => navigate(`/profile/${data?.post.userId}`)}
            >
              {data?.post.writer}
            </h1>
            {!!userID &&
              (userID !== data?.post.userId ? (
                <>
                  {!isFollow && (
                    <Button className="px-[1rem]" onClick={followUser}>
                      팔로우
                    </Button>
                  )}

                  <Button
                    className={`px-[1rem] ${
                      isLiked && "brightness-[5] dark:brightness-50"
                    }`}
                    onClick={like}
                  >
                    <Icon icon="mdi:heart" width="1.5rem" />
                    <h1>{data?.post.likeCnt}</h1>
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={() => navigate(`/write/${id}`)}>수정</Button>
                  <Button
                    onClick={() => {
                      const isDelete = window.confirm("정말 삭제하시겠습니까?");
                      if (isDelete) delPost();
                    }}
                  >
                    삭제
                  </Button>
                </>
              ))}
          </div>
          <div className="flex flex-wrap w-full items-center gap-1">
            {data?.post.tags.map((i, j) => {
              return <Tags key={j}>{i}</Tags>;
            })}
          </div>
          <hr />
          <div
            className="prose text-[#000000] dark:invert"
            style={{ width: "50rem" }}
          >
            <Markdown
              remarkPlugins={remarkGfm}
              className=""
              components={{
                img: (props) => (
                  <img className="prose dark:invert" {...props} />
                ),
                p: ({ children }) => (
                  <p className="break-all" style={{ width: "50rem" }}>
                    {children}
                  </p>
                ),
              }}
            >
              {data.post.contents ? data.post.contents : ""}
            </Markdown>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[50rem]">
          <h1 className="flex items-center gap-1 text-lg">
            <Icon icon="mdi:comment" width="1.5rem" />
            Comments
            <span className="text-neutral-400 dark:text-neutral-500">
              {data?.post.commentCnt}
            </span>
          </h1>
          {!!userID && (
            <textarea
              className="w-full bg-neutral-100 dark:bg-neutral-700 dark:placeholder:text-neutral-500 rounded-md p-3 box-border"
              placeholder="댓글을 입력하세요 (shift+enter로 등록)"
              onKeyDown={(e) => {
                if (e.shiftKey && e.code === "Enter") {
                  e.preventDefault();
                  uploadComment(e.target.value);
                  e.target.value = "";
                }
              }}
            />
          )}
          {data.comments.map((i) => (
            <Comment data={i} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h1>불러오는 중입니다..</h1>;
  }
};
