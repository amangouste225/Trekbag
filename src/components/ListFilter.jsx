import Select from "react-select";

export default function ListFilter({ items, options, setSortBy }) {
  return (
    <Select
      onChange={(option) => setSortBy(option.value)}
      defaultValue={options[0]}
      options={options}
    />
  );
}
