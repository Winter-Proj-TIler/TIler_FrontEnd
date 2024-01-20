import Input from "../components/common/Input";

export const Settings = () => {
  return (
    <div className="flex flex-col items-center gap-3 w-3/4">
      <div className="w-full">
        <hr className="h-1 w-full" />
        <div className="flex justify-between items-center gap-5 w-full px-5 py-1">
          <h1 className="text-xl">유저명</h1>
          <Input className="w-2/3" />
        </div>
      </div>
      <div className="w-full">
        <hr className="h-1 w-full mb-3" />
        <div className="flex justify-between items-center gap-5 w-full px-5 py-1">
          <h1 className="text-xl">이메일</h1>
          <Input className="w-2/3" />
        </div>
      </div>
      <div className="w-full">
        <hr className="h-1 w-full mb-3" />
        <div className="flex justify-between items-center gap-5 w-full px-5 py-1">
          <h1 className="text-xl">상태메세지</h1>
          <Input className="w-2/3" />
        </div>
      </div>
      <div className="w-full">
        <hr className="h-1 w-full mb-3" />
        <div className="flex justify-between items-center gap-5 w-full px-5 py-1">
          <h1 className="text-xl">프로필 사진</h1>
          <Input className="w-2/3" />
        </div>
      </div>
    </div>
  );
};
