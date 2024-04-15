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

function App() {
  const [itemsList, setItemsList] = useState(initialValues);

  const handleAddItems = (newItem) => {
    const newItems = [...itemsList, newItem];
    setItemsList(newItems);
  };

  const handleReset = () => {
    setItemsList([]);
  };

  const handleInitial = () => {
    setItemsList(initialValues);
  };

  const handleCompleteAll = () => {
    const newItems = itemsList.map((item) => {
      return { ...item, packed: true };
    });
    setItemsList(newItems);
    console.log(itemsList);
  };

  const handleCheck = (id) => {
    const newItems = itemsList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          packed: !item.packed,
        };
      }
      return item;
    });
    setItemsList(newItems);
  };

  const handleDelete = (id) => {
    setItemsList(itemsList.filter((item) => item.id !== id));
  };

  const handleInCompleteAll = () => {
    setItemsList(
      itemsList.map((item) => {
        return { ...item, packed: false };
      })
    );
  };

  const packed = itemsList.filter((item) => item.packed === true);
  return (
    <div className="w-screen flex justify-start gap-5 flex-col items-center relative min-h-screen font-jakarta bg-orange-100">
      <BackgroundHeading />

      <main className="shadow-xl z-[999] max-w-screen-lg w-full h-[35vw] bg-slate-50 rounded-2xl grid grid-cols-3 grid-rows-8 overflow-hidden">
        <Header itemsList={itemsList} number={packed.length} />
        <Sidebar>
          <ListFilter />
          <ItemsList
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            itemsList={itemsList}
            setItemsList={setItemsList}
          />
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
