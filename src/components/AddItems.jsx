import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItems({
  onAddItems,
  onReset,
  onclick,
  onInitial,
  handleCompleteAll,
  handleInCompleteAll,
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const addItems = (e) => {
    e.preventDefault();

    // Basic validation
    if (!input) {
      alert("Item can't be empty !");
      inputRef.current.focus();
      return;
    }

    const newItems = {
      name: input,
      id: Date.now(),
      packed: false,
    };

    onAddItems(newItems);
    setInput("");
  };

  return (
    <div className="px-5 py-4 flex flex-col justify-between row-span-8 border">
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
        <Button onclick={handleCompleteAll} type="secondary">
          Mark all as complete
        </Button>
        <Button onclick={handleInCompleteAll} type="secondary">
          Mark all as incomplete
        </Button>
        <Button onclick={onInitial} type="secondary">
          Reset to initial
        </Button>
        <Button onclick={onReset} type="secondary">
          Remove all items
        </Button>
      </div>
    </div>
  );
}
