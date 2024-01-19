export default function Input({ className, type, placeholder, id, action }) {
  return (
    <input
      className={`${className} w-full p-2 bg-neutral-100 placeholder:text-neutral-400 dark:bg-neutral-800 dark:placeholder:text-neutral-600 dark:text-neutral-50 rounded-md`}
      placeholder={placeholder}
      onChange={action}
      type={type}
      id={id}
    />
  );
}
