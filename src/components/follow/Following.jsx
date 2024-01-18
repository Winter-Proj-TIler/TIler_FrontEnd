import Button from "../common/Button";

export default function Following() {
  return (
    <div className="flex justify-between items-center w-[68rem] gap-3">
      <div className="flex items-center gap-2">
        <img src="/prf.png" />
        <div>
          <h1 className="text-2xl dark:text-neutral-100">Six-Standard</h1>
          <h1 className="text-lg dark:text-neutral-100">
            Lorem Ipsum Dollar one two three four five six standard
          </h1>
        </div>
      </div>
      <Button>언팔로우</Button>
    </div>
  );
}
