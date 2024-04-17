import { useState } from "react";

export default function ListFilter({ items }) {
  const options = ["Sort by default", "packed", "unpacked"];
  const [sortBy, setSortBy] = useState(options[0]);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "packed") {
      return b.packed - a.packed;
    }

    if (sortBy == "unpacked") {
      return a.packed - b.packed;
    }

    return;
  });

  console.log(sortedItems);

  return (
    <select
      value={sortBy}
      onChange={(option) => setSortBy(option.value)}
      name="sort"
      className="w-full border p-3 rounded-lg"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
