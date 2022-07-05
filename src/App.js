import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./Pages/Authentications/ForgotPassword";
import Login from "./Pages/Authentications/Login";
import Signup from "./Pages/Authentications/Signup";
import Blogs from "./Pages/Blog/Blogs";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
      </Routes>
      <Footer/>
    </Navbar>
  );
}

export default App;
