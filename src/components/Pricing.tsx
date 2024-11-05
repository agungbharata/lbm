import React from "react";
import { Check } from "lucide-react";

const features = [
  "Akses Lifetime ke Materi Program",
  "Essential Templates Collection - 275+ Templates! (Value: Rp 297.000)",
  "14 Hari Intensive Training (Value: Rp 397.000)",
  "BONUS: 35% OFF Dripsender (Value: Rp 349.650)",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Special Launch Offer!</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="py-16 px-8 sm:px-16 sm:py-16 text-center">
              <h3 className="text-3xl font-bold text-[#00ACEE] mb-10">Kapan Lagi Mendapatkan Tawaran Sebanyak Ini?</h3>
              <ul
                className="space-y-
              4 text-left mb-8"
              >
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="ml-3 text-gray-600 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
              <p className="text-2xl text-gray-600 mb-10 font-bold">
                Total Value: <span className="line-through">Rp 1.043.650</span>
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Early Bird Price</h3>
              <div className="flex justify-center items-baseline mb-10">
                <span className="text-5xl font-extrabold text-[#00ACEE]">Rp 97.000</span>
              </div>

              <a
                href="https://yourwebsite.com/register" // Ganti dengan URL tujuan Anda
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#c53a32] text-white px-6 py-4 rounded-full text-lg font-semibold 
                hover:bg-red-500 hover:text-white transition-colors duration-300
                transform scale-100
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                style={{
                  animation: "scale 1.5s ease-in-out infinite",
                }}
              >
                DAFTAR SEKARANG!
              </a>

              <p className="mt-4 text-sm text-gray-500">*Harga promo terbatas untuk 50 pendaftar pertama</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
