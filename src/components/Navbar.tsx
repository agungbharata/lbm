import React from 'react';
import { MessageCircle } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-8 h-8 text-[#00ACEE]" />
            <span className="text-xl font-bold text-gray-900">WA Mastery</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-[#00ACEE] transition-colors">Fitur</a>
            <a href="#testimonials" className="text-gray-600 hover:text-[#00ACEE] transition-colors">Testimonial</a>
            <a href="#pricing" className="bg-[#00ACEE] text-white px-6 py-2 rounded-full hover:bg-[#60CAF4] transition-colors duration-300">
              Daftar Sekarang
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}