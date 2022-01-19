import "./App.css";
import "antd/dist/antd.css";
import { Footer } from "./Components/Footer";
import { ProductDetails } from "./Components/ProductDetails";

function App() {
  return (
    <div className="App">
      <ProductDetails></ProductDetails>
      <Footer />
    </div>
  );
}

export default App;
