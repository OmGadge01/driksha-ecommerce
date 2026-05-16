import { Star } from "lucide-react";

const ProductInfo = ({ product }) => {
  return (
    <div>
      <span
        className="
          rounded-full
          bg-[#6C63FF]/10
          px-4
          py-1
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-[#6C63FF]
        "
      >
        {product.category}
      </span>

      <h1
        className="
          mt-5
          text-4xl
          font-bold
          leading-tight
          tracking-tight
          text-gray-900
          lg:text-5xl
        "
      >
        {product.name}
      </h1>

      <div
        className="
          mt-5
          flex
          items-center
          gap-4
        "
      >
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={18}
              className="
                fill-yellow-400
                text-yellow-400
              "
            />
          ))}
        </div>

        <span className="text-gray-500">
          4.8 (124 Reviews)
        </span>
      </div>

      <p
        className="
          mt-6
          text-3xl
          font-bold
          text-[#6C63FF]
        "
      >
        {product.price}
      </p>

      <p
        className="
          mt-8
          leading-8
          text-gray-500
        "
      >
        Designed for modern lifestyles with
        premium craftsmanship, timeless aesthetics,
        and everyday luxury comfort.
      </p>
    </div>
  );
};

export default ProductInfo;