import React from 'react';
import { Check } from 'lucide-react';

const features = [
  "Akses Lifetime ke Materi Program",
  "275+ Premium Message Templates",
  "Private WhatsApp Group Support",
  "Weekly Live Q&A Session",
  "1-on-1 Strategy Call",
  "Garansi 30 Hari Uang Kembali"
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Special Launch Offer!
          </h2>
          <p className="text-xl text-gray-600">
            Harga Normal: <span className="line-through">Rp 2.997.000</span>
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Early Bird Price
              </h3>
              <div className="flex justify-center items-baseline my-8">
                <span className="text-5xl font-extrabold text-[#00ACEE]">Rp 997.000</span>
              </div>

              <ul className="space-y-4 text-left mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#00ACEE] text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-[#60CAF4] transition-colors duration-300">
                Daftar Sekarang
              </button>

              <p className="mt-4 text-sm text-gray-500">
                *Harga promo terbatas untuk 50 pendaftar pertama
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}