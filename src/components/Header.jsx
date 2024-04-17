export default function Header({ numberOfItems, totalPackedItems }) {
  return (
    <header className="header col-span-3 row-span-1  bg-gray-200 flex flex-row justify-between items-center px-5">
      <div className="flex items-center gap-1">
        <span className="w-4 h-4 rounded-full bg-slate-400"></span>
        <span className="w-4 h-4 rounded-full bg-slate-400"></span>
        <span className="w-4 h-4 rounded-full bg-slate-400"></span>
      </div>
      <div>
        <p className="font-normal text-lg">
          <strong>{totalPackedItems}</strong> /{numberOfItems} items packed
        </p>
      </div>
    </header>
  );
}
