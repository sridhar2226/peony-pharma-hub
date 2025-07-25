import { Button } from "@/components/ui/button";
import { ArrowRight, Pill, Syringe, Stethoscope, Shield } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import pharmaceuticalProducts from "@/assets/pharmaceutical-products.jpg";

const ProductSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [categoriesRef, visibleCategories] = useStaggeredAnimation(3);

  const productCategories = [
    {
      icon: Pill,
      title: "Tablets & Capsules",
      description: "High-quality oral solid dosage forms manufactured in WHO-GMP certified facilities",
      products: ["Cardiovascular", "Diabetes Care", "Pain Management", "Antibiotics"]
    },
    {
      icon: Syringe,
      title: "Injectables",
      description: "Sterile injectable solutions for critical care and specialized treatments",
      products: ["IV Solutions", "Ampoules", "Vials", "Pre-filled Syringes"]
    },
    {
      icon: Stethoscope,
      title: "Critical Care",
      description: "Life-saving medications for emergency and intensive care applications",
      products: ["Emergency Medicine", "ICU Drugs", "Anesthetics", "Oncology"]
    }
  ];

  const featuredProducts = [
    {
      name: "CardioMax 50mg",
      category: "Cardiovascular",
      dosageForm: "Tablet",
      description: "Advanced cardiovascular protection with proven efficacy",
      price: "$25.99",
      inStock: true
    },
    {
      name: "DiabeCare Injectable",
      category: "Diabetes",
      dosageForm: "Injectable",
      description: "Precision diabetes management solution",
      price: "$89.99",
      inStock: true
    },
    {
      name: "PainRelief Plus",
      category: "Pain Management",
      dosageForm: "Capsule",
      description: "Fast-acting pain relief with extended duration",
      price: "$19.99",
      inStock: false
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive range of pharmaceutical products meeting global quality standards, 
            from routine medications to specialized critical care solutions.
          </p>
        </div>

        {/* Product Categories */}
        <div ref={categoriesRef} className="grid md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className={`group bg-gradient-card rounded-xl p-8 shadow-card hover:shadow-luxury transition-all duration-500 transform hover:scale-105 ${visibleCategories.includes(index) ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              <div className="space-y-2">
                {category.products.map((product, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary mr-2" />
                    {product}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Featured Products</h3>
              <div className="space-y-6">
                {featuredProducts.map((product, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-card">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">{product.category} • {product.dosageForm}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{product.price}</div>
                        <div className={`text-sm ${product.inStock ? 'text-green-600' : 'text-red-500'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button 
                      variant={product.inStock ? "medical" : "outline"} 
                      size="sm" 
                      className="w-full"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Notify When Available'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={pharmaceuticalProducts}
                alt="Pharmaceutical Products"
                className="rounded-xl shadow-medical w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Access our complete product catalog with real-time inventory, 
              competitive pricing, and seamless ordering process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 group">
                Browse All Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 group">
                Start Ordering
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;