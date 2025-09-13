"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  HeadphonesIcon,
  User
} from "lucide-react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // handle form submit
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_9frkuo5", // replace with EmailJS service ID
        "template_wz7j3mf", // replace with EmailJS template ID
        formRef.current,
        "NMDqOY25nYKZMWK9c" // replace with EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("❌ Failed:", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Headquarters",
      details: ["20J, NGGO COLONY, PATTUKKOTTAI, TAMIL NADU - 614601"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "Toll Free: 1-800-PEONY-LS",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@peonylifesciences.com",
        "sales@peonylifesciences.com",
        "support@peonylifesciences.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Emergency Only",
      ],
    },
  ];

  const departments = [
    {
      icon: MessageSquare,
      title: "General Inquiries",
      description:
        "For general questions about our company, products, and services.",
      email: "info@peonylifesciences.com",
      phone: "+1 (555) 123-4567",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description:
        "24/7 support for existing customers and product-related queries.",
      email: "support@peonylifesciences.com",
      phone: "+1 (555) 987-6543",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our pharmaceutical experts. We're here to support
            your healthcare needs with dedicated customer service available 24/7.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Multiple ways to reach us for all your pharmaceutical needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-medical transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p
                        key={idx}
                        className="text-muted-foreground text-sm leading-relaxed"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Departments */}
      <section className="py-4 bg-gradient-subtle">
        <div className="px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Send us a Message
              </h2>
              <Card className="bg-white shadow-card mr-3">
                <CardContent className="p-4">
                  <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          name="firstName"
                          id="firstName"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          name="lastName"
                          id="lastName"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        name="company"
                        id="company"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        name="phone"
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        name="subject"
                        id="subject"
                        placeholder="Enter message subject"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        name="message"
                        id="message"
                        placeholder="Enter your message here..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="medical"
                      size="lg"
                      className="w-full flex items-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Department Contacts */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Department Contacts
              </h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <Card
                    key={index}
                    className="bg-white shadow-card hover:shadow-medical transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <dept.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {dept.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {dept.description}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground">
                                {dept.email}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-primary" />
                              <span className="text-sm text-foreground">
                                {dept.phone}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <section className="py-4">
                <Card className="p-4">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="flex align-items-centr gap-2">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <User className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          Ready to Partner with Us?
                        </h3>
                        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                          Whether you're a healthcare provider, distributor, or pharmaceutical
                          partner, we're here to support your needs with excellence and
                          reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="secondary"
                        size="lg"
                        className="text-lg px-8"
                        onClick={() =>
                          window.open(
                            "https://calendar.google.com/calendar/u/0/r/eventedit?add=info@peonylifesciences.com",
                            "_blank"
                          )
                        }
                      >
                        Schedule a Meeting
                      </Button>

                    </div>
                  </CardContent>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <Footer />
    </div>
  );
};

export default Contact;