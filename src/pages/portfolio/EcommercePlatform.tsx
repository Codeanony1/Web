
import { ArrowLeft, ExternalLink, Github, ShoppingCart, CreditCard, Users, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const EcommercePlatform = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Product Management",
      description: "Advanced product catalog with inventory tracking and variant management"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Processing",
      description: "Secure payment gateway integration with multiple payment methods"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Management",
      description: "Customer accounts, order history, and personalized shopping experience"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Dashboard",
      description: "Real-time sales analytics and business intelligence reporting"
    }
  ];

  const techStack = [
    "React", "Node.js", "MongoDB", "Express.js", "Stripe API", 
    "JWT Authentication", "AWS S3", "Redis", "Tailwind CSS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-blue-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              E-commerce <span className="text-blue-600">Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive e-commerce solution that provides businesses with everything 
              they need to sell online. Features include product management, secure payments, 
              customer management, and powerful analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="E-commerce Platform"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
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
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
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
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Challenge</h3>
              <p className="text-gray-600">
                Small to medium businesses needed a complete e-commerce solution that could 
                handle product management, secure payments, and provide insights into their 
                sales performance without the complexity of enterprise solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Solution</h3>
              <p className="text-gray-600">
                Built a full-stack e-commerce platform using modern web technologies with 
                a focus on user experience, security, and scalability. Integrated popular 
                payment gateways and implemented comprehensive analytics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-blue-600">Results</h3>
              <p className="text-gray-600">
                Increased client sales by 150% within the first quarter, reduced cart 
                abandonment rate by 30%, and provided actionable insights that helped 
                optimize product offerings and marketing strategies.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EcommercePlatform;
