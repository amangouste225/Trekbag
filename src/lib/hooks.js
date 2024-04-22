import { useContext } from "react";
import { ItemsContext } from "../contexts/ContextProvider";

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemContextProvider"
    );
  }

  return context;
}
