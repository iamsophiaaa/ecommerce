import { initialProducts } from "../data/product";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, Tag, ShoppingCart, Zap } from "lucide-react";
import { useCart } from "../context/CartContext";
const ProductDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setproduct] = useState();
  useEffect(() => {
    const foundProduct = initialProducts.find((data) => data.id == id);
    setproduct(foundProduct);
  }, [id]);
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <p>Loading product details...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
        <Link to={"/"}>
          <button className="flex items-center justify-center text-gray-400 cursor-pointer hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg">
            {" "}
            <ChevronLeft className="w-6 h-6 mr-1" /> <span>Back to Home</span>
          </button>
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <div className="w-full">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-100 h-100 lg:w-150 lg:h-150 object-cover rounded-2xl shadow-2xl shadow-gray-950 border-4 border-gray-800"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl text-white font-extrabold mb-4 leading-tight tracking-wide">
                {product?.name}
              </h1>
            </div>

            <h2 className="text-3xl text-orange-400 font-extrabold mb-4">
              Rs. {product?.price.toFixed(2)}
            </h2>
            <h2 className="flex items-center space-x-2 text-xl font-bold text-gray-200 mb-2 border-b border-orange-900/50 pb-2 ">
              <Tag className="w-4 h-4 text-orange-500" />
              <span>Product Overview</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-4 ">
              {product?.description}
            </p>
            <ul className="mb-4 max-auto space-y-3 px-4 py-2 bg-gray-800 text-gray-300 rounded-xl  shadow-sm shadow-gray-500 ">
              <li className="flex  items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>High-Quality, Professional Grade Materials</span>
              </li>
              <li className="flex  items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>
              <li className="flex  items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-orange-500" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>
            <button
              onClick={() => addToCart(product)}
              className="mb-4 w-full max-auto text-white text-md font-bold uppercase bg-orange-600 rounded-full  py-3 shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wide"
            >
              <ShoppingCart className="w-5 h-5 " />
              <span>Add to Cart</span>
            </button>

            <button className="  w-full max-auto text-orange-600 border-2 border-orange-600 text-md font-bold uppercase  rounded-full  py-3 shadow-orange-800/50 cursor-pointer hover:bg-orange-600 hover:text-white transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 tracking-wide">
              Keep Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
