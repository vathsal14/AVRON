import React from 'react';
import { Headphones, UserCheck, Mail, MessageSquare, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: 'Customer Support Voice Agents',
    description: 'AI-powered voice agents that handle customer inquiries 24/7 with human-like conversations and instant problem resolution.',
    features: ['24/7 availability', 'Multi-language support', 'Instant escalation', 'Custom knowledge base']
  },
  {
    icon: UserCheck,
    title: 'Lead Qualification',
    description: 'Intelligent agents that engage prospects, qualify leads, and route high-quality opportunities to your sales team.',
    features: ['Smart questioning', 'Behavioral analysis', 'CRM integration', 'Real-time scoring']
  },
  {
    icon: Mail,
    title: 'Email Optimizer',
    description: 'Advanced AI that crafts personalized emails, optimizes send times, and maximizes engagement rates.',
    features: ['Personalization engine', 'A/B testing', 'Send time optimization', 'Performance analytics']
  },
  {
    icon: MessageSquare,
    title: 'Chat Support',
    description: 'Conversational AI that provides instant support through your website, apps, and messaging platforms.',
    features: ['Natural conversations', 'Context awareness', 'Omnichannel support', 'Live handoff']
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Comprehensive dashboards that track agent performance, customer satisfaction, and business impact.',
    features: ['Real-time metrics', 'Custom reports', 'Predictive insights', 'ROI tracking']
  },
  {
    icon: Shield,
    title: 'Social Media Management',
    description: 'AI agents that manage your social media presence, create content, and engage with your audience automatically.',
    features: ['Content creation', 'Post scheduling', 'Audience engagement', 'Performance analytics']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful AI Agents for Every Business Need
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From customer support to lead generation, our AI agents work seamlessly 
            across your entire business ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-3 rounded-lg group-hover:bg-emerald-500/30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;