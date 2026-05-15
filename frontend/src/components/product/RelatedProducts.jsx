import ProductCard from "./ProductCard";

const RelatedProducts = ({
  products,
  currentProductId,
}) => {
  const relatedProducts =
    products
      .filter(
        (item) =>
          item.id !== currentProductId
      )
      .slice(0, 4);

  return (
    <div className="mt-28">
      
      <div className="mb-10">
        <h2
          className="
            text-4xl
            font-bold
            tracking-tight
          "
        >
          You May Also Like
        </h2>

        <p className="mt-3 text-gray-500">
          Curated recommendations
          based on your interests.
        </p>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {relatedProducts.map(
          (product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;