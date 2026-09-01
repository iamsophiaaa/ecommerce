import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
const CartItem = ({ item }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const increaseQuantity = () => addToCart(item);
  const decreaseQuantity = () => removeFromCart(item.id);

  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-between p-4 sm:flex-row sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border-gray-800 transition duration-300 hover:border-orange-600/50">
        <div className=" flex  items-center space-x-4 w-full sm:w-auto">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700 "
          />
          <div>
            <h1 className="text-xl font-bold text-white line-clamp-1">
              {item.name}
            </h1>
            <h2 className="text-orange-400 text-sm font-semibold">
              Rs. {item.price.toFixed(2)}
            </h2>
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-end  w-full sm:w-2/5 space-x-4 ">
          <div className="flex flex-row items-center justify-between space-x-4 bg-gray-700 rounded-full px-3 py-1 border  border-gray-400 overflow-hidden shadow-lg">
            <button
              onClick={decreaseQuantity}
              className="flex items-center font-bold border border-gray-700 rounded-full transiton duration-150 w-8 h-8 justify-center hover:bg-gray-500 cursor-pointer"
            >
              -
            </button>
            <span className="px-3 text-base font-bold text-white ">
              {item.quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="flex items-center font-bold border border-gray-700 rounded-full transiton duration-150 w-8 h-8 justify-center hover:bg-gray-500 cursor-pointer"
            >
              +
            </button>
          </div>

          <p className="text-orange-300    font-extrabold ">
            Rs. {(item.price * item.quantity).toFixed(2)}
          </p>

          <div>
            <button
              onClick={() => removeFromCart(item.id, true)}
              className=" bg-orange-900/50  rounded-full cursor-pointer p-2 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <X className="w-6 h-6 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
