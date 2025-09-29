import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { 
  Search, 
  Leaf, 
  Shield, 
  Users, 
  TrendingUp, 
  ArrowRight,
  Sprout,
  Tractor,
  Package
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agricultural-landscape.jpg";
import tomatoesImage from "@/assets/tomatoes.jpg";
import tractorImage from "@/assets/tractor.jpg";
import riceSeedsImage from "@/assets/rice-seeds.jpg";

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Network",
      description: "Beckn protocol ensures secure, decentralized transactions"
    },
    {
      icon: Users,
      title: "Community-Driven",
      description: "Connect with verified farmers and agricultural service providers"
    },
    {
      icon: TrendingUp,
      title: "Fair Pricing",
      description: "Transparent pricing with direct farmer-to-buyer connections"
    }
  ];

  const categories = [
    { icon: Sprout, name: "Fresh Produce", count: "500+ items" },
    { icon: Package, name: "Seeds & Fertilizers", count: "200+ items" },
    { icon: Tractor, name: "Farm Services", count: "150+ providers" },
    { icon: Leaf, name: "Organic Products", count: "300+ certified" }
  ];

  const featuredProducts = [
    {
      id: "1",
      title: "Organic Tomatoes",
      price: "₹80/kg",
      location: "Maharashtra, India",
      provider: "Green Valley Farms",
      rating: 4.8,
      image: tomatoesImage,
      category: "Fresh Produce",
      description: "Fresh organic tomatoes grown without pesticides"
    },
    {
      id: "2",
      title: "Tractor Rental Service",
      price: "₹2,500/day",
      location: "Punjab, India",
      provider: "AgriMech Solutions",
      rating: 4.9,
      image: tractorImage,
      category: "Farm Services",
      description: "Modern tractor rental with operator included",
      isService: true
    },
    {
      id: "3",
      title: "Premium Rice Seeds",
      price: "₹150/kg",
      location: "Haryana, India",
      provider: "Seed Corp",
      rating: 4.7,
      image: riceSeedsImage,
      category: "Seeds",
      description: "High-yield disease-resistant rice seeds"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Agricultural landscape"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Powered by Beckn Protocol
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Connecting Agriculture Through 
              <span className="block text-accent-foreground">Decentralized Trust</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join India's largest decentralized agricultural marketplace. Connect directly with farmers, 
              access premium services, and build sustainable agricultural networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/search">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                  <Search className="mr-2 h-5 w-5" />
                  Explore Marketplace
                </Button>
              </Link>
              <Link to="/provider-onboarding">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Become a Provider
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose AgriTrust?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on the Beckn protocol for transparent, secure, and efficient agricultural trade
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-fresh flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Browse Categories
            </h2>
            <p className="text-muted-foreground">
              Discover products and services across various agricultural sectors
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link key={index} to="/search">
                <Card className="group cursor-pointer hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-fresh flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Featured Products & Services
              </h2>
              <p className="text-muted-foreground">
                Discover top-rated products and services from trusted providers
              </p>
            </div>
            <Link to="/search">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers and service providers already benefiting from our decentralized marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/provider-onboarding">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Selling
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;