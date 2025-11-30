import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Users, Building, Award } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";
import aboutBg from "@/assets/about-preview-bg.jpg";

const AboutPreview = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [valuesRef, visibleValues] = useStaggeredAnimation(3);
  const [achievementsRef, visibleAchievements] = useStaggeredAnimation(3);
  const navigate = useNavigate();
  const toNavigateAbout =() => {
    navigate('/about');
  }

  const values = [
    {
      icon: Target,
      title: "Science-Backed Formulations",
      description: "All products are created with clinically validated ingredients and manufactured by certified, compliant facilities."
    },
    {
      icon: Eye,
      title: "100+ Essential Medicines",
      description: "Pain relief, antibiotics, multivitamins, nutrition, paediatric care, veterinary medicines, and more."
    },
    {
      icon: Heart,
      title: "Strongest Distribution Network",
      description: "20+ districts in Tamil Nadu, 1,000+ retail and wholesale pharmacy partners across India."
    }
  ];

  const achievements = [
    { icon: Award, number: "35+", label: "Years of Excellence" },
    { icon: Building, number: "1,000+", label: "Pharmacy Partners" },
    { icon: Users, number: "20+", label: "Districts Covered" }
  ];

  return (
    <section ref={ref} className="relative py-10 overflow-hidden">
      {/* Cover Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* <img src={aboutBg} alt="About Peony Life Sciences" className="w-full h-full object-cover" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            WHY PEONY?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on Trust. Powered by Science. A 35-year legacy of healthcare excellence.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div ref={valuesRef} className="grid md:grid-cols-3 gap-8 mb-4">
          {values.map((item, index) => (
            <div key={index} className={`group bg-gradient-card rounded-xl p-8 shadow-card hover:shadow-luxury transition-all duration-500 transform hover:scale-105 ${visibleValues.includes(index) ? 'animate-scale-in' : 'opacity-0'}`}>
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card mb-12">
          <div ref={achievementsRef} className="grid md:grid-cols-3 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className={`group transition-all duration-500 ${visibleAchievements.includes(index) ? 'animate-fade-in-up' : 'opacity-0'}`}>
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:animate-pulse-glow transition-all duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* USPs - Certifications */}
        {/* <div className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Global Quality Standards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "WHO-GMP Certified",
              "FDA Approved",
              "ISO 9001:2015",
              "EU-GMP Compliant"
            ].map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white font-semibold">
                {cert}
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center">
          <Button variant="medical" size="lg" className="text-lg px-8 py-4 group" onClick={toNavigateAbout}>
            Learn More About Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;