import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Pill, Syringe, Heart, Shield, Star, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import productsHeroBg from "@/assets/products-hero-bg.jpg";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products", icon: Pill },
    { id: "tablets", label: "Tablets", icon: Pill },
    { id: "capsules", label: "Capsules", icon: Pill },
    { id: "injections", label: "Injections", icon: Syringe },
    { id: "veterinary", label: "Veterinary", icon: Heart },
    { id: "supplements", label: "Supplements", icon: Shield }
  ];

  const products = [
    {
      id: 1,
      name: "Amoxicillin 500mg",
      category: "tablets",
      type: "Antibiotic",
      dosage: "500mg",
      form: "Tablet",
      price: "$12.99",
      inStock: true,
      rating: 4.8,
      image: "/placeholder.svg",
      description: "Broad-spectrum antibiotic for bacterial infections"
    },
    {
      id: 2,
      name: "Paracetamol 650mg",
      category: "tablets",
      type: "Analgesic",
      dosage: "650mg",
      form: "Tablet",
      price: "$8.50",
      inStock: true,
      rating: 4.9,
      image: "/placeholder.svg",
      description: "Pain relief and fever reducer"
    },
    {
      id: 3,
      name: "Vitamin D3 Capsules",
      category: "capsules",
      type: "Supplement",
      dosage: "1000 IU",
      form: "Capsule",
      price: "$15.75",
      inStock: true,
      rating: 4.7,
      image: "/placeholder.svg",
      description: "Essential vitamin for bone health"
    },
    {
      id: 4,
      name: "Insulin Injection",
      category: "injections",
      type: "Hormone",
      dosage: "100 units/ml",
      form: "Injection",
      price: "$45.00",
      inStock: true,
      rating: 4.9,
      image: "/placeholder.svg",
      description: "Fast-acting insulin for diabetes management"
    },
    {
      id: 5,
      name: "Pet Deworming Tablets",
      category: "veterinary",
      type: "Veterinary",
      dosage: "Various",
      form: "Tablet",
      price: "$22.30",
      inStock: true,
      rating: 4.6,
      image: "/placeholder.svg",
      description: "Safe and effective deworming solution for pets"
    },
    {
      id: 6,
      name: "Omega-3 Fish Oil",
      category: "supplements",
      type: "Supplement",
      dosage: "1000mg",
      form: "Softgel",
      price: "$18.95",
      inStock: false,
      rating: 4.8,
      image: "/placeholder.svg",
      description: "Heart-healthy omega-3 fatty acids"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={productsHeroBg} alt="Products Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Premium Products
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed">
              More than 70+ pharmaceutical products & veterinary medicines available. 
              Quality assured and internationally certified.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search premium products..."
                className="pl-12 h-14 bg-white/15 border-white/30 text-white placeholder:text-white/80 backdrop-blur-sm rounded-xl text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">Select a category to filter our extensive product range</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "medical" : "outline"}
                className="flex items-center gap-2 h-12 px-6 text-base"
                onClick={() => setSelectedCategory(category.id)}
              >
                <category.icon className="w-5 h-5" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Available Products ({filteredProducts.length})
            </h2>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-medical transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-subtle rounded-lg mb-4 flex items-center justify-center">
                    <Pill className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant={product.inStock ? "default" : "secondary"} className="mb-2">
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                    <h3 className="font-bold text-lg text-foreground mb-1">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>Type: {product.type}</span>
                      <span>•</span>
                      <span>{product.form}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button 
                      variant="medical" 
                      size="sm"
                      disabled={!product.inStock}
                      className="flex items-center gap-2"
                      onClick={() => window.open('https://preview--product-lane-shop.lovable.app/', '_blank')}
                    >
                      <ShoppingCart className="w-4 h-4" />
                      {product.inStock ? "Add to Cart" : "Unavailable"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Pill className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our pharmaceutical experts are here to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Contact Our Team
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;