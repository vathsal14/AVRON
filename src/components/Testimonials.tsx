import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Head of Customer Success',
    company: 'TechFlow Solutions',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    content: "Avron AI's voice agents have completely transformed our customer support. We've seen a 90% reduction in response times and our customer satisfaction scores have never been higher.",
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'VP of Sales',
    company: 'Growth Dynamics',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    content: "The lead qualification agent is incredible. It's like having a top sales rep working 24/7, qualifying prospects and booking meetings while we sleep. Our conversion rate has tripled.",
    rating: 5
  },
  {
    name: 'Emily Johnson',
    role: 'Marketing Director',
    company: 'InnovateCorp',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    content: "The email optimizer has revolutionized our campaigns. Personalized emails, perfect timing, and detailed analytics have boosted our engagement rates by 250%. Absolutely game-changing.",
    rating: 5
  },
  {
    name: 'David Park',
    role: 'CEO',
    company: 'Startup Ventures',
    image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face',
    content: "As a startup, we needed enterprise-level customer service without the overhead. Avron AI delivered exactly that. Professional, reliable, and incredibly cost-effective.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how businesses across industries are achieving remarkable results with Avron AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-emerald-400 mr-4" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-emerald-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-gray-400">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 text-gray-400">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-lg">Active Businesses</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">$20,000+</div>
              <div className="text-lg">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99%</div>
              <div className="text-lg">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">4.8/5</div>
              <div className="text-lg">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;