import { useState } from "react";
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
  const [items, setItems] = useState(initialValues);

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
  return (
    <div className="w-screen flex justify-start gap-5 flex-col items-center relative min-h-screen font-jakarta bg-orange-100">
      <BackgroundHeading />

      <main className="shadow-xl z-[999] max-w-screen-lg w-full h-[35vw] bg-slate-50 rounded-2xl grid grid-cols-3 grid-rows-8 overflow-hidden">
        <Header numberOfItems={items.length} totalPackedItems={packed.length} />
        <Sidebar>
          {items.length ? (
            <>
              <ListFilter items={items} />
              <ItemsList
                onCheck={handleCheck}
                onDelete={handleDelete}
                items={items}
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
