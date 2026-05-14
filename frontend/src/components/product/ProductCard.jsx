import { Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <button
          className="
            absolute
            top-4
            right-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/90
            text-gray-700
            transition
            hover:text-[#6C63FF]
          "
        >
          <Heart size={18} />
        </button>

        <button
          className="
            absolute
            bottom-4
            left-4
            right-4
            translate-y-10
            rounded-xl
            bg-[#6C63FF]
            py-3
            text-sm
            font-medium
            text-white
            opacity-0
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          Add to Cart
        </button>
      </div>

      <div className="pt-4">
        <span className="text-xs uppercase tracking-wider text-gray-500">
          {product.category}
        </span>

        <h3 className="mt-1 text-base sm:text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 font-medium text-[#6C63FF]">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;