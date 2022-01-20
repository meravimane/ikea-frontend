import "./App.css";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { Login } from "./Components/Login";
import { Navbar } from "./Components/Navbar"
import { Route, Router, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar>/</Navbar>
      <Routes>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
