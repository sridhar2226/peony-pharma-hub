import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Eye, Heart, Users, Building, Award } from "lucide-react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { useNavigate } from "react-router-dom";

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
      title: "Mission",
      description: "To improve global health outcomes through innovative pharmaceutical solutions and unwavering commitment to quality."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the world's most trusted pharmaceutical partner, advancing healthcare through scientific excellence."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Integrity, innovation, and patient-centricity guide every decision we make in our pursuit of healthcare excellence."
    }
  ];

  const achievements = [
    { icon: Users, number: "500K+", label: "Patients Served" },
    { icon: Building, number: "50+", label: "Countries" },
    { icon: Award, number: "25+", label: "Years Experience" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Peony Life Sciences
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering pharmaceutical excellence since 1999, we combine cutting-edge research 
            with world-class manufacturing to deliver life-changing medicines worldwide.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div ref={valuesRef} className="grid md:grid-cols-3 gap-8 mb-16">
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
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center mb-12">
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
        </div>

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