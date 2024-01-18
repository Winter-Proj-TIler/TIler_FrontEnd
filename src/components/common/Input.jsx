export default function Input({ type, placeholder, id, action, width }) {
  return (
    <input
      className="w-full p-2 bg-neutral-200 dark:bg-neutral-800 dark:placeholder:text-neutral-600 dark:text-neutral-50 rounded-md"
      placeholder={placeholder}
      onChange={action}
      type={type}
      id={id}
    />
  );
}
