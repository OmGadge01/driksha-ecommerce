import ProductCard from "../product/ProductCard";

const ProductGrid = ({ products }) => {
  if (!products.length) {
    return (
      <div
        className="
          flex
          min-h-[300px]
          items-center
          justify-center
        "
      >
        <h2
          className="
            text-2xl
            font-semibold
            text-gray-400
          "
        >
          No Products Found
        </h2>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;