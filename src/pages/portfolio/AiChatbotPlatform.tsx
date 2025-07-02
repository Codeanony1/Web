
import { ArrowLeft, ExternalLink, Github, Brain, MessageSquare, Zap, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AiChatbotPlatform = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities for understanding and responding to complex queries"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Multi-Channel Support",
      description: "Deploy chatbots across web, mobile, and messaging platforms seamlessly"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Learning",
      description: "Machine learning algorithms that improve responses over time"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "API Integration",
      description: "Easy integration with existing systems and third-party services"
    }
  ];

  const techStack = [
    "Python", "TensorFlow", "Flask", "Natural Language Processing", "scikit-learn", 
    "NLTK", "SpaCy", "REST APIs", "Docker", "Redis"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-indigo-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Chatbot <span className="text-indigo-600">Platform</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              An intelligent chatbot platform powered by advanced machine learning and natural 
              language processing. Provides businesses with smart, responsive AI assistants 
              that understand context and deliver personalized experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </Button>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <img 
              src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop"
              alt="AI Chatbot Platform"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in-delay-1">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
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
                  className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
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
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Challenge</h3>
              <p className="text-gray-600">
                Businesses needed intelligent conversational AI that could understand complex 
                queries, maintain context throughout conversations, and provide accurate, 
                helpful responses while continuously learning from interactions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Solution</h3>
              <p className="text-gray-600">
                Built a comprehensive AI platform using TensorFlow and advanced NLP techniques, 
                implementing machine learning models that process natural language, understand 
                intent, and generate contextually appropriate responses.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-indigo-600">Results</h3>
              <p className="text-gray-600">
                Achieved 95% accuracy in intent recognition, reduced customer service costs by 
                60%, and improved user satisfaction scores with 24/7 intelligent assistance 
                across multiple industries.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AiChatbotPlatform;
