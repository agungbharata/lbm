import React from "react";
import { ArrowRight } from "lucide-react";
import boxLbmImage from "../assets/boxlbm.png";

export function Hero() {
  return (
    <section className="px-4 pt-48 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="justify-center max-w-4xl mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-6xl animate-fade-in sm:leading-tight">
            Rahasia Mendapatkan Database Prospek Potensial di WhatsApp dalam 14 Hari,
            <span className="text-[#00ACEE]"> Tanpa Spam & 100% Autopilot!</span>
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600 animate-fade-in-delay">
            Sistem Proven yang Dapat Menghasilkan Omset Puluhan Juta Sebulan Melalui WhatsApp Marketing
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row animate-fade-in-delay-2">
            <a
              href="#pricing"
              className="bg-[#00ACEE] text-white px-8 py-4 rounded-full hover:bg-[#60CAF4] transition-colors duration-300 flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-5 h-5" />{" "}
            </a>
          </div>
        </div>
        <div className="relative mt-16">
          <img src={boxLbmImage} alt="WhatsApp Marketing" className="p-8 mx-auto animate-fade-in-up w-[600px]" />
        </div>
      </div>
    </section>
  );
}
