import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/Cart" />
      </Routes>
    </CartProvider>
  );
};

export default App;
