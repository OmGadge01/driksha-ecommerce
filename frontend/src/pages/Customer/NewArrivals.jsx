import MainLayout from "../../components/customer/layout/MainLayout";

import NewArrivalHero from "../../components/customer/new-arrivals/NewArrivalHero";
import ArrivalToolbar from "../../components/customer/new-arrivals/ArrivalToolbar";

import ProductGrid from "../../components/customer/Collections/ProductGrid";

import NewsletterBanner from "../../components/customer/new-arrivals/NewsletterBanner";

import Footer from "../../components/customer/layout/Footer";

import products from "../../data/products";

const NewArrivals = () => {
  const newArrivalProducts =
    products.filter(
      (product) =>
        product.isNewArrival
    );

  return (
    <MainLayout>
      <NewArrivalHero />

      <div className="mx-auto max-w-7xl px-6 py-14">
        
        <ArrivalToolbar
          totalProducts={
            newArrivalProducts.length
          }
        />

        <ProductGrid
          products={newArrivalProducts}
        />
      </div>

      <NewsletterBanner />

      <Footer />
    </MainLayout>
  );
};

export default NewArrivals;