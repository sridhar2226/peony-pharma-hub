import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Target, Activity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PeofenacSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const benefits = [
    "Back pain",
    "Knee pain",
    "Shoulder strain",
    "Muscle soreness",
    "Sports injuries"
  ];

  return (
    <section ref={ref} className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <span className="text-white font-semibold">PEOFENAC PAIN RELIEF RANGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Fast-Acting, Deep-Penetrating Relief
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Made for athletes, workers, elders, and everyday champions who push through pain and never stop.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 group"
              onClick={() => window.open("https://shop.peonylifesciences.com/", "_blank")}
            >
              Shop Peofenac
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Zap className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Fast Action</h3>
                <p className="text-white/80">Quick relief when you need it most</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Shield className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Safe Formula</h3>
                <p className="text-white/80">Clinically tested and approved</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Target className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Targeted Relief</h3>
                <p className="text-white/80">Deep penetration to pain source</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Activity className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Active Life</h3>
                <p className="text-white/80">Get back to what you love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeofenacSection;
