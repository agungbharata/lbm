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
      <div className="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="justify-center max-w-3xl mx-auto mb-4 text-3xl font-bold text-gray-900 sm:text-5xl">
            Perkenalkan: WhatsApp List Building Mastery
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 sm:text-2xl">
            14 Hari Intensive Program untuk Scale Up Bisnis Anda dengan WhatsApp Marketing
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-xl border border-gray-100 hover:border-[#00ACEE] transition-colors duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-[#00ACEE]/10 rounded-lg flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-lg text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
