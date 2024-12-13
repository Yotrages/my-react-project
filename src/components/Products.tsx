import { Bestsellers, Headings } from "../constants";
import { sellingcollection } from "../assets";
import { FaStar, FaHeart, FaChargingStation, } from "react-icons/fa6";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useCartContext } from "../context/CartContext";

const Products = () => {
  const { addToCart } = useCartContext();
  const [mouse, setMouse] = useState<number>(-1);

  const Mouseover = (index: number) => {
    setMouse(mouse === index ? -1 : index);
  };

  return (
    <section className="w-full py-10">
      <div className="px-14 border-b border-b-[#ebebeb] pb-4">
        {Headings.map((headings, index) => (
          <div
            className="flex flex-row justify-between items-center"
            key={index}
          >
            <h3 className="font-bold text-[30px] tracking-wide">
              {headings.title}
            </h3>
            <ul className="list-none flex flex-row flex-wrap items-center gap-7">
              {headings.links.map((link, index) => (
                <li
                  key={index}
                  className="font-[800] hover:text-[#0068c8] cursor-pointer tracking-wide text-[1.06rem]"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap gap-4 pt-10">
        <div className="px-8 m-auto">
          <span className="grid flex-wrap flex-row relative gap-5 grids">
            {Bestsellers.map((product, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 border border-[#ebebeb] rounded-lg"
              >
                <div
                  className="relative flex flex-row"
                  onMouseOver={() => Mouseover(index)}
                >
                  <img
                    className={`w-[200px]`}
                    src={product.img} 
                    alt={product.name}
                  />
                  <div className="flex flex-col flex-wrap gap-2 items-center left-3 absolute pt-4">
                    <span className="bg-[#0068c8] text-[#fff] radius-tag min-w-[42px] py-1 px-2 inline-block text-[12px] text-center rounded-md">
                      {product?.percentage}
                    </span>
                    <span
                      className={` ${
                        product?.Hot == null ? "hidden" : "inline-block"
                      } bg-[#dd2831] text-[#fff] radius-tag min-w-[42px] py-1 px-2 text-[12px] text-center rounded-md`}
                    >
                      {product?.Hot}
                    </span>
                  </div>
                  {mouse === index && (
                    <div className="absolute flex flex-col flex-wrap gap-2 items-center pt-4 right-3">
                      <button
                        title="Wishlist"
                        className="size-10 bg-[#fff] hover:bg-[#e8f3fe] border border-[#0000001a] flex p-0 items-center text-center rounded-full"
                      >
                        <FaHeart className="text-center m-auto" />
                      </button>
                      <button
                        title="Quick View"
                        className="size-10 bg-[#fff] hover:bg-[#e8f3fe] border border-[#0000001a] flex p-0 items-center text-center rounded-full"
                      >
                        <FaSearch className="text-center m-auto" />
                      </button>
                      <button
                        title="Compare"
                        className="size-10 bg-[#fff] hover:bg-[#e8f3fe] border border-[#0000001a] flex p-0 items-center text-center rounded-full"
                      >
                        <FaChargingStation className="text-center m-auto" />
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-row flex-wrap p-[14px] gap-[13px]">
                  <span className="text-[0.9rem] overflow-hidden text-[#848484]">
                    {product.name}
                  </span>
                  <h3 className="header text-[1rem] font-semibold">
                    {product.title}
                  </h3>
                  <div
                    className={`${
                      index === 3 ? "text-[#848484]" : "text-[#ff9800]"
                    } flex flex-row flex-wrap items-center gap-1 w-full`}
                  >
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <div className=" flex flex-row items-center text-[1.2rem] gap-[6px]">
                    <p className="text-[#dd2831] font-[700]">{product.price}</p>
                    <del className="text-[#848484]">{product?.wronged}</del>
                  </div>
                  <button
                    className="w-full px-7 py-4 border border-[#0068c8] hover:bg-[#0068c8] text-center rounded-md font-[800] hover:text-[#fff]"
                    onClick={() => addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        img: product.img // Convert price to number
    // Optional, as this will be handled dynamically
                      })}
                  >
                    {product.buttonText}
                  </button>
                </div>
              </div>
            ))}
            <img
              className="grid-start w-[546px]  rounded-md"
              src={sellingcollection}
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
