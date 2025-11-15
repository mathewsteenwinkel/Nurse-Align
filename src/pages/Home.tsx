import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle, 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Shield, 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Heart,
  FileCheck,
  Briefcase,
  GraduationCap
} from "lucide-react";
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

  const stats = [
    { value: "1,200+", label: "Nurses Helped" },
    { value: "150+", label: "Healthcare Partners" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Canadian Cities" }
  ];

  const howItWorks = [
    {
      step: "1",
      icon: FileCheck,
      title: "Create Your Profile",
      description: "Sign up and tell us about your nursing experience, qualifications, and career goals. Our platform makes it easy to showcase your expertise."
    },
    {
      step: "2",
      icon: Award,
      title: "Credential Assessment",
      description: "Our experts evaluate your credentials and guide you through the Canadian equivalency process. We handle all the paperwork and documentation."
    },
    {
      step: "3",
      icon: Briefcase,
      title: "Get Matched",
      description: "Our AI matches you with suitable positions across Canadian healthcare facilities. Receive personalized job recommendations based on your profile."
    },
    {
      step: "4",
      icon: GraduationCap,
      title: "Start Your Career",
      description: "Receive ongoing support as you transition into your new role in Canada. We're with you every step of the way, even after placement."
    }
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "RN, Previously Mexico City",
      location: "Now in Toronto, ON",
      quote: "Nurse Align made my dream of working in Canada a reality. The credential process was smooth, and I found an amazing position within 3 months!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
    },
    {
      name: "James Thompson",
      role: "ICU Nurse, Previously Texas",
      location: "Now in Vancouver, BC",
      quote: "The support I received was incredible. From paperwork to job placement, they were with me every step of the way. Highly recommend!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      name: "Sofia Martinez",
      role: "Pediatric Nurse, Previously California",
      location: "Now in Montreal, QC",
      quote: "I was worried about the language requirements and credential transfer, but Nurse Align's team guided me through everything seamlessly.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sofia"
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Credential assessment support",
    "Resume optimization",
    "Interview preparation",
    "Relocation assistance",
    "Language training resources",
    "Ongoing career support",
    "Family integration help"
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                Connect Your
                <span className="text-primary block">Nursing Career</span>
                to Canada
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                We match experienced nurses from the US and Mexico with rewarding 
                opportunities across Canada, handling credentials and upskilling every step of the way.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button 
                  asChild 
                  size="lg" 
                  className="btn-hover-lift font-bold text-lg px-8 py-6"
                >
                  <Link to="/signup">Start Your Journey</Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="btn-hover-lift font-bold text-lg px-8 py-6"
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
                <p className="text-sm font-bold">Nurses Helped</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold mb-2">{stat.value}</p>
                <p className="text-sm md:text-base font-semibold opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 lg:mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">About Nurse Align</h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Your trusted partner in international nursing career transitions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 card-hover">
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To bridge the gap between skilled nursing professionals from the US and Mexico 
                    with Canada's growing healthcare needs, ensuring seamless credential transfers 
                    and successful career transitions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 card-hover">
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Promise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide end-to-end support throughout your journey, from credential assessment 
                    to job placement and relocation assistance. Your success is our priority, and we're 
                    committed to being with you every step of the way.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50 border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        {/* Gradient Background - white via light blue to dark blue */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, white 0%, hsl(var(--light-blue)) 50%, hsl(var(--primary)) 100%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Why Choose Nurse Align?</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              We simplify the complex process of international nursing career transitions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-2 hover:border-primary/50 bg-white/95 backdrop-blur-sm shadow-lg">
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

      {/* How It Works Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Gradient Background - dark blue via light blue to white */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--light-blue)) 50%, white 100%)'
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-8 py-6 rounded-2xl shadow-lg mb-4">
              <h2 className="text-4xl font-extrabold mb-2">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your journey to a Canadian nursing career in four simple steps
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {howItWorks.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="card-hover border-2 h-full bg-white/80 backdrop-blur-sm shadow-lg">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <item.icon className="h-6 w-6 text-primary" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">Success Stories</h2>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from nurses who've successfully transitioned to Canada with our help
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover border-2">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-semibold">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0 overflow-hidden shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold">Ready to Start Your Canadian Nursing Career?</h2>
              <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                Join hundreds of nurses who have successfully transitioned to rewarding 
                careers in Canada's healthcare system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="secondary"
                  className="btn-hover-lift font-bold text-lg px-8"
                >
                  <Link to="/signup">Create Your Profile</Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="btn-hover-lift font-bold text-lg px-8 bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Link to="/credentials">Check Your Credentials</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-lg p-2">
                  <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
                </div>
                <span className="text-xl font-extrabold">Nurse Align</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting nursing professionals with Canadian healthcare opportunities since 2020.
              </p>
              <div className="flex gap-3">
                <a href="#" className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary/10 hover:bg-primary hover:text-primary-foreground p-2 rounded-lg transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/jobs" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Job Board
                  </Link>
                </li>
                <li>
                  <Link to="/credentials" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Credentials
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@nursealign.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@nursealign.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:+1-800-NURSE-CA" className="text-muted-foreground hover:text-primary transition-colors">
                    +1-800-NURSE-CA
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    123 Healthcare Ave<br />
                    Toronto, ON M5H 2N2<br />
                    Canada
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© 2024 Nurse Align. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
