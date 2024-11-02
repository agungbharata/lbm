import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            Rahasia Mendapatkan Database Prospek Potensial di WhatsApp dalam 14 Hari,
            <span className="text-[#00ACEE]"> Tanpa Spam & 100% Autopilot!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Sistem Proven yang Dapat Menghasilkan Omset Puluhan Juta Sebulan Melalui WhatsApp Marketing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <button className="bg-[#00ACEE] text-white px-8 py-4 rounded-full hover:bg-[#60CAF4] transition-colors duration-300 flex items-center justify-center space-x-2 text-lg font-semibold">
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="mt-16 relative">
          <img
            src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80"
            alt="WhatsApp Marketing Dashboard"
            className="rounded-xl shadow-2xl mx-auto animate-fade-in-up"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent bottom-0 h-20"></div>
        </div>
      </div>
    </section>
  );
}