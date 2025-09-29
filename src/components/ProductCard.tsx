import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  provider: string;
  rating: number;
  image: string;
  category: string;
  description: string;
  isService?: boolean;
}

const ProductCard = ({
  id,
  title,
  price,
  location,
  provider,
  rating,
  image,
  category,
  description,
  isService = false
}: ProductCardProps) => {
  const { toast } = useToast();
  return (
    <Card className="group overflow-hidden border border-border/50 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant={isService ? "default" : "secondary"} className="bg-white/90 text-foreground">
              {category}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 flex items-center space-x-1 rounded-full bg-white/90 px-2 py-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{location}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <User className="h-3 w-3" />
              <span>{provider}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-primary">{price}</span>
              {isService && <span className="text-sm text-muted-foreground ml-1">per service</span>}
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Link to={`/service/${id}`} className="flex-1">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
        <Button 
          variant="default" 
          className="flex-1"
          onClick={() => {
            // Add to Beckn network functionality
            const productData = { id, title, price, location, provider, rating, image, category, description, isService };
            localStorage.setItem(`beckn-product-${id}`, JSON.stringify(productData));
            
            // Show success toast
            toast({
              title: "Added to Beckn Network",
              description: `${title} is now available on Siggy and Jomoto marketplaces`,
            });
            
            // Trigger event for other components to update
            const event = new CustomEvent('beckn-add', { detail: productData });
            window.dispatchEvent(event);
          }}
        >
          Add to Beckn
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;