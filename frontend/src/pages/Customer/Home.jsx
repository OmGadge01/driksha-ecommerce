import CategoryGrid from "../../components/customer/home/CategoryGrid"
import ProductSection from "../../components/customer/home/ProductSection";
import PromoBanner from "../../components/customer/home/Promobanner";
import ValuesSection from "../../components/customer/home/ValueSection";
import Footer from "../../components/customer/layout/Footer";
import MainLayout from "../../components/customer/layout/MainLayout";
import HeroSection from "../../components/customer/home/HeroSection"

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