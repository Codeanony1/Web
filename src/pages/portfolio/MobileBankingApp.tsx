
import { ArrowLeft, ExternalLink, Github, Smartphone, Shield, CreditCard, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const MobileBankingApp = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile First Design",
      description: "Intuitive mobile interface optimized for all screen sizes and devices"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Multi-factor authentication, biometric login, and end-to-end encryption"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Digital Payments",
      description: "Instant transfers, bill payments, and contactless payment solutions"
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: "Financial Insights",
      description: "Personal finance management with spending analytics and budgeting tools"
    }
  ];

  const techStack = [
    "React Native", "Node.js", "PostgreSQL", "Express.js", "OAuth 2.0", 
    "Biometric APIs", "Push Notifications", "Redux", "Jest"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-emerald-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mobile Banking <span className="text-emerald-600">App</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A secure and user-friendly mobile banking application that revolutionizes 
              digital banking experience. Features advanced security, seamless transactions, 
              and comprehensive financial management tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
              alt="Mobile Banking App"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
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
                  className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-200 transition-colors"
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
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Challenge</h3>
              <p className="text-gray-600">
                Traditional banking apps were complex and lacked modern user experience. 
                Users needed a secure, intuitive platform for managing their finances 
                with advanced features like biometric authentication and real-time insights.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Solution</h3>
              <p className="text-gray-600">
                Developed a cross-platform mobile application using React Native with 
                bank-grade security features, intuitive UI/UX design, and comprehensive 
                financial management tools powered by real-time data analytics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-emerald-600">Results</h3>
              <p className="text-gray-600">
                Achieved 4.8/5 app store rating, reduced customer service calls by 45%, 
                and increased mobile transaction volume by 200% within six months of launch.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileBankingApp;
