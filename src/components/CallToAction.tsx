import React from "react";

export function CallToAction() {
  return (
    <section className="py-20 bg-[#00ACEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden">
            <div className="p-6 sm:p-16 text-center">
              {/* Headline */}
              <h2 className="text-4xl font-bold text-white mb-8">Siap Untuk Scale Up Bisnis Anda?</h2>

              {/* CTA Button dengan link (menggunakan tag a) */}
              <a
                href="https://yourwebsite.com/register" // Ganti dengan URL tujuan Anda
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-50 text-[#00ACEE] px-6 py-4 rounded-full text-lg font-semibold 
                hover:bg-red-500 hover:text-white transition-colors duration-300
                transform scale-100
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                style={{
                  animation: "scale 1.5s ease-in-out infinite",
                }}
              >
                YA, SAYA MAU GABUNG SEKARANG!
              </a>

              {/* Limited offer text */}
              <p className="mt-4 text-lg text-gray-50">*Limited time offer untuk 50 orang pertama</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom keyframes untuk animasi scale */}
      <style jsx global>{`
        @keyframes scale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
