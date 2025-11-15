import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, Search } from "lucide-react";
import Navbar from "@/components/Navbar";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const jobs = [
    {
      id: 1,
      title: "Emergency Room Nurse",
      hospital: "Vancouver General Hospital",
      location: "Vancouver, BC",
      salary: "$75,000 - $95,000 CAD",
      type: "Full-time",
      specialty: "Emergency Care",
      description: "Seeking experienced ER nurses to join our dynamic emergency department."
    },
    {
      id: 2,
      title: "ICU Registered Nurse",
      hospital: "Toronto Western Hospital",
      location: "Toronto, ON",
      salary: "$80,000 - $100,000 CAD",
      type: "Full-time",
      specialty: "ICU",
      description: "Join our award-winning intensive care unit team caring for critical patients."
    },
    {
      id: 3,
      title: "Pediatric Nurse",
      hospital: "Alberta Children's Hospital",
      location: "Calgary, AB",
      salary: "$70,000 - $90,000 CAD",
      type: "Full-time",
      specialty: "Pediatric",
      description: "Make a difference in children's lives in our state-of-the-art pediatric facility."
    },
    {
      id: 4,
      title: "Surgical Nurse",
      hospital: "Montreal General Hospital",
      location: "Montreal, QC",
      salary: "$72,000 - $92,000 CAD",
      type: "Full-time",
      specialty: "Surgical",
      description: "Bilingual surgical nurses needed for our expanding surgical department."
    },
    {
      id: 5,
      title: "Oncology Nurse",
      hospital: "BC Cancer Centre",
      location: "Vancouver, BC",
      salary: "$78,000 - $98,000 CAD",
      type: "Full-time",
      specialty: "Oncology",
      description: "Compassionate oncology nurses to provide specialized cancer care."
    },
    {
      id: 6,
      title: "General Practice Nurse",
      hospital: "Halifax Medical Center",
      location: "Halifax, NS",
      salary: "$68,000 - $85,000 CAD",
      type: "Full-time",
      specialty: "General",
      description: "Community-focused nursing role in a welcoming coastal city."
    }
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl font-extrabold">Nursing Opportunities in Canada</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover rewarding positions across Canada's top healthcare facilities
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by position, location, or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg transition-all duration-300 focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="card-hover border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="font-bold">
                    {job.specialty}
                  </Badge>
                  <Badge variant="outline" className="font-bold">
                    <Clock className="h-3 w-3 mr-1" />
                    {job.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  {job.hospital}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-semibold">{job.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2 text-primary" />
                    <span className="font-semibold">{job.salary}</span>
                  </div>
                </div>
                
                <Button className="w-full btn-hover-lift font-bold">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              No jobs found matching your search. Try different keywords.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
