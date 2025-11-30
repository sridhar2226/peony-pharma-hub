import { Button } from "@/components/ui/button";
import { ArrowRight, Network, Truck, ShieldCheck, TrendingUp, Users, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

const PartnerSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const navigate = useNavigate();

  const benefits = [
    { icon: Award, text: "A 35-year reputation" },
    { icon: Users, text: "1,000+ ready retail touchpoints" },
    { icon: Network, text: "District-level coordination" },
    { icon: Truck, text: "Tech-enabled ordering & credit systems" },
    { icon: TrendingUp, text: "High-demand, repeat-sale SKUs" },
    { icon: ShieldCheck, text: "Trusted healthcare network" }
  ];

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Become a Peony Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Peony provides new brands, pharmacies, institutions, and distributors access to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-luxury transition-all duration-500 transform hover:scale-105 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{benefit.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join a 35-Year Healthcare Network
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              With deep roots and modern ambitions. Let's grow together.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 group"
              onClick={() => navigate('/contact')}
            >
              Join as Distributor
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
