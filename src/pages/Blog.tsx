"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Eye,
  MessageCircle,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import blogHeroBg from "@/assets/blog-hero-bg.jpg";

const Blog = () => {
  const [ref, isVisible] = useScrollAnimation();

  // 📰 Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Latest Advances in Pharmaceutical Research and Development",
      slug: "advances-pharmaceutical-research-2024",
      excerpt:
        "Discover the cutting-edge innovations shaping the future of medicine and how they're revolutionizing patient care worldwide.",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Research",
      tags: ["R&D", "Clinical Trials", "Biotech"],
      views: 1250,
      comments: 18,
      featured: true,
      coverImage: "/images/blog/research-advances.jpg",
    },
    {
      id: 2,
      title: "Quality Assurance in Modern Pharmaceutical Manufacturing",
      slug: "quality-assurance-pharma-manufacturing",
      excerpt:
        "Understanding the critical role of quality control processes in ensuring safe and effective medications reach patients.",
      author: "Dr. Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Quality",
      tags: ["GMP", "QA", "Manufacturing"],
      views: 980,
      comments: 12,
      featured: false,
      coverImage: "/images/blog/quality-assurance.jpg",
    },
    {
      id: 3,
      title: "The Future of Personalized Medicine: Tailored Treatments",
      slug: "future-personalized-medicine",
      excerpt:
        "How genetic testing and biomarkers are enabling customized therapeutic approaches for better patient outcomes.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Innovation",
      tags: ["Personalized Medicine", "Genomics"],
      views: 1580,
      comments: 24,
      featured: false,
      coverImage: "/images/blog/personalized-medicine.jpg",
    },
    {
      id: 4,
      title: "Regulatory Trends and Compliance in Pharma for 2024",
      slug: "regulatory-trends-pharma-2024",
      excerpt:
        "A concise overview of evolving regulatory expectations and practical compliance strategies for pharmaceutical companies.",
      author: "Dr. Anita Kapoor",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "Regulation",
      tags: ["Regulatory", "Compliance"],
      views: 760,
      comments: 6,
      featured: false,
      coverImage: "/images/blog/regulatory-trends.jpg",
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={blogHeroBg} alt="Blog Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Insights & Research
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Stay updated with the latest pharmaceutical research, industry
            insights, and breakthrough innovations from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Subscribe
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Browse Topics
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section ref={ref} className="py-16 bg-white/90 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl font-bold text-center mb-12 text-primary transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Featured Article
          </h2>
          {featuredPost && (
            <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                  <User className="w-16 h-16 text-white opacity-80" />
                </div>
                <div className="md:w-3/5 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-green-700 text-white">
                      {featuredPost.category}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <Button className="flex items-center gap-2 bg-green-700 hover:bg-green-800">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-card transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-green-800 to-green-600 flex items-center justify-center">
                  <User className="w-12 h-12 text-white opacity-80" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg mb-3 group-hover:text-green-700 transition-colors">
                  {post.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
