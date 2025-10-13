import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  IconComponent?: LucideIcon;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, IconComponent, delay = 0 }: FeatureCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card hover:shadow-card transition-all duration-500 border-border/50 hover:border-primary/50 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="relative p-8">
        <div className="mb-6 relative">
          {icon ? (
            <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-500">
              <img 
                src={icon} 
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : IconComponent && (
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
          )}
        </div>

        <h3 className="text-2xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
