import { useState } from "react";
import EmptyBox from "./EmptyBox";
import ItemsList from "./ItemsList";
import ListFilter from "./ListFilter";
import { useItemsStore } from "../stores/iTemsStore";

export default function Sidebar() {
  const [sortBy, setSortBy] = useState("default");

  const items = useItemsStore((state) => state.items);

  console.log("sidebar");
  return (
    <div className="px-5 py-4 col-span-2 row-span-9">
      {items.length ? (
        <>
          <ListFilter sortBy={sortBy} setSortBy={setSortBy} />
          <ItemsList sortBy={sortBy} setSortBy={setSortBy} />
        </>
      ) : (
        <EmptyBox />
      )}
    </div>
  );
}
