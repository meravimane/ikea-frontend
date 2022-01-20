import "./App.css";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { Product } from "./Components/Products";

function App() {
  return (
    <div className="App">
      {/* <Cart></Cart> */}
      <Product/>
      <Footer />
    </div>
  );
}

export default App;
