import { ShoppingBag } from "lucide-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useCheckout } from "../../../context/CheckoutContext";

const ProductActions = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { startCheckout } = useCheckout();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart");
  };

  const handleBuyNow = () => {
    startCheckout([{ ...product, quantity: 1 }]);
    navigate("/checkout");
  };

  return (
    <div className="mt-10 space-y-4">
      <button
        onClick={handleAddToCart}
        className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-primary text-lg font-semibold text-white transition-all hover:bg-primary-dark"
      >
        <ShoppingBag size={20} />
        Add to Cart
      </button>

      <button
        onClick={handleBuyNow}
        className="h-14 w-full rounded-2xl border-2 border-primary text-lg font-semibold text-primary transition-all hover:bg-primary/5"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductActions;
