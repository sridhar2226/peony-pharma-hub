import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, FlaskConical, BookOpen, Users, Award, Target, Lightbulb, TrendingUp } from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Drug Discovery",
      description: "Advanced molecular research and compound identification using cutting-edge technology.",
      status: "Active",
      projects: 15
    },
    {
      icon: FlaskConical,
      title: "Clinical Trials",
      description: "Comprehensive testing phases ensuring safety and efficacy of pharmaceutical products.",
      status: "Ongoing", 
      projects: 8
    },
    {
      icon: BookOpen,
      title: "Regulatory Research",
      description: "Ensuring compliance with international pharmaceutical regulations and standards.",
      status: "Continuous",
      projects: 12
    },
    {
      icon: Target,
      title: "Targeted Therapies",
      description: "Developing personalized medicine solutions for specific patient populations.",
      status: "Development",
      projects: 6
    }
  ];

  const capabilities = [
    {
      title: "State-of-the-Art Laboratories",
      description: "Fully equipped R&D facilities with advanced analytical instruments and clean room environments.",
      features: ["HPLC/UPLC Systems", "Mass Spectrometry", "NMR Spectroscopy", "Dissolution Testing"]
    },
    {
      title: "Expert Research Team",
      description: "Highly qualified scientists and researchers with extensive pharmaceutical industry experience.",
      features: ["PhD Level Scientists", "Regulatory Experts", "Clinical Researchers", "Quality Specialists"]
    },
    {
      title: "Innovation Pipeline",
      description: "Continuous development of new formulations and improvement of existing pharmaceutical products.",
      features: ["Novel Drug Delivery", "Bioequivalence Studies", "Stability Testing", "Method Development"]
    }
  ];

  const achievements = [
    { number: "25+", label: "Years of R&D Excellence" },
    { number: "150+", label: "Research Projects Completed" },
    { number: "50+", label: "Patents & Publications" },
    { number: "30+", label: "Expert Scientists" }
  ];

  const partnerships = [
    "International Universities",
    "Research Institutions",
    "Regulatory Bodies",
    "Clinical Research Organizations",
    "Technology Partners",
    "Global Pharmaceutical Companies"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Research & Development
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Driving pharmaceutical innovation through cutting-edge research, advanced technology, 
            and scientific excellence to improve global health outcomes.
          </p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Research Focus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We focus on multiple research areas to ensure comprehensive pharmaceutical development 
              and innovation across all therapeutic categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <area.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-3">{area.status}</Badge>
                  <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{area.description}</p>
                  <div className="text-sm text-primary font-semibold">
                    {area.projects} Active Projects
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">R&D Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              World-class infrastructure and expertise driving pharmaceutical innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-medical transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Research Achievements</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to innovation reflected in numbers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-muted-foreground font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Innovation Process</h2>
            <p className="text-xl text-muted-foreground">
              From concept to market - our systematic approach to pharmaceutical development
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Research", description: "Identify therapeutic needs and opportunities" },
              { step: "02", title: "Discovery", description: "Develop and test new compounds" },
              { step: "03", title: "Development", description: "Optimize formulation and manufacturing" },
              { step: "04", title: "Testing", description: "Conduct clinical trials and regulatory studies" },
              { step: "05", title: "Launch", description: "Bring safe, effective products to market" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{phase.title}</h3>
                <p className="text-sm text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Research Partnerships</h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations to accelerate pharmaceutical innovation 
            and bring better treatments to patients worldwide.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white font-semibold">
                {partner}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Partnership Opportunities
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Research Publications
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;