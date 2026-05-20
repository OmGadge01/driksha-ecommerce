import { useState } from "react";

const ProductSelectors = ({
  colors = [],
  sizes = [],
}) => {
  const [activeColor, setActiveColor] =
    useState(colors[0]);

  const [activeSize, setActiveSize] =
    useState(sizes[0]);

  return (
    <div className="mt-10 space-y-10">
      <div>
        <h3 className="mb-4 font-semibold">
          Color
        </h3>

        <div className="flex gap-4">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                setActiveColor(color)
              }
              style={{ backgroundColor: color }}
              className={`
                h-10
                w-10
                rounded-full

                Rs{
                  activeColor === color
                    ? "ring-2 ring-[#6C63FF] ring-offset-2"
                    : ""
                }
              `}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">
          Size
        </h3>

        <div className="grid grid-cols-3 gap-4">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() =>
                setActiveSize(size)
              }
              className={`
                h-12
                rounded-xl
                border
                text-sm
                font-medium
                transition-all

                Rs{
                  activeSize === size
                    ? "border-[#6C63FF] bg-[#6C63FF]/10 text-[#6C63FF]"
                    : "border-gray-200 text-gray-500"
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSelectors;