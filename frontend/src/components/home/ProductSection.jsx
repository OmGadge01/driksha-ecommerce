<<<<<<< HEAD
import ProductCard from "../product/ProductCard";
import products from "../../data/products";

const ProductSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Trending Now
          </h2>

          <p className="mt-2 text-gray-500">
            Our most coveted pieces this week.
          </p>
        </div>

        <button
          className="
            text-sm
            font-semibold
            text-[#6C63FF]
          "
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

=======
import ProductCard from "../product/ProductCard";
import products from "../../data/products";

const ProductSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24">
      <div className="mb-8 sm:mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Trending Now
          </h2>

          <p className="mt-2 text-gray-500">
            Our most coveted pieces this week.
          </p>
        </div>

        <button
          className="
            text-sm
            font-semibold
            text-[#6C63FF]
          "
        >
          See All
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

>>>>>>> integration
export default ProductSection;