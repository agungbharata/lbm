import React from "react";
import { Target, Bot, DollarSign } from "lucide-react";

const features = [
  {
    title: "🎯 Targeting",
    description: "System untuk mendapatkan prospek berkualitas tinggi secara otomatis",
    icon: <Target className="w-6 h-6 text-[#00ACEE]" />,
  },
  {
    title: "🤖 Automation",
    description: "Setup autopilot system yang bekerja 24/7 untuk Anda",
    icon: <Bot className="w-6 h-6 text-[#00ACEE]" />,
  },
  {
    title: "💰 Conversion",
    description: "Formula proven untuk convert prospects menjadi customers",
    icon: <DollarSign className="w-6 h-6 text-[#00ACEE]" />,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 justify-center max-w-3xl mx-auto">
            Perkenalkan: WhatsApp List Building Mastery
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
            14 Hari Intensive Program untuk Scale Up Bisnis Anda dengan WhatsApp Marketing
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-xl border border-gray-100 hover:border-[#00ACEE] transition-colors duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#00ACEE]/10 rounded-lg flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
