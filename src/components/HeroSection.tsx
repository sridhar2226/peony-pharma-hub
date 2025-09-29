import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-pharma-lab.jpg";
import '../App.css'

const HeroSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [badgesRef, badgesVisible] = useScrollAnimation();
  const [headlineRef, headlineVisible] = useScrollAnimation();
  const [subRef, subVisible] = useScrollAnimation();
  const [ctaRef, ctaVisible] = useScrollAnimation();

  return (
    <>
      <section
        ref={sectionRef}
        className="overflow-hidden bg-gradient-hero hero-section_main"
      >
        {/* Content */}
        <div className="container mx-auto px-6 text-center">
          {/* Trust Badges */}
          {/* <div
            ref={badgesRef}
            className={`flex justify-center gap-8 w-100 align-items-center mb-4 transition-all duration-1000 ${
              badgesVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-center text-white/90 text-sm">
              <Shield className="w-5 h-5 mr-2" />
              WHO-GMP Certified
            </div>
            <div className="flex items-center justify-center text-white/90 text-sm">
              <Award className="w-5 h-5 mr-2" />
              FDA Approved
            </div>
            <div className="flex items-center justify-center text-white/90 text-sm">
              <Globe className="w-5 h-5 mr-2" />
              Global Reach
            </div>
          </div> */}

          {/* Headline */}
          <h1
            ref={headlineRef}
            className={`text-4xl md:text-6xl font-bold text-white mb-3 leading-tight transition-all duration-1000 ${
              headlineVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Innovating Healthcare
            <br />
            <span>Through Scientific Excellence</span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subRef}
            className={`text-lg md:text-xl text-white/80 mb-4 md:mt-4 mx-auto md:mx-0 leading-relaxed transition-all duration-1000 ${
              subVisible ? "animate-fade-in-up delay-200" : "opacity-0"
            }`}
          >
            Leading pharmaceutical innovation with world-class quality standards,
            delivering life-saving medicines to patients globally through
            cutting-edge research and manufacturing excellence.
          </p>

          {/* CTA */}
          <div
            ref={ctaRef}
            className={`flex justify-center transition-all duration-1000 ${
              ctaVisible ? "animate-fade-in-up delay-300" : "opacity-0"
            }`}
          >
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 mb-4 min-w-[200px] group"
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
      </section>
    </>
  );
};

export default HeroSection;
