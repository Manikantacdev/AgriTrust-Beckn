import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Shield, 
  Clock, 
  Truck,
  ShoppingCart,
  Heart,
  Share2
} from "lucide-react";

const ServiceDetailPage = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock service data - in real app, fetch by id
  const service = {
    id: "1",
    title: "Premium Organic Tomatoes",
    price: "₹80",
    unit: "kg",
    location: "Maharashtra, India",
    provider: {
      name: "Green Valley Farms",
      rating: 4.8,
      reviews: 156,
      verified: true
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Fresh Produce",
    description: "Premium quality organic tomatoes grown using sustainable farming practices. These tomatoes are pesticide-free and harvested at peak ripeness for maximum flavor and nutrition.",
    features: [
      "100% Organic Certified",
      "Pesticide-Free",
      "Harvested Fresh",
      "Direct from Farm",
      "Premium Quality"
    ],
    availability: "In Stock",
    deliveryTime: "2-3 days",
    minimumOrder: "5 kg"
  };

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent quality tomatoes. Fresh and organic as promised.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Priya Sharma",
      rating: 4,
      comment: "Good quality but delivery was slightly delayed.",
      date: "1 week ago"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border">
            <img
              src={service.images[0]}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {service.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded border">
                <img
                  src={image}
                  alt={`${service.title} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{service.category}</Badge>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {service.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{service.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>Delivery: {service.deliveryTime}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl font-bold text-primary">
                {service.price}
              </span>
              <span className="text-muted-foreground">per {service.unit}</span>
              <Badge variant="outline" className="ml-2">
                {service.availability}
              </Badge>
            </div>
          </div>

          {/* Provider Info */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>
                      {service.provider.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{service.provider.name}</h3>
                      {service.provider.verified && (
                        <Shield className="h-4 w-4 text-trust" />
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{service.provider.rating}</span>
                      <span className="text-muted-foreground">
                        ({service.provider.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Purchase Options */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Quantity ({service.unit})</label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="px-4 py-2 border rounded text-center min-w-[60px]">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Minimum order: {service.minimumOrder}
                  </p>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-hero hover:opacity-90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart - ₹{parseInt(service.price.replace('₹', '')) * quantity}
                  </Button>
                  <Button variant="outline">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4" />
                  <span>Free delivery on orders above ₹500</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Description & Features */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Product Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-border last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < review.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {review.comment}
                    </p>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;