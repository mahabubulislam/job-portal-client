import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Authentications/Signup";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer/>
    </Navbar>
  );
}

export default App;
