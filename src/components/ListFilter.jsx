import Select from "react-select";

export default function ListFilter({ sortBy, setSortBy }) {
  const options = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Packed" },
    { value: "unpacked", label: "Unpacked" },
  ];

  return (
    <Select
      onChange={(option) => setSortBy(option.value)}
      defaultValue={sortBy}
      options={options}
    />
  );
}
