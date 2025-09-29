import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import { Search, Filter, MapPin, SlidersHorizontal } from "lucide-react";
import tomatoesImage from "@/assets/tomatoes.jpg";
import tractorImage from "@/assets/tractor.jpg";
import riceSeedsImage from "@/assets/rice-seeds.jpg";
import wheatImage from "@/assets/wheat.jpg";
import soilTestingImage from "@/assets/soil-testing.jpg";
import fertilizerImage from "@/assets/fertilizer.jpg";

const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Fresh Produce", "Seeds", "Farm Services", "Equipment"];

  const searchResults = [
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
    },
    {
      id: "4",
      title: "Fresh Wheat",
      price: "₹45/kg",
      location: "Uttar Pradesh, India",
      provider: "Golden Farms",
      rating: 4.6,
      image: wheatImage,
      category: "Fresh Produce",
      description: "Premium quality wheat harvested this season"
    },
    {
      id: "5",
      title: "Soil Testing Service",
      price: "₹500/test",
      location: "Karnataka, India",
      provider: "AgriLab Solutions",
      rating: 4.8,
      image: soilTestingImage,
      category: "Farm Services",
      description: "Comprehensive soil analysis and recommendations",
      isService: true
    },
    {
      id: "6",
      title: "Organic Fertilizer",
      price: "₹35/kg",
      location: "Kerala, India",
      provider: "EcoGrow",
      rating: 4.7,
      image: fertilizerImage,
      category: "Seeds",
      description: "Natural organic fertilizer for better crop yield"
    },
    {
      id: "7",
      title: "Pesticide Spraying Service",
      price: "₹1500/acre",
      location: "Andhra Pradesh, India",
      provider: "Crop Care Services",
      rating: 4.5,
      image: tractorImage,
      category: "Farm Services",
      description: "Efficient and safe pesticide spraying for all types of crops.",
      isService: true
    },
    {
      id: "8",
      title: "Hybrid Maize Seeds",
      price: "₹250/kg",
      location: "Telangana, India",
      provider: "Deccan Seeds",
      rating: 4.8,
      image: riceSeedsImage,
      category: "Seeds",
      description: "High-yielding hybrid maize seeds for a bountiful harvest."
    }
  ];

  const filteredResults = selectedCategory === "All" 
    ? searchResults 
    : searchResults.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Search Agricultural Products & Services
        </h1>
        <p className="text-muted-foreground mb-6">
          Discover products and services from trusted providers across India
        </p>

        {/* Search Bar */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for products, services, or providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <Card className="mb-8">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div className="flex-1">
              <h3 className="font-semibold text-sm">Filter by Location</h3>
              <p className="text-xs text-muted-foreground">Find products and services near you</p>
            </div>
            <Button variant="outline" size="sm">
              Set Location
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">
            {filteredResults.length} Results Found
          </h2>
          <div className="text-sm text-muted-foreground">
            Showing results for "{selectedCategory}"
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" size="lg">
          Load More Results
        </Button>
      </div>
    </div>
  );
};

export default SearchResultsPage;
