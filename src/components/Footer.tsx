import React from 'react';
import { Bot, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Avron AI</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses with intelligent AI agents that deliver exceptional 
              customer experiences and drive growth.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-6 w-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200" />
              <Github className="h-6 w-6 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors duration-200" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Voice Agents</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Lead Qualification</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Email Optimizer</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Chat Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>avronaisolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+91 78542 52060</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Avron AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;