import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-nurses.jpg";

const Home = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Matching",
      description: "AI-powered matching with Canadian healthcare facilities"
    },
    {
      icon: Globe,
      title: "Cross-Border Support",
      description: "Navigate US, Mexico to Canada credential transfer seamlessly"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Access upskilling programs and credential enhancement"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Connect Your
                <span className="text-primary block">Nursing Career</span>
                to Canada
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We match experienced nurses from the US and Mexico with rewarding 
                opportunities across Canada, handling credentials and upskilling every step of the way.
              </p>
              <div className="flex gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="btn-hover-lift font-bold text-lg px-8"
                >
                  <Link to="/signup">Start Your Journey</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="btn-hover-lift font-bold text-lg px-8"
                >
                  <Link to="/jobs">Browse Jobs</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Professional nurses collaborating" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-4xl font-extrabold">1,200+</p>
                <p className="text-sm font-bold">Nurses Placed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4">Why Choose Nurse Align?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We simplify the complex process of international nursing career transitions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-2 hover:border-primary/50">
                <CardContent className="pt-8 pb-6 text-center space-y-4">
                  <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0 overflow-hidden">
            <CardContent className="p-12 text-center space-y-6">
              <h2 className="text-4xl font-extrabold">Ready to Start Your Canadian Nursing Career?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of nurses who have successfully transitioned to rewarding 
                careers in Canada's healthcare system.
              </p>
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="btn-hover-lift font-bold text-lg px-8"
              >
                <Link to="/signup">Create Your Profile</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
