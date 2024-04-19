import { useContext, useRef, useState } from "react";
import Button from "./Button";
import { ItemsContext } from "../contexts/ContextProvider";

export default function AddItems() {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const {
    handleInCompleteAll,
    handleAddItems,
    handleReset,
    handleInitial,
    handleCompleteAll,
  } = useContext(ItemsContext);

  const buttonsArray = [
    {
      name: "Mark all as complete",
      onclick: handleCompleteAll,
    },
    {
      name: "Mark all as incomplete",
      onclick: handleInCompleteAll,
    },
    {
      name: "Reset to initial",
      onclick: handleInitial,
    },
    {
      name: "Remove all items",
      onclick: handleReset,
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

    const newItems = {
      name: input,
      id: Date.now(),
      packed: false,
    };

    handleAddItems(newItems);
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
