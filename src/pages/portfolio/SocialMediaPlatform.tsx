
import { ArrowLeft, ExternalLink, Github, Users, MessageCircle, Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const SocialMediaPlatform = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Profiles",
      description: "Customizable user profiles with bio, interests, and activity tracking"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Real-time Messaging",
      description: "Instant messaging with Socket.io for seamless communication"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Social Interactions",
      description: "Like, comment, and share posts with advanced engagement features"
    },
    {
      icon: <Share className="h-6 w-6" />,
      title: "Content Sharing",
      description: "Share photos, videos, and stories with privacy controls"
    }
  ];

  const techStack = [
    "Next.js", "React", "TypeScript", "Socket.io", "Redis", "PostgreSQL", 
    "AWS S3", "Tailwind CSS", "Node.js", "Express"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-purple-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Social Media <span className="text-purple-600">Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A modern social networking platform that connects people through real-time messaging, 
              content sharing, and engaging social interactions. Built with cutting-edge technology 
              for seamless user experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
              alt="Social Media Platform"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
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
                  className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
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
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Challenge</h3>
              <p className="text-gray-600">
                Creating a scalable social media platform that can handle real-time interactions, 
                content sharing, and maintain high performance under heavy user load.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Solution</h3>
              <p className="text-gray-600">
                Implemented a robust architecture using Next.js for the frontend, Socket.io for 
                real-time communication, Redis for caching, and AWS services for scalable 
                infrastructure and media storage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-purple-600">Results</h3>
              <p className="text-gray-600">
                Delivered a highly engaging platform with sub-second message delivery, 
                99.9% uptime, and the ability to handle thousands of concurrent users 
                with seamless content sharing capabilities.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SocialMediaPlatform;
