import { ShoppingBag } from "lucide-react";

import toast from "react-hot-toast";

import { useCart } from "../../context/CartContext";

const ProductActions = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);

    toast.success("Added to cart");
  };

  return (
    <div className="mt-10 space-y-4">
      <button
        onClick={handleAddToCart}
        className="
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-2xl
          bg-[#6C63FF]
          text-lg
          font-semibold
          text-white
          transition-all
          hover:bg-[#5b52f5]
        "
      >
        <ShoppingBag size={20} />

        Add to Cart
      </button>

      <button
        className="
          h-14
          w-full
          rounded-2xl
          border-2
          border-[#6C63FF]
          text-lg
          font-semibold
          text-[#6C63FF]
          transition-all
          hover:bg-[#6C63FF]/5
        "
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;