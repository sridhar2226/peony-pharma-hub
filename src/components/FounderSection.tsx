import { Award, Users, MapPin, Briefcase, TrendingUp, Network } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FounderSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const highlights = [
    { icon: Award, text: "35 Years of Trust" },
    { icon: Users, text: "1,000+ Pharmacy Partners" },
    { icon: MapPin, text: "20+ Districts of Distribution" },
    { icon: Briefcase, text: "Chairman, TNCDA - All Districts Coordination" }
  ];

  const expertise = [
    "Medical distribution strategy",
    "Market expansion",
    "Demand forecasting",
    "High-volume pharmacy supply",
    "Brand-building & product placement",
    "National & district-level coordination"
  ];

  return (
    <section ref={ref} className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet the Founder: Solai Sivam
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A respected healthcare leader with over 35 years of experience in India's pharmaceutical industry
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-card text-center">
                    <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="font-semibold text-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
              
              <blockquote className="text-2xl font-semibold text-foreground italic border-l-4 border-primary pl-6 my-8">
                "Healthcare should serve the ones who keep India moving."
              </blockquote>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="bg-white rounded-xl p-8 shadow-card">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Solai Sivam is a respected healthcare leader with over 35 years of experience in India's pharmaceutical industry, known for building one of Tamil Nadu's most influential medical distribution networks.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As the Founder of Peony Lifesciences, Solai Pharma, and related healthcare ventures, he oversees supply operations across 20+ districts and maintains trusted relationships with over 1,000+ retail and distributor pharmacies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With decades of credibility, operational excellence, and market insight, Solai Sivam is recognized as a strategic connector who helps brands scale through reliable partnerships, efficient distribution, and a reputation built on trust, service, and long-term commitment to community health.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">His Expertise Includes</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <Network className="w-5 h-5 flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
