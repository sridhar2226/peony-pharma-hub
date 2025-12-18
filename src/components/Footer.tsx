import { useState } from "react"; // ✅ For handling email input & status messages
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS to send emails
import companyLogo from "@/assets/LIFE SCIENCES.png";


const Footer = () => {
  // State to store user email input
  const [email, setEmail] = useState("");
  // State to show subscription success/error message
  const [status, setStatus] = useState("");

  // Quick links data
  const quickLinks = [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  // Legal links data
  const legalLinks = [
    { label: "Terms & Conditions", path: "https://terms.peonylifesciences.com/" }
  ];

  // Social media links data
  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Instagram, label: "Instagram", url: "https://www.instagram.com/peonylifesciences?igsh=MWJ4ZXhmMmc2eTJu" },
    { icon: Youtube, label: "Youtube", url: "https://www.youtube.com/@peonylifesciences3585" }
  ];

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("❌ Please enter a valid email address.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_hu1sl18", // 🔑 Replace with your EmailJS Service ID
        "template_sz2gz8r", // 🔑 Replace with your EmailJS Template ID
        { subscriber_email: email }, // ✅ Template variable
        "NMDqOY25nYKZMWK9c" // 🔑 Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Subscription successful!"); // Success message
          setEmail(""); // Reset email field
        },
        () => {
          setStatus("❌ Subscription failed. Try again."); // Error message
        }
      );
  };


  return (
    <footer className="bg-primary text-white">
      {/* ================= NEWSLETTER SUBSCRIPTION SECTION ================= */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-xl text-white/90 mb-8">
              Get the latest news about our products, research breakthroughs, and
              industry insights.
            </p>
            {/* ✅ Subscription Form */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <div className="flex flex-col w-full">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                {status && (
                  <p
                    className="mt-2 text-sm font-bold text-white"
                  >
                    {status}
                  </p>
                )}
              </div>

              <Button type="submit" variant="secondary" className="group">
                Subscribe
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* ---------- Company Info ---------- */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div
                style={{
                  width: "70px",
                  padding: "4px",
                  backgroundColor: "white",
                }}
                className="company-logo rounded-lg flex items-center justify-center"
              >
                <img
                  src={companyLogo}
                  alt="Peony Life Sciences Logo"
                  className="w-full h-auto max-w-[60px] object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white">Peony</span>
                <span className="text-sm text-white/80 -mt-1">
                  Life Sciences
                </span>
              </div>
            </div>
            <p className="text-white/90 mb-6 leading-relaxed">
              Leading pharmaceutical innovation with world-class quality
              standards, delivering life-saving medicines to patients globally
              through cutting-edge research and manufacturing excellence.
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
                <a
                  href="tel:+919980934770"
                  className="text-white/90 hover:text-secondary transition"
                >
                  +91 99809 34770
                </a>
              </div>

              <div className="flex items-center mt-2">
                <Mail className="w-5 h-5 text-secondary mr-3" />
                <a
                  href="mailto:marketing@peonylifesciences.com"
                  className="text-white/90 hover:text-secondary transition"
                >
                  marketing@peonylifesciences.com
                </a>
              </div>

            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1314.3036896828805!2d79.31950651608484!3d10.415140276229184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0001000361c091%3A0x4cedefc4b11fb454!2sPeonylifesciences!5e0!3m2!1sen!2sin!4v1761677797558!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* ---------- Quick Links ---------- */}
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

          {/* ---------- Legal ---------- */}
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>

              ))}
            </ul>

            {/* ---------- Social Links ---------- */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
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

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 Peony Life Sciences. All rights reserved.
            </p>
            {/* <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>WHO-GMP Certified</span>
              <span>•</span>
              <span>FDA Approved</span>
              <span>•</span>
              <span>ISO 9001:2015</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;