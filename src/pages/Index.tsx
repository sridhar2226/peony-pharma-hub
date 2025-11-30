import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProductDivisions from "@/components/ProductDivisions";
import PeofenacSection from "@/components/PeofenacSection";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";
import '../App.css'

const Index = () => {
  return (
    <div>
      <Header />
      <main className="mt-16 main-conatiner">
        <HeroSection />
        <AboutPreview />
        <PeofenacSection />
        <ProductDivisions />
        <PartnerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
