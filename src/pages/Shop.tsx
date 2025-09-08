import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import ShopSection from "@/components/ShopSection";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Our Shop
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover amazing pharmaceutical products at unbeatable prices. 
            Quality assured and internationally certified.
          </p>
        </div>
      </section>

      {/* <ShopSection /> */}
      <Footer />
    </div>
  );
};

export default Shop;