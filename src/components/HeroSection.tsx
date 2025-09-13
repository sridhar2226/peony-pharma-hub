import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Award, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-pharma-lab.jpg";

const HeroSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const navigate = useNavigate();
  // const toNavigateProducts =() => {
  //   navigate('/products');
  // }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pharmaceutical Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-luxury"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-4 sm:left-20 w-8 h-8 sm:w-12 sm:h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-60 right-8 sm:right-40 w-6 h-6 sm:w-8 sm:h-8 bg-white/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-1000 pt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
            <div className="flex items-center text-white/90 text-sm">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              WHO-GMP Certified
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              FDA Approved
            </div>
            <div className="flex items-center text-white/90 text-sm">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Global Reach
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight px-2">
            Innovating
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Healthcare
            </span>
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white/90 block mt-2">
              Through Scientific Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed px-4">
            Leading pharmaceutical innovation with world-class quality standards,
            delivering life-saving medicines to patients globally through 
            cutting-edge research and manufacturing excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[200px] group"
              onClick={toNavigateProducts}
            >
              Explore Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button> */}
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-4 min-w-[200px] group"
              onClick={() => window.open('https://preview--product-lane-shop.lovable.app/', '_blank')}
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Play Button for Company Video */}
          {/* <div className="flex justify-center">
            <button className="group flex items-center text-white/90 hover:text-white transition-colors">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div> */}
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