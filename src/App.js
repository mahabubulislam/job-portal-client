import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from "./Pages/Authentications/ForgotPassword";
import Login from "./Pages/Authentications/Login";
import Signup from "./Pages/Authentications/Signup";
import Blogs from "./Pages/Blog/Blogs";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Jobs from "./Pages/Jobs/Jobs";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/reset-password" element={<ForgotPassword />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
    </Navbar>
  );
}

export default App;
