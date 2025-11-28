import React from 'react';
import { Clock, DollarSign, Users, TrendingUp, Zap, Globe } from 'lucide-react';
import ContactForm from './ContactForm';

const benefits = [
  {
    icon: Clock,
    title: '90% Faster Response Times',
    description: 'Instant responses to customer inquiries, eliminating wait times and improving satisfaction.',
    metric: '< 3 seconds average response'
  },
  {
    icon: DollarSign,
    title: '60% Cost Reduction',
    description: 'Significant savings on customer support and lead qualification costs.',
    metric: 'Save $50K+ annually'
  },
  {
    icon: Users,
    title: '24/7 Availability',
    description: 'Never miss a customer inquiry or sales opportunity with round-the-clock AI agents.',
    metric: '100% uptime guaranteed'
  },
  {
    icon: TrendingUp,
    title: '3x Higher Conversion',
    description: 'Intelligent lead qualification and personalized engagement boost conversion rates.',
    metric: 'Average 35% conversion rate'
  },
  {
    icon: Zap,
    title: 'Lightning Fast Setup',
    description: 'Deploy AI agents in minutes with our no-code platform and pre-built templates.',
    metric: '5-minute deployment'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Serve customers worldwide with multi-language support and regional customization.',
    metric: '50+ languages supported'
  }
];

const Benefits = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);

  return (
    <>
      <section id="benefits" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Businesses Choose Avron AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their customer experience 
            and accelerated growth with our AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50"
            >
              <div className="flex items-center mb-6">
                <div className="bg-emerald-500/20 p-3 rounded-lg">
                  <benefit.icon className="h-8 w-8 text-emerald-400" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="text-emerald-400 font-semibold text-lg">
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
          <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join industry leaders who have revolutionized their customer experience with Avron AI.
          </p>
          <button 
            onClick={() => setShowContactForm(true)}
            className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-xl"
          >
            Start Your Free Trial
          </button>
          </div>
        </div>
      </div>
      </section>
      
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
};

export default Benefits;