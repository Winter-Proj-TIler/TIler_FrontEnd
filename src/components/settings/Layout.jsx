export default function Layout({ children }) {
  return (
    <div className="w-full">
      <hr className="h-1 w-full min-w-[57rem] mb-2" />
      <div className="flex justify-between items-center gap-5 w-full min-w-[41rem] px-5 py-1">
        {children}
      </div>
    </div>
  );
}
