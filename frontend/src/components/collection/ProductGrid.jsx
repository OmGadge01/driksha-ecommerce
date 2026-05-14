import ProductCard from "../product/ProductCard";
import collectionProducts from "../../data/collectionProducts";

const ProductGrid = () => {
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
      {collectionProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;