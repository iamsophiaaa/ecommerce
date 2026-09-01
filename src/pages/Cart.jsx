import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
const Cart = () => {
  const { cart, cartTotalPrice, cartCount, addToCart } = useCart();
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center justify-between mb-10">
          <Link
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-400 transition duration-150 font-bold text-lg"
          >
            <ChevronLeft className="w-6 h-6 mr-1" /> <span>Back to Store</span>
          </Link>
        </div>
        <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
          Shopping Cart ({cartCount})
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-900 shadow-2xl rounded-2xl border-1-4 border-orange-700 sticky top-20 h-fit border">
            <h2 className="text-white text-3xl font-bold mb-5 pb-4 border-b border-y-gray-700 flex items-center space-x-2 ">
              <span className="text-orange-400">Rs.</span> Order Total{" "}
            </h2>
            <div className="border-b border-y-gray-700 mb-4">
              <div className="flex items-center justify-between text-xl mb-4 ">
                <h2 className="text-gray-400 ">SubTotal:</h2>
                <h2 className=" font-bold text-white tracking-tight">
                  Rs.{cartTotalPrice.toFixed(2)}
                </h2>
              </div>
              <div className="flex items-center justify-between text-xl mb-4">
                <h2 className="text-gray-400 ">Shipping(Express):</h2>
                <h2 className=" text-md font-bold text-green-400 tracking-tight">
                  Free
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-between text-xl mb-4">
              <h2 className="text-white font-bold text-2xl tracking-tight ">
                Estimated Total:
              </h2>
              <h2 className=" text-xl font-bold text-orange-400 tracking-tight">
                Rs.{cartTotalPrice.toFixed(2)}
              </h2>
            </div>
            <button className="mb-4  w-full max-auto text-white text-md font-bold uppercase bg-orange-600 rounded-full  py-3 shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wide">
              <Zap className="w-5 h-5 " />
              <span>proceed securely</span>
            </button>
            <p className="text-gray-500 text-sm text-center">
              All transactions are encrypted and secure
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
