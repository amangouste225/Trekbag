import { useMemo } from "react";
import Items from "./Items";
import { useItemsStore } from "../stores/iTemsStore";

export default function ItemsList({ sortBy }) {
  const items = useItemsStore((state) => state.items);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [sortBy, items]
  );

  return (
    <ul className="divide-y-2 my-5 flex flex-col">
      {sortedItems.map((item, i) => (
        <Items key={i} item={item} />
      ))}
    </ul>
  );
}
