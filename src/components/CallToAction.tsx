import React from "react";

export function CallToAction() {
  return (
    <section className="py-20 bg-[#00ACEE]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div className="p-6 text-center sm:p-16">
              {/* Headline */}
              <h2 className="mb-8 text-4xl font-bold text-white">Siap Untuk Scale Up Bisnis Anda?</h2>

              <a
                href="https://yourwebsite.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-50 text-[#00ACEE] px-4 py-4 rounded-full text-md sm:text-lg font-semibold 
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
