import { Google, Github } from "../../../assets";
import useModal from "../../../hooks/useModal";
import Input from "../../common/Input";

export const Login = () => {
  const { open } = useModal();

  const handleRegister = () => {
    open("register");
  };

  return (
    <div className="grid grid-rows-[1fr_3fr_3fr] gap-2 place-content-center place-items-center">
      <h1 className="text-2xl dark:text-neutral-50">Login</h1>
      <div className="w-96 flex flex-col gap-6">
        <Input placeholder="이메일" />
        <Input type="password" placeholder="비밀번호" />
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xs dark:text-neutral-50">
              비밀번호를 잊으셨나요?
              <span className="cursor-pointer text-neutral-400 ml-1">
                비밀번호 찾기
              </span>
            </h1>
            <h1 className="text-xs dark:text-neutral-50">
              회원이 아니신가요?
              <span
                className="cursor-pointer text-neutral-400 ml-1"
                onClick={handleRegister}
              >
                회원가입
              </span>
            </h1>
          </div>
          <button className="px-8 py-2 bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-50 rounded-md">
            로그인
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-80 p-3 box-content">
        <div className="flex justify-center items-center relative p-5">
          <h1 className="absolute bg-neutral-50 dark:bg-neutral-950 dark:text-neutral-50 z-10 px-2">
            또는
          </h1>
          <hr className="absolute w-full bg-gray-900 dark:bg-neutral-50 h-[1px]" />
        </div>
        <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-md cursor-pointer flex justify-center items-center relative">
          <img
            src={Google}
            alt=""
            className="absolute left-2 w-9 h-9 rounded-full p-2 bg-slate-100 dark:bg-neutral-600"
          />
          <h1 className="dark:text-neutral-50">Google로 로그인</h1>
        </div>
        <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded-md cursor-pointer flex justify-center items-center relative">
          <img
            src={Github}
            alt=""
            className="absolute left-2 w-9 h-9 rounded-full p-2 bg-slate-100 dark:bg-neutral-600"
          />
          <h1 className="dark:text-neutral-50">Github로 로그인</h1>
        </div>
      </div>
    </div>
  );
};
