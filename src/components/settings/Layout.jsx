export default function Layout({ children }) {
  return (
    <div className="w-full">
      <hr className="h-1 w-full mb-2" />
      <div className="flex justify-between items-center gap-5 w-full px-5 py-1">
        {children}
      </div>
    </div>
  );
}
