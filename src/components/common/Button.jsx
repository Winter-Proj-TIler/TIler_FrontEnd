export default function Button({ children, onClick, className }) {
  return (
    <button
      className={`${className} flex gap-1 box-content px-2 rounded-lg border-[1px] border-neutral-900 dark:border-neutral-100 dark:text-neutral-100`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
