import React from 'react';
import { ArrowRight, Zap, Users, TrendingUp, Phone, Copy, X } from 'lucide-react';
import ContactForm from './ContactForm';

const Hero = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [showVoiceAgentModal, setShowVoiceAgentModal] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const phoneNumber = '+1 (447) 837 9012';

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  return (
    <>
      <section className="pt-24 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-white">AI Agents That</span>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent block">Transform Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Deploy intelligent AI agents to automate customer support, qualify leads, 
            optimize emails, and accelerate your business growth with cutting-edge artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200">
              Watch Demo
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 text-gray-400">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-emerald-400" />
              <span className="text-lg">Deploy in 2 days</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-emerald-400" />
              <span className="text-lg">50+ businesses trust us</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-emerald-400" />
              <span className="text-lg">40% revenue increase</span>
            </div>
          </div>
          
          <button 
            onClick={() => setShowVoiceAgentModal(true)}
            className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-200"
          >
            Try Our Voice Agents
          </button>
        </div>
      </div>
      </section>
      
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
      
      {showVoiceAgentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Try Our Voice Agents</h2>
                <button
                  onClick={() => setShowVoiceAgentModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-600 mt-2">Experience the power of AI voice agents</p>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1 - SPA Agent */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6">
                  <div className="text-center">
                    <div className="bg-emerald-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">SPA Agent</h3>
                    <p className="text-gray-600 mb-6">Talk to our intelligent SPA booking agent</p>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200 mb-4">
                      <p className="text-sm text-gray-600 mb-2">Call this number:</p>
                      <button
                        onClick={copyPhoneNumber}
                        className="flex items-center justify-center space-x-2 w-full bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-lg transition-colors duration-200 font-semibold"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{phoneNumber}</span>
                        <Copy className="h-4 w-4" />
                      </button>
                      {copied && (
                        <p className="text-emerald-600 text-sm mt-2 text-center">
                          ✓ Phone number copied!
                        </p>
                      )}
                    </div>
                    
                    <div className="text-left space-y-2 text-sm text-gray-600">
                      <p>• Book spa appointments</p>
                      <p>• Check availability</p>
                      <p>• Answer service questions</p>
                      <p>• Handle cancellations</p>
                    </div>
                  </div>
                </div>

                {/* Column 2 - Coming Soon */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 opacity-60">
                  <div className="text-center">
                    <div className="bg-gray-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Restaurant Agent</h3>
                    <p className="text-gray-600 mb-6">Coming Soon</p>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <p className="text-gray-400">Feature in development</p>
                    </div>
                    
                    <div className="text-left space-y-2 text-sm text-gray-400">
                      <p>• Table reservations</p>
                      <p>• Menu inquiries</p>
                      <p>• Special requests</p>
                      <p>• Order management</p>
                    </div>
                  </div>
                </div>

                {/* Column 3 - Coming Soon */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 opacity-60">
                  <div className="text-center">
                    <div className="bg-gray-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Agent</h3>
                    <p className="text-gray-600 mb-6">Coming Soon</p>
                    
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <p className="text-gray-400">Feature in development</p>
                    </div>
                    
                    <div className="text-left space-y-2 text-sm text-gray-400">
                      <p>• Product inquiries</p>
                      <p>• Order tracking</p>
                      <p>• Return assistance</p>
                      <p>• Customer support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setShowVoiceAgentModal(false);
                    setShowContactForm(true);
                  }}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-700 transition-colors duration-200 shadow-lg"
                >
                  Get Your Own Voice Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;