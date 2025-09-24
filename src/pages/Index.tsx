import { useState } from "react";
import { Header } from "@/components/Header";
import { BottomNav } from "@/components/BottomNav";
import { WishlistModal } from "@/components/WishlistModal";
import { Button } from "@/components/ui/button";
import { Upload, MessageSquare, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";
import uploadIllustration from "@/assets/upload-illustration.jpg";

const Index = () => {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const handleJoinWishlist = () => {
    setIsWishlistOpen(true);
  };

  const handleCloseWishlist = () => {
    setIsWishlistOpen(false);
  };

  const steps = [
    {
      icon: Upload,
      title: "Upload Your Photo",
      description: "Take or upload your best photos to get started"
    },
    {
      icon: MessageSquare,
      title: "Answer Style Questions",
      description: "Tell us about your vibe, preferences, and lifestyle"
    },
    {
      icon: Sparkles,
      title: "Get AI Recommendations",
      description: "Receive personalized outfits + 3D preview"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content - Matching DRIPPR style */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="fashion-text text-6xl md:text-8xl text-white mb-6 animate-fade-in leading-tight">
            GET<br />
            <span className="text-4xl md:text-5xl">YOUR</span><br />
            AI STYLE<br />
            TODAY
          </h1>
          
          <div className="mt-12">
            <Button 
              variant="cta" 
              onClick={handleJoinWishlist}
              className="text-xl px-12 py-6 animate-fade-in"
            >
              Join Wishlist
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Preview Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Illustration */}
            <div className="order-2 lg:order-1 animate-slide-in">
              <div className="relative">
                <img 
                  src={uploadIllustration} 
                  alt="User uploading photo to AI stylist app"
                  className="w-full h-auto hover-lift shadow-[var(--shadow-card)]"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
              <h2 className="fashion-text text-4xl md:text-5xl text-foreground mb-8">
                AI-POWERED<br />STYLING
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover-lift">
                  <div className="p-3 bg-primary/5 border border-border">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>AI-powered style suggestions</strong> tailored to your skin tone, fit, and vibe.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 group hover-lift">
                  <div className="p-3 bg-primary/5 border border-border">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>See yourself in 3D animations</strong> wearing the outfits.
                  </p>
                </div>
                
                <div className="flex items-start gap-4 group hover-lift">
                  <div className="p-3 bg-primary/5 border border-border">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">
                    <strong>Stay ahead with Gen Z trends</strong> — instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-surface">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="fashion-text text-4xl md:text-6xl text-foreground mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Three simple steps to unlock your perfect style
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-10">
                  {index + 1}
                </div>
                
                {/* Card */}
                <div className="card-minimal p-8 group-hover:shadow-[var(--shadow-card)] transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/5 border border-border flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-card-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fashion-text text-5xl md:text-7xl text-white mb-6 animate-fade-in">
            LAUNCHING<br />SOON
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-12 animate-fade-in">
            Be the First to Try
          </p>
          
          <Button 
            variant="outline" 
            onClick={handleJoinWishlist}
            className="animate-fade-in text-xl px-12 py-6 bg-white text-black hover:bg-white/90"
          >
            Join Wishlist
          </Button>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-white/60 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm">Early Access</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">AI-Powered</div>
              <div className="text-sm">Style Engine</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">3D Preview</div>
              <div className="text-sm">Try Before You Buy</div>
            </div>
          </div>
        </div>
      </section>
      
      <BottomNav />
      
      <WishlistModal 
        isOpen={isWishlistOpen} 
        onClose={handleCloseWishlist} 
      />
    </div>
  );
};

export default Index;