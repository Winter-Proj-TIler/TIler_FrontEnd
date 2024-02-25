import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "../common/Button";
import { queryKeys } from "../../utils/queryKeys";
import { unFollow } from "../../api/follow";

export default function Following({ user }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => unFollow(user.userId),
    onSuccess: () => {
      localStorage.removeItem(`follow${user.userId}`);
      queryClient.invalidateQueries([queryKeys.follow, queryKeys.detail]);
    },
  });

  return (
    <div className="flex justify-between items-center w-[68rem] gap-3">
      <div className="flex items-center gap-2">
        <img src={user.profileImg} alt="" className="w-[100px] rounded-full" />
        <div>
          <h1 className="text-2xl dark:text-neutral-100">{user.username}</h1>
          <h1 className="text-lg dark:text-neutral-100">
            {user.statusMsg ? user.statusMsg : "상태메세지 없음"}
          </h1>
        </div>
      </div>
      <Button onClick={mutate}>언팔로우</Button>
    </div>
  );
}
