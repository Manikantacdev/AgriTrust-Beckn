import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import tomatoesImage from "@/assets/tomatoes.jpg";
import wheatImage from "@/assets/wheat.jpg";

const SiggyMarketplacePage = () => {
  const [becknProducts, setBecknProducts] = useState<any[]>([]);

  const siggyProducts = [
    {
      id: "siggy-1",
      title: "Siggy Premium Vegetables",
      price: "₹60/kg",
      location: "Gujarat, India",
      provider: "Siggy Farms",
      rating: 4.9,
      image: tomatoesImage,
      category: "Fresh Produce",
      description: "Premium quality vegetables from Siggy's organic farms"
    },
    {
      id: "siggy-2",
      title: "Siggy Grain Collection",
      price: "₹50/kg",
      location: "Rajasthan, India",
      provider: "Siggy Grains Co.",
      rating: 4.7,
      image: wheatImage,
      category: "Grains",
      description: "High-quality grains sourced directly from farmers"
    }
  ];

  useEffect(() => {
    // Load products from Beckn network
    const loadBecknProducts = () => {
      const products = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('beckn-product-')) {
          const product = JSON.parse(localStorage.getItem(key) || '{}');
          products.push(product);
        }
      }
      setBecknProducts(products);
    };

    loadBecknProducts();

    // Listen for new products added to Beckn
    const handleBecknAdd = () => {
      loadBecknProducts();
    };

    window.addEventListener('beckn-add', handleBecknAdd);
    return () => window.removeEventListener('beckn-add', handleBecknAdd);
  }, []);

  const allProducts = [...siggyProducts, ...becknProducts];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to AgriTrust
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-600 mb-2">
              Siggy Marketplace
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium agricultural products and services
            </p>
            <div className="mt-4 flex justify-center">
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Connected via Beckn Protocol
              </Badge>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-green-600">{allProducts.length}</div>
              <div className="text-sm text-muted-foreground">Total Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-blue-600">{becknProducts.length}</div>
              <div className="text-sm text-muted-foreground">Beckn Network Products</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-purple-600">{siggyProducts.length}</div>
              <div className="text-sm text-muted-foreground">Local Products</div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border border-border/50 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {product.category}
                    </Badge>
                  </div>
                  {product.id.startsWith('beckn-') && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="default" className="bg-blue-500 text-white">
                        Beckn Network
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 flex items-center space-x-1 rounded-full bg-white/90 px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{product.location}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{product.provider}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">{product.price}</span>
                      {product.isService && <span className="text-sm text-muted-foreground ml-1">per service</span>}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full">
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {allProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">
              No products available yet
            </h3>
            <p className="text-sm text-muted-foreground">
              Products added to the Beckn network will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiggyMarketplacePage;