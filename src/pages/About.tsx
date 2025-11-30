import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import { Button } from "@/components/ui/button";
import {
  Target,
  Eye,
  Heart,
  Users,
  Building,
  Award,
  Globe,
  Microscope,
} from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const About = () => {

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To make high-quality medicines accessible, affordable, and trusted by every community in India.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To become India's most dependable, tech-forward healthcare brand across pharma, wellness, nutrition, and pain-relief.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Integrity: Trust first, business next. Quality: Every batch matters. Care: Built for real people, real lives. Innovation: Bringing modern science to everyday wellness. Service: Supporting pharmacies & partners for decades.",
    },
  ];

  const achievements = [
    { icon: Award, number: "35+", label: "Years of Excellence" },
    { icon: Building, number: "1,000+", label: "Pharmacy Partners" },
    { icon: Users, number: "20+", label: "Districts Covered" },
  ];

  const milestones = [
    { year: "1999", event: "Company Founded" },
    { year: "2005", event: "First International Export" },
    { year: "2010", event: "WHO-GMP Certification" },
    { year: "2015", event: "FDA Approval" },
    { year: "2020", event: "50+ Countries Presence" },
    { year: "2024", event: "Digital Transformation" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Cover Image */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={aboutHeroBg} alt="About Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 container my-0 md:my-16 mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built on Trust. Powered by Science.
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Peony Life Sciences is a next-generation healthcare and wellness company rooted in a 35-year legacy of pharmaceutical distribution through its Gadinee Healthcare & Solai Pharma divisions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-4 m-4 bg-white">
        <div className="mx-auto shadow-lg rounded-xl bg-white">
          <div className="grid md:grid-cols-2 p-4 gap-6 items-center">
            <div className="px-4">
              <h2 className="text-4xl font-bold text-black mb-6">
                Founded in 1992
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Peony has grown into one of Tamil Nadu's most respected healthcare networks, supplying high-quality, and affordable medicines to over 1,000 pharmacies across 20+ districts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Peony combines scientific formulation, clean manufacturing, distribution excellence, modern branding, and tech innovation to build a healthcare ecosystem made for India's growing needs.
              </p>
              <p className="text-lg text-muted-foreground mt-6 font-semibold">
                Our Philosophy: Powering Everyday Champions
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We create products for the people who keep India moving - workers, athletes, mothers, fathers, and elders who push through pain and never stop.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-subtle p-6 rounded-xl">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Serving customers in 50+ countries worldwide
                </p>
              </div>
              <div className="bg-gradient-subtle p-6 rounded-xl">
                <Microscope className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">R&D Excellence</h3>
                <p className="text-muted-foreground">
                  Continuous innovation in pharmaceutical research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-6 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black mb-2">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground">
              Built on strong principles and clear vision
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-card hover:shadow-medical transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-black mb-2">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {achievements.map((achievement, index) => (
              <div key={index} className="group">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-4 pb-8 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-black mb-2">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              25+ years of pharmaceutical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {milestone.year.slice(-2)}
                </div>
                <div className="text-lg font-bold text-primary mb-2">
                  {milestone.year}
                </div>
                <div className="text-sm text-muted-foreground">
                  {milestone.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <FounderSection />

      <Footer />
    </div>
  );
};

export default About;
