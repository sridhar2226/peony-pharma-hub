import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart, Eye, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import peoenergyCapsulesImg from "@/assets/peoenergy-capsules.png";
import peoenergyProteinImg from "@/assets/peoenergy-protein-powder.png";

const ShopSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: 1,
      name: "PEOENERGY Capsules",
      category: "Health & Nutrition",
      price: 299.99,
      stock: 50,
      image: peoenergyCapsulesImg,
      description: "Lecithin, Vitamins, Minerals & Trace Elements Soft Gel Capsules. 10x1x10 Softgel Capsules for enhanced nutrition and wellness.",
      specifications: "10x1x10 Softgel Capsules"
    },
    {
      id: 2,
      name: "Peoenergy Protein Powder",
      category: "Health & Nutrition", 
      price: 449.99,
      stock: 30,
      image: peoenergyProteinImg,
      description: "A unique blend of Protein, Vitamin & Minerals. Delicious protein powder for muscle building and recovery.",
      specifications: "Net Weight: 200 gm"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section ref={ref} className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Shop
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover amazing pharmaceutical products at competitive prices. 
            Quality assured and internationally certified.
          </p>
        </div>

        {/* Search and Filter */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Health & Nutrition">Health & Nutrition</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-2">All Products</h3>
            <p className="text-muted-foreground">{filteredProducts.length} products found</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-luxury transition-all duration-300 transform hover:scale-105 bg-white">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="aspect-square bg-gradient-subtle rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <Badge className="absolute top-2 right-2 bg-primary text-white">
                      {product.stock} in stock
                    </Badge>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {product.category}
                    </Badge>
                    <h3 className="font-bold text-lg text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {product.description}
                    </p>
                    <p className="text-xs text-muted-foreground mb-4">
                      {product.specifications}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-primary">
                      ${product.price}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex-1 flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                      <Button 
                        variant="medical" 
                        size="sm"
                        className="flex-1 flex items-center gap-2"
                        onClick={() => window.open(`/product/${product.id}`, '_blank')}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Place Your Order?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Browse our complete catalog, add products to cart, and enjoy seamless checkout experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Browse All Products
              </Button>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;