import { Button } from "@/components/ui/button";
import { Pill, Heart, Baby, Droplet, Stethoscope, Leaf, Syringe, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const ProductDivisions = () => {
  const [ref, isVisible] = useScrollAnimation();
  const navigate = useNavigate();

  const divisions = [
    { icon: Pill, name: "Allopathic Medicines", color: "text-blue-500" },
    { icon: Activity, name: "Pain Relief", color: "text-red-500" },
    { icon: Droplet, name: "Gastro & Acidity", color: "text-green-500" },
    { icon: Stethoscope, name: "Cough & Cold", color: "text-purple-500" },
    { icon: Leaf, name: "Vitamins & Nutrition", color: "text-orange-500" },
    { icon: Baby, name: "Pediatric & Infant Care", color: "text-pink-500" },
    { icon: Syringe, name: "Skin & Topicals", color: "text-teal-500" },
    { icon: Heart, name: "Veterinary Care", color: "text-indigo-500" }
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Divisions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive healthcare solutions across multiple therapeutic categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {divisions.map((division, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 shadow-card hover:shadow-luxury transition-all duration-500 transform hover:scale-105 cursor-pointer ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-subtle rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <division.icon className={`w-8 h-8 ${division.color}`} />
                </div>
                <h3 className="text-base md:text-lg font-bold text-foreground">
                  {division.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center">
          <Button 
            variant="medical" 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => navigate('/products')}
          >
            View All Products
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProductDivisions;
