const sizes = ["XS", "S", "M", "L", "XL"];

const FilterSidebar = () => {
  return (
    <aside className="w-full md:w-72">
      <div className="sticky top-28 space-y-10">
        
        <div>
          <h3
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-gray-900
            "
          >
            Category
          </h3>

          <div className="space-y-4">
            {[
              "All Products",
              "Outerwear",
              "Knitwear",
              "Accessories",
            ].map((item, index) => (
              <label
                key={item}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                "
              >
                <div
                  className={`
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded
                    border-2

                    ${
                      index === 0
                        ? "border-[#6C63FF] bg-[#6C63FF]"
                        : "border-gray-300"
                    }
                  `}
                />

                <span
                  className={`
                    text-sm

                    ${
                      index === 0
                        ? "text-gray-900"
                        : "text-gray-500"
                    }
                  `}
                >
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-gray-900
            "
          >
            Size
          </h3>

          <div className="grid grid-cols-3 gap-3">
            {sizes.map((size, index) => (
              <button
                key={size}
                className={`
                  h-11
                  rounded-xl
                  border
                  text-sm
                  font-medium
                  transition-all

                  ${
                    index === 0
                      ? "border-[#6C63FF] bg-[#6C63FF]/10 text-[#6C63FF]"
                      : "border-gray-200 text-gray-500 hover:border-[#6C63FF]"
                  }
                `}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="
              mb-5
              text-sm
              font-semibold
              uppercase
              tracking-wider
              text-gray-900
            "
          >
            Colors
          </h3>

          <div className="flex gap-3">
            {[
              "#111827",
              "#E5E7EB",
              "#6C63FF",
              "#D4AF37",
              "#334155",
            ].map((color, index) => (
              <button
                key={color}
                style={{ backgroundColor: color }}
                className={`
                  h-8
                  w-8
                  rounded-full

                  ${
                    index === 0
                      ? "ring-2 ring-[#6C63FF] ring-offset-2"
                      : ""
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;