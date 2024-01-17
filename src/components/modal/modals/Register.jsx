import useModal from "../../../hooks/useModal";
import Input from "../../Input";

export const Register = () => {
  const { open } = useModal();

  const handleLogin = () => {
    open("login");
  };

  return (
    <div className="grid grid-rows-[1fr_3fr] gap-2 place-content-center place-items-center">
      <h1 className="text-2xl dark:text-neutral-50">Register</h1>
      <div className="w-96 flex flex-col gap-6">
        <Input placeholder="이메일" />
        <Input placeholder="계정명" />
        <Input type="password" placeholder="비밀번호" />
        <Input type="password" placeholder="비밀번호 확인" />
        <div className="flex justify-between items-center">
          <h1 className="text-xs dark:text-neutral-50">
            이미 회원이신가요?
            <span
              className="cursor-pointer text-neutral-400 ml-1"
              onClick={handleLogin}
            >
              로그인
            </span>
          </h1>
          <button className="px-8 py-2 bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 rounded-md">
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};
