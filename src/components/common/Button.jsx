export default function Button({ children, onClick }) {
  return (
    <button
      className="box-content px-6 py-1 rounded-2xl border-2 border-neutral-900 dark:border-neutral-100 dark:text-neutral-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
