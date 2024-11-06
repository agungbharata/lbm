import React, { useEffect } from "react";

export function CallToAction() {
  // Handler untuk click event
  const handleClick = () => {
    // Tracking Facebook Pixel
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "AddToCart", {
        content_name: "LBM-Dripsender",
      });
      console.log("Facebook Pixel Event: AddToCart tracked");
    } else {
      console.error("Facebook Pixel tidak terdefinisi");
    }

    // Log untuk debugging
    console.log("Tombol diklik");
  };

  return (
    <section className="py-20 bg-[#00ACEE]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div className="p-16 text-center">
              {/* Headline */}
              <h2 className="mb-8 text-4xl font-bold text-white">Siap Untuk Scale Up Bisnis Anda?</h2>

              {/* CTA Button dengan event tracking */}
              <a
                href="https://ds.drip.id/lbm"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
                className="block w-full bg-[#c53a32] text-white px-6 py-4 rounded-full text-lg font-semibold 
                hover:bg-red-500 hover:text-white transition-colors duration-300
                transform scale-100
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 cta-button"
                style={{
                  animation: "scale 1.5s ease-in-out infinite",
                }}
              >
                DAFTAR SEKARANG!
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
