import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary rounded-lg p-2 transition-all duration-300 group-hover:scale-110">
              <Heart className="h-6 w-6 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-2xl font-extrabold text-foreground">Nurse Align</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/jobs" 
              className={`text-sm font-bold transition-colors duration-300 hover:text-primary ${
                isActive("/jobs") ? "text-primary" : "text-foreground"
              }`}
            >
              Job Board
            </Link>
            <Link 
              to="/credentials" 
              className={`text-sm font-bold transition-colors duration-300 hover:text-primary ${
                isActive("/credentials") ? "text-primary" : "text-foreground"
              }`}
            >
              Credentials
            </Link>
            <Button 
              asChild 
              className="btn-hover-lift font-bold"
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
