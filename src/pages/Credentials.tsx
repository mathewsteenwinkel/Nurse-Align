import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, GraduationCap, Award, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

const Credentials = () => {
  const credentialSteps = [
    {
      icon: FileText,
      title: "Credential Assessment",
      description: "We evaluate your current nursing credentials and identify requirements for Canadian registration.",
      items: ["NNAS application support", "Document preparation", "Assessment review"]
    },
    {
      icon: GraduationCap,
      title: "Bridging Programs",
      description: "Access specialized courses to meet Canadian nursing standards and fill any gaps.",
      items: ["NCLEX-RN preparation", "Clinical competency programs", "Language proficiency support"]
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Get guidance through provincial nursing registration and certification processes.",
      items: ["Provincial registration assistance", "Exam scheduling", "License transfer support"]
    }
  ];

  const provinces = [
    { name: "Ontario", regulator: "College of Nurses of Ontario (CNO)" },
    { name: "British Columbia", regulator: "British Columbia College of Nurses (BCCNM)" },
    { name: "Alberta", regulator: "College of Licensed Practical Nurses of Alberta" },
    { name: "Quebec", regulator: "Ordre des infirmières et infirmiers du Québec" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold">Navigate Canadian Nursing Credentials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We simplify the complex process of credential recognition and help you meet 
            Canadian nursing standards through personalized upskilling programs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {credentialSteps.map((step, index) => (
            <Card key={index} className="card-hover border-2 relative">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {step.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {index < credentialSteps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Provincial Requirements */}
        <div className="mb-16">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold">Provincial Nursing Regulators</CardTitle>
              <CardDescription className="text-base">
                Each Canadian province has its own nursing regulatory body. We'll guide you through 
                the specific requirements for your target province.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {provinces.map((province, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 transition-all duration-300 hover:bg-muted">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{province.name}</h3>
                      <p className="text-sm text-muted-foreground font-semibold">{province.regulator}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="text-3xl font-extrabold">Ready to Validate Your Credentials?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our team will assess your qualifications and create a personalized pathway 
              to Canadian nursing certification.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="secondary"
              className="btn-hover-lift font-bold text-lg px-8"
            >
              <Link to="/signup">Start Your Assessment</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Credentials;
