import { useState } from "react";

const sizes = ["XS", "S", "M", "L", "XL"];

const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedSize, setSelectedSize] = useState("XS");
  const [selectedColor, setSelectedColor] = useState("#111827");

  const categories = ["All Products", "Outerwear", "Knitwear", "Accessories"];
  const colors = ["#111827", "#E5E7EB", "#F97316", "#D4AF37", "#334155"];

  return (
    <aside className="w-full md:w-72 p-4 md:p-0">
      <div className="sticky top-28 space-y-8 md:space-y-10">

        <div>
          <h3 className="mb-4 md:mb-5 text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-900">
            Category
          </h3>
          <div className="space-y-2 md:space-y-4">
            {categories.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3 transition-opacity hover:opacity-70"
                onClick={() => setSelectedCategory(item)}
              >
                <div className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all ${
                  selectedCategory === item ? "border-primary bg-primary" : "border-gray-300"
                }`} />
                <span className={`text-xs md:text-sm transition-colors ${
                  selectedCategory === item ? "text-gray-900 font-medium" : "text-gray-500"
                }`}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 md:mb-5 text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-900">
            Size
          </h3>
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`h-9 md:h-11 rounded-xl border text-xs md:text-sm font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "border-primary bg-primary/10 text-primary shadow-md"
                    : "border-gray-200 text-gray-500 hover:border-primary hover:text-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 md:mb-5 text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-900">
            Colors
          </h3>
          <div className="flex gap-3 flex-wrap">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
                className={`h-8 w-8 rounded-full transition-all duration-200 ${
                  selectedColor === color
                    ? "ring-2 ring-primary ring-offset-2 scale-110"
                    : "hover:scale-105 opacity-80 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
};

export default FilterSidebar;
