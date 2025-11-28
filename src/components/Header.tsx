import React, { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import ContactForm from './ContactForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Bot className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold text-white">Avron AI</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Services</a>
            <a href="#benefits" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Benefits</a>
            <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Contact</a>
            <button 
              onClick={() => setShowContactForm(true)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg"
            >
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Services</a>
              <a href="#benefits" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Benefits</a>
              <a href="#testimonials" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Testimonials</a>
              <a href="#contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">Contact</a>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-lg w-fit"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
      </header>
      
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
};

export default Header;