import { useParams } from "react-router-dom";

import MainLayout from "../../components/customer/layout/MainLayout";

import ProductGallery from "../../components/customer/product/ProductGallery";
import ProductInfo from "../../components/customer/product/ProductInfo";
import ProductSelectors from "../../components/customer/product/ProductSelectors";
import ProductActions from "../../components/customer/product/ProductActions";

import ProductShipping from "../../components/customer/product/ProductShipping";
import ProductTabs from "../../components/customer/product/ProductTabs";
import RelatedProducts from "../../components/customer/product/RelatedProducts";

import Footer from "../../components/customer/layout/Footer";

import products from "../../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <MainLayout>
        <div
          className="
            flex
            min-h-[60vh]
            items-center
            justify-center
          "
        >
          <h1 className="text-3xl font-bold">
            Product Not Found
          </h1>
        </div>

        <Footer />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* PRODUCT SECTION */}

        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-12
          "
        >
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.images}
            />
          </div>

          <div className="lg:col-span-5">
            <ProductInfo product={product} />

            <ProductSelectors
              colors={product.colors}
              sizes={product.sizes}
            />

            <ProductActions
              product={product}
            />

            <ProductShipping
              shipping={product.shipping}
            />
          </div>
        </div>

        {/* PRODUCT TABS */}

        <ProductTabs product={product} />

        {/* RELATED PRODUCTS */}

        <RelatedProducts
          products={products}
          currentProductId={product.id}
        />
      </div>

      <Footer />
    </MainLayout>
  );
};

export default ProductDetails;