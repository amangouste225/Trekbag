import Items from "./Items";

export default function ItemsList({
  itemsList,
  setItemsList,
  handleCheck,
  handleDelete,
}) {
  return (
    <ul className="divide-y-2 my-5 flex flex-col">
      {itemsList.map((item, i) => (
        <Items
          handleCheck={handleCheck}
          key={i}
          item={item}
          id={i}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
