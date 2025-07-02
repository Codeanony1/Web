
import { ArrowLeft, ExternalLink, Github, BarChart3, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const DashboardAnalytics = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Interactive Charts",
      description: "Dynamic data visualization with customizable charts and graphs"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Live data updates and real-time performance monitoring"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "User Behavior Tracking",
      description: "Comprehensive user analytics and behavior pattern analysis"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "KPI Monitoring",
      description: "Key performance indicators with customizable alerts and notifications"
    }
  ];

  const techStack = [
    "React", "D3.js", "Chart.js", "TypeScript", "Node.js", 
    "PostgreSQL", "WebSocket", "Tailwind CSS", "Express.js"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-orange-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dashboard <span className="text-orange-600">Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A powerful analytics dashboard that transforms complex data into actionable 
              insights. Features real-time monitoring, interactive visualizations, and 
              comprehensive reporting for data-driven decision making.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
              alt="Dashboard Analytics"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
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
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
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
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Challenge</h3>
              <p className="text-gray-600">
                Businesses were struggling with fragmented data sources and needed a 
                centralized platform to visualize key metrics, track performance, and 
                make data-driven decisions in real-time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Solution</h3>
              <p className="text-gray-600">
                Created a comprehensive analytics dashboard using modern data visualization 
                libraries, real-time data processing, and intuitive user interface design 
                to present complex data in an easily digestible format.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-orange-600">Results</h3>
              <p className="text-gray-600">
                Reduced data analysis time by 70%, improved decision-making speed by 50%, 
                and enabled businesses to identify trends and opportunities 3x faster 
                than traditional reporting methods.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
