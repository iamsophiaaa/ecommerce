import { useCart } from "../context/CartContext";
import { Package, MapPin, Zap } from "lucide-react";
import OrderConfirmation from "./OrderConfirmation";
import { useState } from "react";
import { Link } from "react-router-dom";
const Checkout = () => {
  const { cart, cartTotalPrice, clearCart } = useCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };
  if (isConfirmed) {
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;
  }
  // console.log(deliveryDetails);
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
          Finalize Order
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 p-8 bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl">
            <h3 className="text-orange-400 text-xl font-bold  mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4">
              <MapPin className="text-orange-500 w-7 h-7" />
              <span>Shipping Information</span>
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {Object.keys(deliveryDetails).map((key) => (
                <div key={key} className="mb-4">
                  <label
                    htmlFor={key}
                    className="block text-sm font-semibold mb-4 text-gray-300 capitalize mb-1"
                  >
                    {key === "zip" ? "Pin Code" : key}
                  </label>
                  <input
                    type={key === "zip" ? "number" : "text"}
                    onChange={handleChange}
                    id={key}
                    name={key}
                    value={deliveryDetails[key]}
                    required
                    className="mt-1 block w-full px-5 py-3 border border-gray-700 rounded-xl shadow-inner text-white bg-gray-800 placeholder-gray-800"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="mb-4 mt-8 w-full max-auto text-white text-xl font-extrabold uppercase bg-orange-600 rounded-full  py-3 shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wider"
              >
                <Package className="w-6 h-6 " />
                <span>Pay and Confirm Order (Rs{cartTotalPrice})</span>
              </button>
            </form>
          </div>
          <div className="lg:col-span-1 p-8 bg-gray-900 shadow-2xl rounded-2xl border-1-4 border-orange-700 sticky top-20 h-fit border">
            <div className="text-white  text-3xl font-bold mb-5 pb-4 border-b border-y-gray-700 flex items-center space-x-2 ">
              <Package className="text-orange-400 w-6 h-6" />
              <h2>Summary</h2>
            </div>
            <div className="border-b border-y-gray-700 mb-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="pb-4 border-b border-y-gray-700 flex items-center justify-between text-xl mb-4 "
                >
                  <h2 className="trucate text-gray-400 ">{item.name}</h2>
                  <h2 className=" font-md  text-orange-300 tracking-tight">
                    Rs.{(item.price * item.quantity).toFixed(2)}
                  </h2>
                </div>
              ))}
              <div className="flex items-center justify-between text-xl mb-4">
                <h2 className="text-gray-400 ">SubTotal:</h2>
                <h2 className=" text-md font-bold text-white tracking-tight">
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
            <Link
              to="/checkout"
              className="mb-4 mt-8 w-full max-auto text-white text-xl font-extrabold uppercase bg-orange-600 rounded-full  py-3 shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wider"
            >
              <Zap className="w-6 h-6 " />
              <span>proceed securely</span>
            </Link>
            <p className="text-gray-500 text-sm text-center">
              All transactions are encrypted and secure
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
