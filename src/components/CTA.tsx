import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const CTA = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowContactForm(true);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto">
              Join hundreds of businesses that have revolutionized their operations with AI agents.
            </p>
            
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-xl mx-auto"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
      
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
};

export default CTA;