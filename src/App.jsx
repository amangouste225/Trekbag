import BackgroundHeading from "./BackgroundHeading";
import AddItems from "./components/AddItems";
import Header from "./components/Header";

import Footer from "./Footer";
import "./styles/global.css";
import Sidebar from "./components/Sidebar";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <section>
      <BackgroundHeading />
      <main>
        <ContextProvider>
          <Header />
          <Sidebar />
          <AddItems />
        </ContextProvider>
      </main>
      <Footer />
    </section>
  );
}

export default App;
