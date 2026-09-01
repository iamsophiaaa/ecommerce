import { Link } from "react-router-dom";
import { House, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
const Navbar = () => {
  const { cartCount } = useCart();
  return (
    <>
      <header className="sticky top-0 bg-gray-950/50 backdrop-blur-md shadow-2xl shadow-gray-950/70 border-b border-orange-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to={"/"}>
            <div className="flex items-center space-x-3 cursor-pointer">
              <House className="w-8 h-8 text-orange-400 drop-shadow-lg" />
              <h1 className="text-4xl font-extrabold tracking-widest uppercase">
                s <span className="text-orange-400">store</span>
              </h1>
            </div>
          </Link>
          <nav className="flex items-center space-x-6">
            <Link
              to={"/cart"}
              className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration:200 border border-orange-400/50 shadow-lg cursor-pointer"
            >
              {" "}
              <ShoppingCart className="w-6 -h6 text-orange-400 " />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 font-bold text-xs leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-6 h-5">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
