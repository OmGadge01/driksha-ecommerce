import { useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";

import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductSelectors from "../../components/product/ProductSelectors";
import ProductActions from "../../components/product/ProductActions";

import ProductShipping from "../../components/product/ProductShipping";
import ProductTabs from "../../components/product/ProductTabs";
import RelatedProducts from "../../components/product/RelatedProducts";

import Footer from "../../components/layout/Footer";

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