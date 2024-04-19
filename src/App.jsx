import { useEffect, useMemo, useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import AddItems from "./components/AddItems";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import ListFilter from "./components/ListFilter";
import Footer from "./Footer";
import "./styles/global.css";
import { initialValues } from "./lib/constants";
import Sidebar from "./components/Sidebar";
import EmptyBox from "./components/EmptyBox";

function App() {
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

  const packed = items.filter((item) => item.packed === true);

  const options = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Packed" },
    { value: "unpacked", label: "Unpacked" },
  ];

  const [sortBy, setSortBy] = useState("default");

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

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className="w-screen flex justify-start gap-5 flex-col items-center relative min-h-screen font-jakarta bg-orange-100">
      <BackgroundHeading />

      <main className="shadow-xl z-[999] max-w-screen-lg w-full h-[65vh] bg-slate-50 rounded-2xl grid grid-cols-3 grid-rows-10 overflow-hidden">
        <Header numberOfItems={items.length} totalPackedItems={packed.length} />
        <Sidebar>
          {items.length ? (
            <>
              <ListFilter
                items={items}
                options={options}
                setSortBy={setSortBy}
              />
              <ItemsList
                sortedItems={sortedItems}
                onCheck={handleCheck}
                onDelete={handleDelete}
              />
            </>
          ) : (
            <EmptyBox />
          )}
        </Sidebar>
        <AddItems
          onAddItems={handleAddItems}
          onReset={handleReset}
          onInitial={handleInitial}
          onCompleteAll={handleCompleteAll}
          onInCompleteAll={handleInCompleteAll}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
