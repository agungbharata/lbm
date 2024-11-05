import React from "react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl justify-center mx-auto">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 animate-fade-in sm:leading-tight leading-tight">
            Rahasia Mendapatkan Database Prospek Potensial di WhatsApp dalam 14 Hari,
            <span className="text-[#00ACEE]"> Tanpa Spam & 100% Autopilot!</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Sistem Proven yang Dapat Menghasilkan Omset Puluhan Juta Sebulan Melalui WhatsApp Marketing
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <a
              href="#pricing"
              className="bg-[#00ACEE] text-white px-8 py-4 rounded-full hover:bg-[#60CAF4] transition-colors duration-300 flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5" />{" "}
            </a>
          </div>
        </div>
        <div className="mt-16 relative">
          <img src="src/assets/boxlbm.png" alt="WhatsApp Marketing Dashboard" className="p-8 mx-auto animate-fade-in-up w-[600px]" />
        </div>
      </div>
    </section>
  );
}
