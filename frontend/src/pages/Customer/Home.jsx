import CategoryGrid from "../../components/home/CategoryGrid"
import ProductSection from "../../components/home/ProductSection";
import PromoBanner from "../../components/home/Promobanner";
import ValuesSection from "../../components/home/ValueSection";
import Footer from "../../components/layout/Footer";
import MainLayout from "../../components/layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
   <HeroSection />

      <CategoryGrid />

      <PromoBanner />

      <ProductSection />

      <ValuesSection />

      <Footer />
    </MainLayout>
  );
};

export default Home;