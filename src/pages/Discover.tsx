import Navbar from "@/components/Navbar";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Sparkles } from "lucide-react";

// Mock data - would come from API based on quiz results
const restaurants = [
  {
    id: 1,
    name: "The Cozy Corner Café",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop",
    rating: 4.8,
    cuisine: "Coffee & Brunch",
    vibe: ["Cozy", "Quiet", "Solo-Friendly"],
    distance: "0.5 km",
    priceRange: "$$",
  },
  {
    id: 2,
    name: "Neon Nights Bar & Grill",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    rating: 4.6,
    cuisine: "American",
    vibe: ["Loud", "Energetic", "Group"],
    distance: "1.2 km",
    priceRange: "$$$",
  },
  {
    id: 3,
    name: "Sakura Sushi Lounge",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&auto=format&fit=crop",
    rating: 4.9,
    cuisine: "Japanese",
    vibe: ["Trendy", "Instagram-worthy", "Date-Night"],
    distance: "2.1 km",
    priceRange: "$$$",
  },
  {
    id: 4,
    name: "Mama's Trattoria",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop",
    rating: 4.7,
    cuisine: "Italian",
    vibe: ["Cozy", "Family-Friendly", "Casual"],
    distance: "0.8 km",
    priceRange: "$$",
  },
  {
    id: 5,
    name: "Spice Route",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    rating: 4.5,
    cuisine: "Indian",
    vibe: ["Flavorful", "Casual", "Budget-Friendly"],
    distance: "1.5 km",
    priceRange: "$",
  },
  {
    id: 6,
    name: "Rooftop Garden Bistro",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop",
    rating: 4.8,
    cuisine: "Mediterranean",
    vibe: ["Romantic", "Scenic", "Upscale"],
    distance: "3.2 km",
    priceRange: "$$$$",
  },
];

const Discover = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Based on your vibe</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Your Perfect Matches
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We found {restaurants.length} amazing spots that match your mood
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search restaurants, cuisines, or vibes..."
                className="pl-12 h-12 bg-card border-border/50 focus:border-primary"
              />
            </div>
            <Button 
              variant="outline" 
              className="h-12 px-6 border-border/50 hover:border-primary hover:bg-gradient-card"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <RestaurantCard {...restaurant} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
          >
            Load More Restaurants
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Discover;
