import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/iTemsStore";

export default function AddItems() {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const removeAll = useItemsStore((state) => state.removeAll);
  const markAsCompleteAll = useItemsStore((state) => state.markAsCompleteAll);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const addItem = useItemsStore((state) => state.addItem);
  const markAsInCompleteAll = useItemsStore(
    (state) => state.markAsInCompleteAll
  );

  const buttonsArray = [
    {
      name: "Mark all as complete",
      onclick: markAsCompleteAll,
    },
    {
      name: "Mark all as incomplete",
      onclick: markAsInCompleteAll,
    },
    {
      name: "Reset to initial",
      onclick: resetToInitial,
    },
    {
      name: "Remove all items",
      onclick: removeAll,
    },
  ];

  const addItems = (e) => {
    e.preventDefault();

    // Basic validation
    if (!input) {
      alert("Item can't be empty !");
      inputRef.current.focus();
      return;
    }

    addItem(input);
    setInput("");
  };

  return (
    <div className="px-5 py-4 flex flex-col justify-between row-span-9 border">
      <form className=" bg-gray-100 items-stretch" onSubmit={addItems}>
        <div>
          <label htmlFor="list" className="font-semibold block text-xl">
            Add an item
          </label>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            id="list"
            placeholder="Toothbrush..."
            className="w-full rounded-lg border-[1px] p-2 my-4 italic text-black focus:text-black"
          />
          <Button type="btn">Add to list</Button>
        </div>
      </form>

      <div>
        {buttonsArray.map((btn) => (
          <Button type="secondary" key={btn.name} onclick={btn.onclick}>
            {btn.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
