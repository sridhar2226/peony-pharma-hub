"use client";

import { useEffect, useRef } from "react";
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

const Blog = () => {
  const [ref, isVisible] = useScrollAnimation();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 🧠 Neuron Background (identical to About Page)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2 };
    const neurons = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.7,
      dy: (Math.random() - 0.5) * 0.7,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const draw = () => {
      // 🟢 Background gradient (green adaptive to your theme)
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0b3d2e");
      gradient.addColorStop(1, "#064e3b");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      ctx.shadowBlur = 15;
      ctx.shadowColor = "rgba(163, 230, 53, 0.7)";

      // 🔆 Draw neurons and links
      neurons.forEach((n) => {
        n.x += n.dx;
        n.y += n.dy;

        // bounce
        if (n.x < 0 || n.x > width) n.dx *= -1;
        if (n.y < 0 || n.y > height) n.dy *= -1;

        // neuron dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 255, 150, 0.9)";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(0, 255, 150, 0.6)";
        ctx.fill();
        // ctx.shadowBlur = 0;

        // connect lines
        neurons.forEach((m) => {
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const mouseDist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
            const intensity = Math.max(0.3, 1 - mouseDist / 400);
            ctx.strokeStyle = `rgba(0, 255, 150, ${intensity * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 📰 Blog Posts Data
  const blogPosts = [
    {
      id: 1,
      title: "Latest Advances in Pharmaceutical Research and Development",
      excerpt:
        "Discover the cutting-edge innovations shaping the future of medicine and how they're revolutionizing patient care worldwide.",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Research",
      views: 1250,
      comments: 18,
      featured: true,
    },
    {
      id: 2,
      title: "Quality Assurance in Modern Pharmaceutical Manufacturing",
      excerpt:
        "Understanding the critical role of quality control processes in ensuring safe and effective medications reach patients.",
      author: "Dr. Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Quality",
      views: 980,
      comments: 12,
      featured: false,
    },
    {
      id: 3,
      title: "The Future of Personalized Medicine: Tailored Treatments",
      excerpt:
        "How genetic testing and biomarkers are enabling customized therapeutic approaches for better patient outcomes.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Innovation",
      views: 1580,
      comments: 24,
      featured: true,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />

      {/* 🧠 Neuron Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(135deg, #003d33, #0f766e)" }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative z-10 text-center text-white">
        <div className="container mx-auto px-4">
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
