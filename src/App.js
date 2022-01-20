import "./App.css";
import "antd/dist/antd.css";
import { Footer } from "./Components/Footer";
import { PaymentPage } from "./Components/PaymentPage";
import { ProductDetails } from "./Components/ProductDetails";
import { Cart } from "./Components/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
        <Route
          path="/productdetails/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route
          path="*"
          element={
            <h1 style={{ marginTop: "20px", marginBottom: "70px" }}>
              404 Page Not found...
            </h1>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
