import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Award, FileCheck, Microscope, Users, Globe, Lock } from "lucide-react";
import qualityHeroBg from "@/assets/quality-hero-bg.jpg";

const Quality = () => {
  const certifications = [
    {
      icon: Award,
      title: "WHO-GMP Certified",
      description: "World Health Organization Good Manufacturing Practice certification for pharmaceutical excellence.",
      status: "Certified",
      validUntil: "2025"
    },
    {
      icon: Shield,
      title: "FDA Approved",
      description: "US Food and Drug Administration approval for manufacturing and distribution.",
      status: "Approved",
      validUntil: "2026"
    },
    {
      icon: CheckCircle,
      title: "ISO 9001:2015",
      description: "International standard for quality management systems and continuous improvement.",
      status: "Certified",
      validUntil: "2025"
    },
    {
      icon: Globe,
      title: "EU-GMP Compliant",
      description: "European Union Good Manufacturing Practice compliance for global market access.",
      status: "Compliant",
      validUntil: "2026"
    },
    {
      icon: FileCheck,
      title: "CDSCO Licensed",
      description: "Central Drugs Standard Control Organization license for Indian pharmaceutical operations.",
      status: "Licensed",
      validUntil: "2025"
    },
    {
      icon: Microscope,
      title: "ICH Guidelines",
      description: "International Council for Harmonisation compliance for global pharmaceutical standards.",
      status: "Compliant",
      validUntil: "Ongoing"
    }
  ];

  const qualityMetrics = [
    { number: "99.9%", label: "Quality Compliance Rate" },
    { number: "Zero", label: "Major Deviations" },
    { number: "24/7", label: "Quality Monitoring" },
    { number: "100%", label: "Batch Testing" }
  ];

  const qualityProcesses = [
    {
      title: "Raw Material Testing",
      description: "Comprehensive testing of all incoming raw materials to ensure they meet our strict quality specifications.",
      features: ["Identity Testing", "Purity Analysis", "Microbiological Testing", "Heavy Metal Detection"]
    },
    {
      title: "In-Process Quality Control",
      description: "Continuous monitoring and testing throughout the manufacturing process to maintain consistent quality.",
      features: ["Real-time Monitoring", "Process Validation", "Environmental Monitoring", "Equipment Qualification"]
    },
    {
      title: "Finished Product Testing",
      description: "Rigorous testing of final products before release to ensure safety, efficacy, and quality standards.",
      features: ["Potency Testing", "Dissolution Testing", "Stability Studies", "Microbiological Safety"]
    },
    {
      title: "Quality Assurance",
      description: "Systematic approach to quality management ensuring consistent delivery of pharmaceutical excellence.",
      features: ["Document Control", "Change Management", "Risk Assessment", "Continuous Improvement"]
    }
  ];

  const laboratories = [
    {
      name: "Analytical Laboratory",
      description: "State-of-the-art analytical testing facility equipped with advanced instrumentation.",
      capabilities: ["HPLC/UPLC", "GC-MS", "FTIR", "UV-Vis Spectroscopy"]
    },
    {
      name: "Microbiological Laboratory",
      description: "Dedicated facility for microbiological testing and sterility assurance.",
      capabilities: ["Sterility Testing", "Endotoxin Testing", "Bioburden Testing", "Environmental Monitoring"]
    },
    {
      name: "Stability Laboratory",
      description: "Climate-controlled chambers for long-term and accelerated stability studies.",
      capabilities: ["ICH Stability Studies", "Photostability Testing", "Stress Testing", "Shelf-life Determination"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={qualityHeroBg} alt="Quality Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Quality Assurance
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Uncompromising commitment to pharmaceutical quality through rigorous testing, 
            international certifications, and continuous improvement processes.
          </p>
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quality by Numbers</h2>
            <p className="text-xl text-muted-foreground">
              Our commitment to excellence reflected in measurable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {qualityMetrics.map((metric, index) => (
              <div key={index} className="group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{metric.number}</div>
                <div className="text-muted-foreground font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Global Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our quality standards are validated by leading international regulatory bodies 
              and certification organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {cert.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{cert.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>
                  <div className="text-sm text-primary font-semibold">
                    Valid until: {cert.validUntil}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Quality Control Processes</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive quality systems ensuring every product meets the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {qualityProcesses.map((process, index) => (
              <Card key={index} className="bg-gradient-subtle shadow-card hover:shadow-medical transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{process.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{process.description}</p>
                  <ul className="space-y-3">
                    {process.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary" />
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

      {/* Laboratory Facilities */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Testing Laboratories</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art testing facilities ensuring comprehensive quality analysis
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {laboratories.map((lab, index) => (
              <Card key={index} className="bg-white shadow-card hover:shadow-medical transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Microscope className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{lab.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{lab.description}</p>
                  <div className="space-y-2">
                    {lab.capabilities.map((capability, idx) => (
                      <div key={idx} className="text-sm bg-gradient-subtle px-3 py-2 rounded-lg">
                        {capability}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Quality Commitment</h2>
          <p className="text-xl text-white/90 mb-12 max-w-4xl mx-auto">
            We are committed to maintaining the highest quality standards in every aspect of our operations, 
            from raw material procurement to final product delivery. Our quality management system ensures 
            continuous improvement and patient safety.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Users, title: "Patient Safety First", description: "Every decision prioritizes patient health and safety" },
              { icon: Lock, title: "Regulatory Compliance", description: "Strict adherence to all applicable regulations and standards" },
              { icon: Globe, title: "Global Standards", description: "Meeting international quality requirements worldwide" }
            ].map((commitment, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <commitment.icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{commitment.title}</h3>
                <p className="text-white/90">{commitment.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Download Quality Manual
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              View Certificates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;