import { Heart } from "lucide-react";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import { useWishlist } from "../../../context/WishlistContext";

const ProductCard = ({
  product,
}) => {
  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const wished =
    isInWishlist(product.id);

  const handleWishlist = (
    e
  ) => {
    e.preventDefault();

    toggleWishlist(product);

    toast.success(
      wished
        ? "Removed from wishlist"
        : "Added to wishlist"
    );
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block cursor-pointer"
    >
      <div
        className="
          relative
          aspect-[3/4]
          overflow-hidden
          rounded-2xl
          bg-gray-100
        "
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

        <button
          onClick={handleWishlist}
          className="
            absolute
            right-4
            top-4
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/90
            transition
          "
        >
          <Heart
            size={18}
            className={
              wished
                ? "fill-[#6C63FF] text-[#6C63FF]"
                : "text-gray-700"
            }
          />
        </button>

        <button
          onClick={(e) =>
            e.preventDefault()
          }
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
        <span
          className="
            text-xs
            uppercase
            tracking-wider
            text-gray-500
          "
        >
          {product.category}
        </span>

        <h3
          className="
            mt-1
            text-base
            font-semibold
            text-gray-900
            sm:text-lg
          "
        >
          {product.name}
        </h3>

        <p
          className="
            mt-1
            font-medium
            text-[#6C63FF]
          "
        >
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;