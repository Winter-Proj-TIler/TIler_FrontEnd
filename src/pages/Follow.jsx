import Dropdown from "../components/common/Dropdown";
import Following from "../components/follow/Following";

export const Follow = () => {
  return (
    <div className="flex flex-col items-center gap-3 w-[68rem]">
      <h1 className="self-start text-2xl font-bold">팔로잉 관리</h1>
      <Following
        user={{
          profile: "/prf.png",
          name: "six-standard",
          inform: "Lorem Ipsum Dollar",
        }}
      />
    </div>
  );
};
