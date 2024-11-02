import React from 'react';
import { MessageSquare, Users, Gift } from 'lucide-react';

const templates = [
  {
    title: "📱 WhatsApp Message Templates",
    items: [
      "Welcome Message Series - 15 templates",
      "Lead Nurturing Sequence - 30 templates",
      "Sales Conversion Series - 20 templates",
      "Customer Retention Messages - 25 templates",
      "Re-engagement Campaign - 15 templates",
      "Holiday & Special Occasion - 25 templates"
    ]
  },
  {
    title: "💬 Response Templates",
    items: [
      "FAQ Auto-Responses - 50 templates",
      "Objection Handling Scripts - 30 templates",
      "Customer Service Templates - 40 templates",
      "Follow-up Message Series - 25 templates"
    ]
  }
];

export function Bonuses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#FCB023] font-bold text-xl">🎁 MEGA BONUS</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Essential Templates Collection
          </h2>
          <p className="text-xl text-[#00ACEE] mt-2">Value: Rp 297.000</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {templates.map((section) => (
            <div key={section.title} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <Gift className="w-5 h-5 text-[#00ACEE]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">Total Template Yang Anda Dapatkan:</h3>
          <p className="text-4xl font-bold text-[#00ACEE]">275+ Premium Templates</p>
          <div className="mt-6 space-y-2 text-gray-600">
            <p>Siap pakai & sudah terbukti convert di berbagai industri!</p>
            <p>*Semua template bisa langsung di-import ke Dripsender</p>
            <p>*Free update template baru setiap bulan</p>
          </div>
        </div>
      </div>
    </section>
  );
}