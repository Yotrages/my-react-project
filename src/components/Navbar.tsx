import { FaChevronDown, FaHeart, FaCaretLeft } from "react-icons/fa6";
import { Navlinks } from "../constants";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCartContext();

 
  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <section className="py-7">
      <div className="flex flex-row items-center justify-around gap-4">

        <div className="flex flex-row items-center gap-24 border-r border-r-[#ebebeb] px-4">
          <span className="flex flex-row items-center gap-4 font-bold text-[18px]">
            <a href="#">&#9776;</a> Shop Categories
          </span>
          <FaChevronDown className="text-[#848484]" />
        </div>

       
        <div className="flex flex-row items-center gap-4">
          <ul className="list-none flex flex-row items-center gap-4">
            {Navlinks.map((navlink, index) => (
              <li
                key={index}
                className="flex flex-row items-center gap-4 hover:text-[#0068c8] cursor-pointer font-bold text-[15px]"
              >
                {index === 4 ? (
                  <Link to={navlink.path}>{navlink.title}</Link>
                ) : (
                  <div
                    className={`gap-3 flex flex-row items-center ${
                      index === 0
                        ? "text-[#0068c8]"
                        : "text-black hover:text-[#0068c8]"
                    }`}
                  >
                    <Link to={navlink.path}>{navlink.title}</Link>
                    <FaChevronDown
                      className={`${
                        index === 0 ? "text-[#0068c8]" : "text-[#848484]"
                      }`}
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex flex-row items-center gap-4">
          <div className="border-r border-r-[#e6e6e6] px-6">
            <div className="flex flex-row relative">
              <Link to="/Cart">
                <FaHeart className="text-[30px]" />
                <p className="bg-[#0068c8] absolute h-[18px] w-[18px] text-[11px] font-semibold text-white top-[-3px] right-[-8px] text-center rounded-full">
                  {cartCount}
                </p>
              </Link>
            </div>
          </div>

        
          <div className="flex flex-row items-center gap-4">
            <p className="font-[800] text-[15px] text-black hover:text-[#0068c8]">
              Today&apos;s Deal
            </p>
            <span className="flex flex-row items-center">
              <FaCaretLeft className="text-[#dd2831]" />
              <p className="rounded-md ml-[-6px] text-white px-2 bg-[#dd2831]">
                Hot
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
