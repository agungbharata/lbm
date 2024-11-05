import React from "react";
import { MessageSquare, Users, Gift, DownloadCloudIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    title: "📱 WhatsApp Message Templates",
    items: [
      "Welcome Message Series - 15 templates",
      "Lead Nurturing Sequence - 30 templates",
      "Sales Conversion Series - 20 templates",
      "Customer Retention Messages - 25 templates",
      "Re-engagement Campaign - 15 templates",
      "Holiday & Special Occasion - 25 templates",
    ],
  },
  {
    title: "💬 Response Templates",
    items: [
      "FAQ Auto-Responses - 50 templates",
      "Objection Handling Scripts - 30 templates",
      "Customer Service Templates - 40 templates",
      "Follow-up Message Series - 25 templates",
    ],
  },
];

export function Bonuses() {
  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="text-[#FCB023] font-bold text-xl">🎁 MEGA BONUS</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">Essential Templates Collection</h2>
          <p className="text-2xl text-[#00ACEE] mt-2">Value: Rp 297.000</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {templates.map((section) => (
            <div key={section.title} className="p-8 bg-gray-50 rounded-xl sm:p-16">
              <h3 className="mb-6 text-2xl font-bold">{section.title}</h3>
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

        <div className="p-8 mt-12 text-center bg-gray-50 rounded-xl sm:p-16">
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl">Total Template Yang Anda Dapatkan:</h3>
          <p className="text-4xl font-bold text-[#00ACEE]">275+ Premium Templates</p>
          <div className="mt-6 space-y-2 text-gray-600">
            <p className="text-lg">Siap pakai & sudah terbukti convert di berbagai industri!</p>
            <p className="text-lg">*Semua template bisa langsung di-import ke Dripsender</p>
            <p className="text-lg">*Free update template baru setiap bulan</p>
          </div>
          <div className="max-w-md mx-auto my-6">
            <a
              href="https://bonuslbm.dripsender.id "
              className="bg-[#00ACEE] text-white px-8 py-4 rounded hover:bg-[#60CAF4] transition-colors duration-300 items-center flex mx-auto max-w-[300px] justify-center space-x-2 text-md font-semibold"
            >
              <span>Lihat Bonus Di Sini</span>
              <DownloadCloudIcon className="w-5 h-5" />{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
