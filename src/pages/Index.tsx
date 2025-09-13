import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
// import ProductSection from "@/components/ProductSection";
// import ShopSection from "@/components/ShopSection";
// import ResearchQuality from "@/components/ResearchQuality";
import Footer from "@/components/Footer";
import '../App.css'

const Index = () => {
  return (
    <div>
      <Header />
      <main className="mt-16 main-conatiner">
        <HeroSection />
        <AboutPreview />
        {/* <ProductSection /> */}
        {/* <ShopSection /> */}
        {/* <ResearchQuality /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
