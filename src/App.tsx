import Footer from "./components/Footer";
import Header from "./components/Header";
import Table from "./components/Table";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden gap-2">
      <Header />
      <hr className="border-gray-200" />
      <main className="flex flex-col overflow-x-auto gap-2">
        <Toolbar />
        <Table />
      </main>

      <Footer />
    </div>
  );
}
export default App;
