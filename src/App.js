import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/signup/SignUp.jsx";
import Login from "./pages/Login/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 
 import DashBoard from "./components/DashBoard";
import Appbar from "./components/BookBar.jsx";
import BookBar from "./components/BookBar.jsx";
import Cart from "./components/Cart";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
      //  <BookBar/>
   
  );
}

export default App;
