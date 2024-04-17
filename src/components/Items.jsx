export default function Items({ onCheck, item, onDelete, setItemsList }) {
  return (
    <li className="font-bold flex items-center h-full py-2 gap-3 w-full relative">
      <input
        onChange={() => onCheck(item.id)}
        checked={item.packed}
        type="checkbox"
        className="w-5 h-5"
      ></input>
      <label htmlFor="items" className="text-xl">
        {item.name}
      </label>
      <button
        className="font-bold absolute right-3"
        onClick={() => onDelete(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
