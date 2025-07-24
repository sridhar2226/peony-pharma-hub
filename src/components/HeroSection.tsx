import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Award, Globe } from "lucide-react";
import heroImage from "@/assets/hero-pharma-lab.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pharmaceutical Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center text-white/90 text-sm">
              <Shield className="w-5 h-5 mr-2" />
              WHO-GMP Certified
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <Award className="w-5 h-5 mr-2" />
              FDA Approved
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <Globe className="w-5 h-5 mr-2" />
              Global Reach
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Innovating
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Healthcare
            </span>
            <span className="text-4xl md:text-5xl font-light text-white/90">
              Through Scientific Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Leading pharmaceutical innovation with world-class quality standards,
            delivering life-saving medicines to patients globally through 
            cutting-edge research and manufacturing excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[200px] group"
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[200px] group"
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Play Button for Company Video */}
          <div className="flex justify-center">
            <button className="group flex items-center text-white/90 hover:text-white transition-colors">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;