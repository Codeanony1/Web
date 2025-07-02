
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹ 3000",
      period: "per project",
      description: "Perfect for small businesses and startups",
      features: [
        "Responsive Web Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "3 Revisions Included",
        "1 Month Support",
        "Basic Analytics Setup",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹ 5000",
      period: "per project",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Starter",
        "Custom Web Application",
        "Database Integration",
        "Payment Gateway Setup",
        "Advanced SEO Optimization",
        "Unlimited Revisions",
        "3 Months Support",
        "Performance Optimization",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹ 10000",
      period: "per project",
      description: "For large-scale applications",
      features: [
        "Everything in Professional",
        "Complex System Architecture",
        "Third-party API Integration",
        "Advanced Security Features",
        "Mobile App Development",
        "Custom Admin Dashboard",
        "6 Months Support",
        "Dedicated Project Manager",
        "24/7 Priority Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg ${
                plan.popular 
                  ? "ring-2 ring-blue-600 shadow-blue-100 hover:shadow-blue-200" 
                  : "hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                  <Star className="inline h-4 w-4 mr-1" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <CardDescription className="mt-2 text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600"
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We'd love to discuss your project requirements.
          </p>
          <Button variant="outline" size="lg" className="rounded-full hover:scale-105 transition-transform">
            Contact Us for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
