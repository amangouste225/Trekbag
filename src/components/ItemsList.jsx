import Items from "./Items";

export default function ItemsList({ onCheck, onDelete, sortedItems }) {
  return (
    <ul className="divide-y-2 my-5 flex flex-col">
      {sortedItems.map((item, i) => (
        <Items
          onCheck={onCheck}
          key={i}
          item={item}
          id={i}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
