import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/Cart";
import { products } from "./data/products";

export default function App() {
  const { id, imgUrl, price, name } = products[0];

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/cart"
            element={
              <Cart
                id={id}
                images={imgUrl}
                price={price}
                title={name}
                product={products[0]}
              />
            }
          />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
