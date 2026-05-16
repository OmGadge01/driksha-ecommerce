import MainLayout from "../../components/customer/layout/MainLayout";

import Footer from "../../components/customer/layout/Footer"

import ProductGrid from "../../components/customer/Collections/ProductGrid";

import { useWishlist } from "../../context/WishlistContext";

const Wishlist = () => {
  const { wishlistItems } =
    useWishlist();

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        <div className="mb-12">
          <h1
            className="
              text-5xl
              font-bold
              tracking-tight
            "
          >
            Wishlist
          </h1>

          <p className="mt-4 text-gray-500">
            Your saved premium
            collections.
          </p>
        </div>

        <ProductGrid
          products={wishlistItems}
        />
      </div>

      <Footer />
    </MainLayout>
  );
};

export default Wishlist;