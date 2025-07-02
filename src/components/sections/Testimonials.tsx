
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=100&h=100&fit=crop&crop=face",
      content: "DevGo.in transformed our vision into reality. Their expertise in React and modern web technologies is exceptional. The team delivered beyond our expectations!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "CTO, InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "Outstanding work! The mobile app they developed has revolutionized our business operations. Professional, reliable, and innovative solutions.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, EcoStore",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "The e-commerce platform they built increased our sales by 300%. Amazing attention to detail and excellent customer support throughout the project.",
      rating: 5,
    },
    {
      name: "David Kim",
      position: "Product Manager, DataFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "DevGo.in's team is incredibly talented. They delivered a complex dashboard application on time and within budget. Highly recommended!",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      position: "Marketing Director, BrandBoost",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content: "Professional, creative, and results-driven. The website they created has significantly improved our online presence and user engagement.",
      rating: 5,
    },
    {
      name: "Alex Parker",
      position: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      content: "From concept to deployment, DevGo.in provided exceptional service. Their technical expertise and creative solutions exceeded all expectations.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg hover:shadow-blue-100"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
