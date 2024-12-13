import { useCartContext } from "../context/CartContext";

const Cart = () => {


  
  const { cartItems, removeFromCart } = useCartContext();

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold text-gray-700">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2">
          Browse the homepage to add your favorite products to the cart.
        </p>
      </div>
    );
  }


  
 
  return (

   
    <div className="w-[90%] mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
        Your Shopping Cart
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">
                Product
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Price
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Quantity
              </th>
              <th className="border border-gray-200 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 bg-black text-white py-2 flex items-center">
                  <img
                    src={item?.img}
                    alt={item?.title}
                    className="w-16 h-16 rounded-md mr-4"
                  />
                  <span className="text-white">{item.title}</span>
                </td>
               {item.quantity === 1 ? (
                 <td className="border border-gray-200 px-4 bg-black text-white py-2 text-center">
                 ${item.price} 
               </td>
               ) : (
                <td className="border border-gray-200 px-4 bg-black text-white py-2 text-center">
                ${item.price *= item.quantity} 
              </td>
               )
              }
                <td className="border border-gray-200 px-4 bg-black text-white py-2 text-center ">

                  {item.quantity}
                </td>
                <td className="border border-gray-200 px-4 bg-black text-white py-2 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-3 bg-green-500 text-white rounded-md text-lg font-bold hover:bg-green-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
