import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentCountry: "",
    nursingLicense: "",
    yearsExperience: "",
    specialization: "",
    education: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Application Submitted!",
      description: "We'll review your profile and be in touch within 48 hours.",
    });
    
    setTimeout(() => {
      navigate("/next-steps");
    }, 2000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl font-extrabold">Create Your Nurse Profile</CardTitle>
              <CardDescription className="text-base">
                Tell us about your nursing background so we can match you with the perfect Canadian opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="font-bold">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="Jane Smith"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-bold">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-bold">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentCountry" className="font-bold">Current Country *</Label>
                    <Select 
                      value={formData.currentCountry} 
                      onValueChange={(value) => handleChange("currentCountry", value)}
                      required
                    >
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="mexico">Mexico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nursingLicense" className="font-bold">Nursing License Type *</Label>
                    <Select 
                      value={formData.nursingLicense} 
                      onValueChange={(value) => handleChange("nursingLicense", value)}
                      required
                    >
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="Select license" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rn">RN (Registered Nurse)</SelectItem>
                        <SelectItem value="lpn">LPN (Licensed Practical Nurse)</SelectItem>
                        <SelectItem value="np">NP (Nurse Practitioner)</SelectItem>
                        <SelectItem value="crna">CRNA (Certified Registered Nurse Anesthetist)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="yearsExperience" className="font-bold">Years of Experience *</Label>
                    <Select 
                      value={formData.yearsExperience} 
                      onValueChange={(value) => handleChange("yearsExperience", value)}
                      required
                    >
                      <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialization" className="font-bold">Specialization *</Label>
                  <Select 
                    value={formData.specialization} 
                    onValueChange={(value) => handleChange("specialization", value)}
                    required
                  >
                    <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary">
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency Care</SelectItem>
                      <SelectItem value="icu">Intensive Care Unit (ICU)</SelectItem>
                      <SelectItem value="pediatric">Pediatric</SelectItem>
                      <SelectItem value="oncology">Oncology</SelectItem>
                      <SelectItem value="surgical">Surgical</SelectItem>
                      <SelectItem value="geriatric">Geriatric</SelectItem>
                      <SelectItem value="general">General Practice</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education" className="font-bold">Highest Education Level *</Label>
                  <Select 
                    value={formData.education} 
                    onValueChange={(value) => handleChange("education", value)}
                    required
                  >
                    <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary">
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diploma">Nursing Diploma</SelectItem>
                      <SelectItem value="associate">Associate Degree (ADN)</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree (BSN)</SelectItem>
                      <SelectItem value="master">Master's Degree (MSN)</SelectItem>
                      <SelectItem value="doctorate">Doctorate (DNP/PhD)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo" className="font-bold">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    placeholder="Tell us about any certifications, special skills, or other relevant information..."
                    value={formData.additionalInfo}
                    onChange={(e) => handleChange("additionalInfo", e.target.value)}
                    rows={4}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full btn-hover-lift font-bold text-lg"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
