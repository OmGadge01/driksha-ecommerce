import MainLayout from "../../components/layout/MainLayout";
import CollectionHeader from "../../components/Collections/CollectionHeader";
import FilterSidebar from "../../components/Collections/FilterSidebar";
import ProductGrid from "../../components/Collections/ProductGrid";
import Pagination from "../../components/Collections/Pagination";
import Footer from "../../components/layout/Footer";

const Collection = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-7xl px-6 py-10">
        
        <CollectionHeader />

        <div className="flex flex-col gap-12 md:flex-row">
          <FilterSidebar />

          <div className="flex-1">
            <ProductGrid />

            <Pagination />
          </div>
        </div>
      </div>

      <Footer />
    </MainLayout>
  );
};

export default Collection;