import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <>
      <div className="container mx-auto md:px-8 pt-12">
        <div className="p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700 text-white">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 drop-shadow-lg" />
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Order Confirmed!
          </h2>
          <p className="text-lg text-gray-300 font-md leading-tight mb-4">
            Your transaction is complete. A confirmation email has been sent to
            your account.
          </p>
          <div className="bg-green-900/30 border border-green-700 drop-shadow-lg rounded-lg font-mono text-left inline-block text-green-300 text-sm p-5 ">
            <p className="font-semibold text-lg mb-1">
              {deliveryDetails?.name}
            </p>
            <p>{deliveryDetails?.address}</p>
            <p>
              {deliveryDetails?.city}, {deliveryDetails?.zip}
            </p>
          </div>
          <Link
            to="/home"
            className="mb-4 mt-8 w-full max-auto text-white text-xl font-extrabold uppercase bg-orange-600 rounded-full  py-3 shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wider"
          >
            continue shopping
          </Link>
        </div>
      </div>
    </>
  );
};
export default OrderConfirmation;
