import CategoryFilter from "../components/CategoryFilter";
import SearchFilter from "../components/SearchFilter";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useState } from "react";
const ProductList = () => {
  const [selectedCategory, setselectedCategory] = useState("All");
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState(" ");
  const filterProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return (
    <>
      <div className=" container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setselectedCategory}
        />
        <h2 className="text-2xl font-extrabold mx-auto px-4 md:px-4 pt-4">
          Featured Gear ({products.length} items )
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
          {filterProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
