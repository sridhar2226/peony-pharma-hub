import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Shield, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";
import "../App.css";

const HeroSection = () => {
  const [headlineRef, headlineVisible] = useScrollAnimation();
  const [subRef, subVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();
  const [badgesRef, badgesVisible] = useScrollAnimation();

  const highlights = [
    { icon: Award, text: "WHO-GMP Certified" },
    { icon: Shield, text: "FDA Approved" },
    { icon: Globe, text: "50+ Countries" }
  ];

  return (
    <section className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Cover Photo Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Pharmaceutical Excellence" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            ref={headlineRef}
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight transition-all duration-1000 ${
              headlineVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Innovating Healthcare
            <br />
            <span className="text-primary">Through Scientific Excellence</span>
          </h1>

          <p
            ref={subRef}
            className={`text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
              subVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Leading pharmaceutical innovation with world-class quality standards,
            delivering life-saving medicines to patients globally through
            cutting-edge research and manufacturing excellence.
          </p>

          {/* Highlight Badges */}
          <div
            ref={badgesRef}
            className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-6 md:mb-8 transition-all duration-1000 ${
              badgesVisible ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full shadow-card backdrop-blur-sm">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <div
            ref={ctaRef}
            className={`flex justify-center transition-all duration-1000 ${
              ctaVisible ? "animate-fade-in-up delay-400" : "opacity-0"
            }`}
          >
            <Button
              variant="secondary"
              size="lg"
              className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 min-w-[180px] md:min-w-[200px] group"
              onClick={() =>
                window.open(
                  "https://preview--product-lane-shop.lovable.app/",
                  "_blank"
                )
              }
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
