import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, Award, CheckCircle } from "lucide-react";
import manufacturingFacility from "@/assets/manufacturing-facility.jpg";

const ResearchQuality = () => {
  const rdHighlights = [
    {
      icon: Microscope,
      title: "Advanced Research",
      description: "State-of-the-art R&D facilities with cutting-edge analytical capabilities",
      metrics: "50+ Research Projects"
    },
    {
      icon: FlaskConical,
      title: "Innovation Labs",
      description: "Dedicated formulation and development laboratories for novel drug delivery",
      metrics: "15+ New Formulations"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Continuous improvement in manufacturing processes and quality systems",
      metrics: "99.8% Quality Rate"
    }
  ];

  const certifications = [
    { name: "WHO-GMP", description: "World Health Organization Good Manufacturing Practice" },
    { name: "FDA Registration", description: "U.S. Food and Drug Administration Approved" },
    { name: "ISO 9001:2015", description: "International Quality Management System" },
    { name: "EU-GMP", description: "European Union Good Manufacturing Practice" },
    { name: "PICS/S", description: "Pharmaceutical Inspection Convention Scheme" },
    { name: "COPP", description: "Certificate of Pharmaceutical Product" }
  ];

  const qualityFeatures = [
    "100% Raw Material Testing",
    "Automated Quality Control",
    "Real-time Monitoring Systems",
    "Batch Tracking & Traceability",
    "Stability Testing Programs",
    "Microbiology Testing"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research & Quality Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving pharmaceutical innovation through world-class research capabilities 
            and unwavering commitment to quality standards.
          </p>
        </div>

        {/* R&D Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {rdHighlights.map((item, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-card hover:shadow-medical transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{item.metrics}</div>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Manufacturing Excellence */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Manufacturing Excellence</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Our state-of-the-art manufacturing facilities operate under the highest quality 
                standards, ensuring every product meets global regulatory requirements.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* <Button variant="medical" size="lg" className="group">
                Tour Our Facilities
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button> */}
            </div>
            <div className="relative">
              <img
                src={manufacturingFacility}
                alt="Manufacturing Facility"
                className="rounded-xl shadow-medical w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Global Certifications</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our commitment to quality is validated by prestigious international certifications 
              and regulatory approvals from leading global authorities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{cert.name}</h4>
                <p className="text-white/80 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button variant="secondary" size="lg" className="group">
              View All Certifications
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ResearchQuality;