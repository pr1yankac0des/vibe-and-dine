import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Star } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  vibe: string[];
  distance: string;
  priceRange: string;
}

const RestaurantCard = ({ 
  name, 
  image, 
  rating, 
  cuisine, 
  vibe, 
  distance, 
  priceRange 
}: RestaurantCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-card transition-all duration-500 border-border/50 hover:border-primary/50 animate-scale-in">
      <div className="relative overflow-hidden aspect-[16/9]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-4 right-4 bg-white/90 hover:bg-white hover:scale-110 transition-all"
        >
          <Heart className="h-4 w-4 text-primary" />
        </Button>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-white mb-2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">{rating}</span>
            <span className="text-white/80">•</span>
            <span className="text-sm text-white/90">{priceRange}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{distance} away • {cuisine}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {vibe.map((tag, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="bg-gradient-card border-primary/20 hover:border-primary/50 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6">
        <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
