import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-image.jpg";
import quizIcon from "@/assets/quiz-icon.png";
import socialIcon from "@/assets/social-icon.png";
import discoverIcon from "@/assets/discover-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gradient-card px-4 py-2 rounded-full border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">Mood-Based Restaurant Discovery</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
                Find Your Perfect{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Dining Vibe
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Discover restaurants, cafés, and bars tailored to your mood. Whether you're feeling chill, chaotic, or anything in between—we've got your vibe covered.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/quiz">
                  <Button 
                    size="lg" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 shadow-glow group"
                  >
                    Start Mood Quiz
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/discover">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 py-6 border-primary/50 hover:bg-gradient-card"
                  >
                    Explore Now
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-3xl font-display font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Restaurants</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary">100K+</div>
                  <div className="text-sm text-muted-foreground">Vibes Matched</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-fade-in-up lg:animate-scale-in">
              <div className="relative rounded-3xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage}
                  alt="Friends enjoying food together at a trendy restaurant"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-card rounded-2xl shadow-card p-4 animate-float border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Mood Detected</div>
                    <div className="text-xs text-muted-foreground">Energetic & Fun</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-card p-4 animate-float border border-border/50" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Perfect Match</div>
                    <div className="text-xs text-muted-foreground">98% Match Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to discover your perfect dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              title="Take the Mood Quiz"
              description="Answer a few fun questions about your current vibe, who you're with, and what you're craving. Our AI-powered chatbot understands your mood in seconds."
              icon={quizIcon}
              delay={0}
            />
            <FeatureCard
              title="Get Smart Recommendations"
              description="Receive personalized restaurant suggestions with custom vibe tags like 'Cozy,' 'Loud,' or 'Instagram-worthy'—all based on your unique preferences and location."
              icon={discoverIcon}
              delay={200}
            />
            <FeatureCard
              title="Connect & Share"
              description="Follow friends, see their top picks, save your favorites, and build your dining profile. Discover what your squad is vibing with and join the fun!"
              icon={socialIcon}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-12 md:p-16 text-center shadow-glow animate-fade-in-up">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Find Your Vibe?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of foodies who've discovered their perfect dining spots. Start your mood-based journey today!
              </p>
              <Link to="/quiz">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-xl group"
                >
                  Take the Quiz Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
              Vibe & Dine
            </span>
          </div>
          <p className="text-sm">
            Discover your perfect dining experience, one mood at a time.
          </p>
          <p className="text-xs mt-4">
            © 2025 Vibe & Dine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
