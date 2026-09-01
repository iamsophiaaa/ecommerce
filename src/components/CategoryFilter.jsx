import { initialProducts } from "../data/product";
import { Tag } from "lucide-react";
const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];
const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6">
        <Tag className="w-5 h-5 text-orange-500 mt-2 mr-2  sm-block" />
        {availableCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md border border-white cursor-pointer ${selectedCategory === category ? "bg-orange-600 text-white shadow-orange-800/50 border-none " : "bg-gray-800 text-gray-300  hover:bg-orange-500/10 hover:border-orange-500 hover:text-orange-500"}`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};
export default CategoryFilter;
