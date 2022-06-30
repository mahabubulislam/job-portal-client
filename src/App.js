import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar>
        <Home />
        <Footer />
      </Navbar>
    </>
  );
}

export default App;
