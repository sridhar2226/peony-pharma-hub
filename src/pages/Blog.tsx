import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Tag, Eye, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Blog = () => {
  const [ref, isVisible] = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: "Latest Advances in Pharmaceutical Research and Development",
      excerpt: "Discover the cutting-edge innovations shaping the future of medicine and how they're revolutionizing patient care worldwide.",
      author: "Dr. Sarah Mitchell",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Research",
      image: "/placeholder.svg",
      views: 1250,
      comments: 18,
      featured: true
    },
    {
      id: 2,
      title: "Quality Assurance in Modern Pharmaceutical Manufacturing",
      excerpt: "Understanding the critical role of quality control processes in ensuring safe and effective medications reach patients.",
      author: "Dr. Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Quality",
      image: "/placeholder.svg",
      views: 980,
      comments: 12,
      featured: false
    },
    {
      id: 3,
      title: "The Future of Personalized Medicine: Tailored Treatments",
      excerpt: "How genetic testing and biomarkers are enabling customized therapeutic approaches for better patient outcomes.",
      author: "Dr. Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Innovation",
      image: "/placeholder.svg",
      views: 1580,
      comments: 24,
      featured: true
    },
    {
      id: 4,
      title: "Sustainable Practices in Pharmaceutical Production",
      excerpt: "Exploring eco-friendly manufacturing processes and green chemistry initiatives in the pharmaceutical industry.",
      author: "Dr. James Thompson",
      date: "2024-01-08",
      readTime: "4 min read",
      category: "Sustainability",
      image: "/placeholder.svg",
      views: 756,
      comments: 9,
      featured: false
    },
    {
      id: 5,
      title: "Regulatory Compliance: Navigating Global Standards",
      excerpt: "A comprehensive guide to understanding international pharmaceutical regulations and compliance requirements.",
      author: "Dr. Lisa Wang",
      date: "2024-01-05",
      readTime: "8 min read",
      category: "Regulation",
      image: "/placeholder.svg",
      views: 892,
      comments: 15,
      featured: false
    },
    {
      id: 6,
      title: "Breakthrough Therapies: From Lab to Market",
      excerpt: "The journey of innovative treatments from initial discovery through clinical trials to patient availability.",
      author: "Dr. Robert Brown",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Development",
      image: "/placeholder.svg",
      views: 1340,
      comments: 21,
      featured: true
    }
  ];

  const categories = ["All", "Research", "Quality", "Innovation", "Sustainability", "Regulation", "Development"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Insights & Research
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed">
              Stay updated with the latest pharmaceutical research, industry insights, 
              and breakthrough innovations from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Subscribe to Newsletter
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Browse Topics
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full px-6 hover:bg-primary hover:text-white transition-colors"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section ref={ref} className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">Featured Article</h2>
            
            {featuredPost && (
              <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5">
                    <div className="h-64 md:h-full bg-gradient-primary flex items-center justify-center">
                      <div className="text-center text-white">
                        <User className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <p className="text-sm opacity-90">Featured Article Image</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="default" className="bg-accent text-white">
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
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {featuredPost.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {featuredPost.comments}
                          </div>
                        </div>
                      </div>
                      <Button className="flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className={`group hover:shadow-card transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in-up`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardHeader className="p-0">
                  <div className="h-48 bg-gradient-primary rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <User className="w-12 h-12 mx-auto mb-2 opacity-80" />
                      <p className="text-xs opacity-90">Article Image</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="text-xs text-muted-foreground">
                      <div className="flex items-center gap-1 mb-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Updated with Latest Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest pharmaceutical research and industry insights delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-muted-foreground"
            />
            <Button variant="secondary" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Blog;