
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      route: "/portfolio/e-commerce-platform"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Biometrics"],
      route: "/portfolio/mobile-banking-app"
    },
    {
      title: "Dashboard Analytics",
      description: "Real-time analytics dashboard with interactive charts and reports",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      route: "/portfolio/dashboard-analytics"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking platform with real-time messaging",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "Full Stack",
      technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
      route: "/portfolio/social-media-platform"
    },
    {
      title: "Healthcare Management",
      description: "Comprehensive healthcare management system for clinics",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      category: "Web Development",
      technologies: ["Angular", "Spring Boot", "MySQL"],
      route: "/portfolio/healthcare-management"
    },
    {
      title: "AI Chatbot Platform",
      description: "Intelligent chatbot platform with natural language processing",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "Flask", "NLP"],
      route: "/portfolio/ai-chatbot-platform"
    },
  ];

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg cursor-pointer"
              onClick={() => handleCardClick(project.route)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(project.route);
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Project
                    </Button>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle GitHub link
                      }}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
