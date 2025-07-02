
import { ArrowLeft, ExternalLink, Github, Calendar, Users, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const HealthcareManagement = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Appointment Scheduling",
      description: "Advanced scheduling system with automated reminders and calendar integration"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Patient Management",
      description: "Comprehensive patient records with medical history and treatment tracking"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Medical Records",
      description: "Secure digital storage and management of patient medical records"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "HIPAA Compliance",
      description: "Full compliance with healthcare privacy and security regulations"
    }
  ];

  const techStack = [
    "Angular", "TypeScript", "Spring Boot", "MySQL", "Java", 
    "JWT Authentication", "Bootstrap", "RESTful APIs", "Docker"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-green-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Healthcare <span className="text-green-600">Management</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive healthcare management system designed for clinics and medical practices. 
              Streamlines patient care, appointment scheduling, and medical record management 
              with full HIPAA compliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
              alt="Healthcare Management System"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-16 animate-fade-in-delay-2">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Technology Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="animate-fade-in-delay-3">
          <CardHeader>
            <CardTitle className="text-2xl">Project Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Challenge</h3>
              <p className="text-gray-600">
                Healthcare providers needed a comprehensive system to manage patient records, 
                appointments, and medical data while ensuring strict compliance with HIPAA 
                regulations and maintaining data security.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Solution</h3>
              <p className="text-gray-600">
                Developed a full-stack application using Angular and Spring Boot with robust 
                security features, encrypted data storage, role-based access control, and 
                automated compliance reporting.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-green-600">Results</h3>
              <p className="text-gray-600">
                Reduced administrative workload by 40%, improved patient scheduling efficiency, 
                and achieved 100% HIPAA compliance with zero security incidents since deployment.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthcareManagement;
