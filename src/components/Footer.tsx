import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Products", path: "/products" },
    // { label: "Research", path: "/research" },
    // { label: "Quality", path: "/quality" },
    { label: "Contact", path: "/contact" }
    // { label: "Careers", path: "/careers" }
  ];

  const productCategories = [
    { label: "Cardiovascular", path: "/products/cardiovascular" },
    { label: "Diabetes Care", path: "/products/diabetes" },
    { label: "Pain Management", path: "/products/pain" },
    { label: "Antibiotics", path: "/products/antibiotics" },
    { label: "Critical Care", path: "/products/critical-care" },
    { label: "Oncology", path: "/products/oncology" }
  ];

  const legalLinks = [
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Cookie Policy", path: "/cookies" },
    { label: "Regulatory", path: "/regulatory" }
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Linkedin, label: "LinkedIn", url: "#" },
    { icon: Instagram, label: "Instagram", url: "#" }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl text-white/90 mb-8">
              Get the latest news about our products, research breakthroughs, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" className="group">
                Subscribe
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-2xl">P</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white">Peony</span>
                <span className="text-sm text-white/80 -mt-1">Life Sciences</span>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Leading pharmaceutical innovation with world-class quality standards,
              delivering life-saving medicines to patients globally through cutting-edge
              research and manufacturing excellence.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white/90">
                  20J NGGO COLONY TAMIL NADU 614601
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white/90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white/90">info@peonypharma.com</span>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps?q=20J,RV+NAGAR,+1ST+STREET+PATTUKKOTTAI+614601&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {productCategories.map((category, index) => (
                <li key={index}>
                  <Link
                    to={category.path}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Peony Life Sciences. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>WHO-GMP Certified</span>
              <span>•</span>
              <span>FDA Approved</span>
              <span>•</span>
              <span>ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;