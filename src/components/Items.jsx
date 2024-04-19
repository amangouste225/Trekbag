import { useContext } from "react";
import { ItemsContext } from "../contexts/ContextProvider";

export default function Items({ item }) {
  const { handleCheck, handleDelete } = useContext(ItemsContext);

  return (
    <li className="font-bold flex items-center h-full py-2 gap-3 w-full relative">
      <input
        onChange={() => handleCheck(item.id)}
        checked={item.packed}
        type="checkbox"
        className="w-5 h-5"
      ></input>
      <label htmlFor="items" className="text-xl">
        {item.name}
      </label>
      <button
        className="font-bold absolute right-3"
        onClick={() => handleDelete(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
