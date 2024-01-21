import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Layout from "../components/settings/Layout";

export const Settings = () => {
  return (
    <div className="flex flex-col items-center gap-20 w-full">
      <div className="flex flex-col gap-5 w-3/4">
        <h1 className="self-start text-2xl">계정 설정</h1>
        <Layout>
          <h1 className="text-xl">유저명</h1>
          <Input className="w-4/6" value="Six-Standard" />
        </Layout>
        <Layout>
          <h1 className="text-xl">이메일</h1>
          <Input className="w-4/6" value="test@gmail.com" />
        </Layout>
        <Layout>
          <h1 className="text-xl">상태메세지</h1>
          <Input className="w-4/6" value="Lorem Ipsum Dollar" />
        </Layout>
        <Layout>
          <h1 className="text-xl">프로필 사진</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <h1 className="cursor-pointer">이미지 제거</h1>
              <img
                src="/prf.png"
                alt=""
                className="cursor-pointer rounded-full"
              />
            </div>
            <Button className="self-end">업데이트</Button>
          </div>
        </Layout>
      </div>
      <div className="flex flex-col gap-5 w-3/4">
        <h1 className="self-start text-2xl text-red-500">Danger Zone</h1>
        <Layout>
          <h1 className="text-xl">계정 삭제</h1>
          <div className="flex gap-2 items-center">
            <h1>계정 삭제 후엔 글과 팔로우 등 정보 복구가 불가능합니다.</h1>
            <Button>계정 삭제</Button>
          </div>
        </Layout>
        <Layout>
          <h1 className="text-xl">비밀번호 변경</h1>
          <div className="flex flex-col gap-2">
            <Input className="w-[20rem]" placeholder="현재 비밀번호" />
            <Input className="w-[20rem]" placeholder="새 비밀번호" />
            <Input className="w-[20rem]" placeholder="새 비밀번호 학인" />
            <Button className="self-end">업데이트</Button>
          </div>
        </Layout>
      </div>
    </div>
  );
};
