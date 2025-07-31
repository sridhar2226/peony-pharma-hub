import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Shop", path: "/shop" },
    { label: "R&D", path: "/research" },
    { label: "Quality", path: "/quality" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-card border-b border-border" : "bg-background/90 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">Peony</span>
              <span className="text-xs text-muted-foreground -mt-1">Life Sciences</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="text-primary">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
            <Button variant="medical" size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order Online
            </Button>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="py-6">
                {/* Logo in Mobile Menu */}
                <Link to="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">P</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-primary">Peony</span>
                    <span className="text-xs text-muted-foreground -mt-1">Life Sciences</span>
                  </div>
                </Link>

                {/* Navigation Links */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                        isActive(item.path) 
                          ? "bg-primary text-white" 
                          : "text-foreground hover:bg-muted"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <ThemeToggle />
                  </div>
                  <Button variant="ghost" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                  <Button variant="medical" className="w-full">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Order Online
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
};

export default Header;