import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProductSection from "@/components/ProductSection";
import ResearchQuality from "@/components/ResearchQuality";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ProductSection />
        <ResearchQuality />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
