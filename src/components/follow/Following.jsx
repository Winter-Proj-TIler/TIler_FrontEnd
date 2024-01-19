import Button from "../common/Button";

export default function Following({ user }) {
  const handleUnfollow = () => {
    // React-Query mutation 코드 + 성공시 setQueryData
  };

  return (
    <div className="flex justify-between items-center w-[68rem] gap-3">
      <div className="flex items-center gap-2">
        <img src={user.profile} alt="" />
        <div>
          <h1 className="text-2xl dark:text-neutral-100">{user.name}</h1>
          <h1 className="text-lg dark:text-neutral-100">{user.inform}</h1>
        </div>
      </div>
      <Button onClick={handleUnfollow}>언팔로우</Button>
    </div>
  );
}
