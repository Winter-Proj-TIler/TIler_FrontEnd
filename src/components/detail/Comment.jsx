import Button from "../common/Button";
// }

export default function Comment({ data }) {
  const userID = parseInt(localStorage.getItem("userID"));

  return (
    <div className="flex flex-col gap-1 w-full p-3 bg-neutral-100 dark:bg-neutral-700 box-border rounded-md">
      <div className="flex items-center gap-1">
        <img
          src={data.userData.profileImg || "/Default.png"}
          alt=""
          className="w-6 h-6 rounded-full"
        />
        <h1>{data.userData.username}</h1>
        <h1 className="text-sm text-neutral-400 dark:text-neutral-500">
          {data.createdAt.split(", ")[0]}
        </h1>
      </div>
      <h1 className="whitespace-pre-wrap break-words">{data.contents}</h1>
    </div>
  );
}
