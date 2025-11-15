import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ExternalLink, Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";

const NextSteps = () => {
  const location = useLocation();
  const formData = location.state?.formData || {};
  
  const isFromMexico = formData.currentCountry?.toLowerCase().includes("mexico");
  const isFromUS = formData.currentCountry?.toLowerCase().includes("us") || 
                   formData.currentCountry?.toLowerCase().includes("united states");
  
  // Customize steps based on country
  const getSteps = () => {
    const baseSteps = [
      "Complete NNAS evaluation of your nursing education",
      "Have credentials translated by certified translator",
      "Apply to provincial nursing regulatory body",
      "Complete any additional education requirements",
      "Pass NCLEX-RN and provincial jurisprudence exam",
    ];

    if (isFromMexico) {
      return [
        ...baseSteps,
        "Demonstrate English/French language proficiency (IELTS/CELBAN) - Spanish speakers may need additional language training",
        "Apply for work permit through employer sponsorship (TN visa not applicable for Mexico)"
      ];
    } else if (isFromUS) {
      return [
        ...baseSteps,
        "Demonstrate English/French language proficiency (IELTS/CELBAN) - typically easier for native English speakers",
        "Apply for work permit through employer sponsorship or TN visa"
      ];
    } else {
      return [
        ...baseSteps,
        "Demonstrate English/French language proficiency (IELTS/CELBAN)",
        "Apply for work permit through employer sponsorship"
      ];
    }
  };

  const steps = getSteps();

  // Customize resources based on country and needs
  const getResources = () => {
    const baseResources = [
      {
        name: "NNAS (National Nursing Assessment Service)",
        url: "https://www.nnas.ca",
        description: "Credential assessment and advisory reports for internationally educated nurses"
      },
      {
        name: "Immigration, Refugees and Citizenship Canada",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
        description: "Official government immigration information and work permit applications"
      },
      {
        name: "Provincial Nursing Regulators",
        url: "#",
        description: "Each province has its own regulatory body (CNO, BCCNM, CARNA, etc.)"
      }
    ];

    if (isFromMexico) {
      return [
        ...baseResources,
        {
          name: "Mexican Nurses → Canada Support",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html",
          description: "Specific guidance for Mexican healthcare professionals transitioning to Canada"
        },
        {
          name: "Language Training Resources",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/improve-english-french.html",
          description: "English and French language programs for Spanish-speaking professionals"
        }
      ];
    } else if (isFromUS) {
      return [
        ...baseResources,
        {
          name: "NAFTA/USMCA TN Visa for Nurses",
          url: "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/temporary-residents/foreign-workers/international-free-trade-agreements/north-american.html",
          description: "Streamlined work permit process for US healthcare professionals"
        }
      ];
    } else {
      return baseResources;
    }
  };

  const resources = getResources();

  const getEstimatedTimeline = () => {
    if (isFromUS) {
      return "3-5 months";
    } else if (isFromMexico) {
      return "5-7 months";
    } else {
      return "4-6 months";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <span className="text-primary font-bold text-lg">
              Welcome{formData.fullName ? `, ${formData.fullName}` : ""} to Nurse Align! 🎉
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            {formData.currentCountry ? `${formData.currentCountry} Nurses → Canada` : "International Nurses → Canada"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isFromMexico && "As a nurse from Mexico, "}
            {isFromUS && "As a nurse from the United States, "}
            International nurses must have their credentials assessed before practicing in Canada. 
            Based on your profile, this process typically takes{" "}
            <span className="font-bold text-primary">{getEstimatedTimeline()}</span>.
          </p>
          {formData.specialization && (
            <div className="inline-block bg-light-blue/30 px-6 py-3 rounded-lg mt-4">
              <p className="text-base font-semibold">
                Your specialty: <span className="text-primary font-bold">{formData.specialization}</span>
                {" "}• Experience: <span className="text-primary font-bold">{formData.yearsExperience} years</span>
              </p>
            </div>
          )}
        </div>

        {/* Steps Section */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-primary" />
              Your Personalized Path to Practice in Canada
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-base font-medium pt-2">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources Section */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <CardTitle className="text-3xl font-extrabold flex items-center gap-3">
              <ExternalLink className="h-8 w-8 text-primary" />
              Important Resources for You
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index} className="p-6 rounded-lg border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{resource.name}</h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-hover font-semibold inline-flex items-center gap-2 group"
                      >
                        Visit Website 
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
          <CardContent className="p-12 text-center space-y-6">
            <Briefcase className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              {formData.specialization 
                ? `Find ${formData.specialization} Positions in Canada`
                : "Ready to Find Your Perfect Role?"}
            </h2>
            <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
              Browse our curated job board featuring positions from top healthcare facilities 
              across Canada that are ready to sponsor international nurses
              {formData.specialization && ` in ${formData.specialization}`}.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="btn-hover-lift font-bold text-lg px-8 py-6"
            >
              <Link 
                to="/jobs" 
                state={{ specialty: formData.specialization }}
              >
                Find Matching Jobs
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Need help with your credentials or have questions? 
            <Link to="/" className="text-primary hover:text-primary-hover font-semibold ml-2">
              Contact our team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;
