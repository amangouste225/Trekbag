import BackgroundHeading from "./BackgroundHeading";
import AddItems from "./components/AddItems";
import Header from "./components/Header";

import Footer from "./Footer";
import "./styles/global.css";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <section>
      <BackgroundHeading />
      <main>
        <Header />
        <Sidebar />
        <AddItems />
      </main>
      <Footer />
    </section>
  );
}

export default App;
