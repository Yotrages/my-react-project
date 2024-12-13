import { Footer, Navbar, Topbar, Topnav } from "../components";
import Cart from "../components/Cart";
import { CartProvider } from "../context/CartContext";

const CartPage = () => {
  return (
    <CartProvider>
      <div>
        <Topbar />
        <Topnav />
        <Navbar />
        <Cart />
        <Footer />
      </div>
    </CartProvider>
  );
};

export default CartPage;
