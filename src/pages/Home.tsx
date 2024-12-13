import { Footer, Itemlist, Topbar, Deals, Topnav, Newsletter, Testimonials, Navbar, Products } from "../components";
import { CartProvider } from "../context/CartContext";


const Home = () => {
 

  return (
      <CartProvider>
    <div>
      <Topbar />
      <Topnav />
      <Navbar />
      <Itemlist />
      <Deals />
      <Products  />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
    </CartProvider>
  );
};

export default Home;
