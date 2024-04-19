import { useEffect, useState } from "react";
import { initialValues } from "../lib/constants";
import { createContext } from "react";

export const ItemsContext = createContext();

export default function ContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialValues;
  });
  const handleAddItems = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  const handleReset = () => {
    setItems([]);
  };
  const handleInitial = () => {
    setItems(initialValues);
  };
  const handleCompleteAll = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };
  const handleCheck = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItems(newItems);
  };
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const handleInCompleteAll = () => {
    setItems(
      items.map((item) => {
        return { ...item, packed: false };
      })
    );
  };
  const numberOfItems = items.filter((item) => item.packed === true);

  useEffect(
    () => localStorage.setItem("items", JSON.stringify(items)),
    [items]
  );

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItems,
        handleReset,
        handleInitial,
        handleCompleteAll,
        handleCheck,
        handleDelete,
        handleInCompleteAll,
        numberOfItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
