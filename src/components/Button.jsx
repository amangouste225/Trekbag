export default function Button({ type, children, onclick }) {
  return (
    <button
      onClick={onclick}
      type="btn"
      className={`${type === "btn" && "bg-red-800"} ${
        type === "secondary" && "bg-red-600"
      } hover:bg-red-900 active:bg-gray-800 w-full py-2 outline text-white rounded-lg`}
    >
      {children}
    </button>
  );
}
