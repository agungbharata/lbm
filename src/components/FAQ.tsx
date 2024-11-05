import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Apakah saya perlu pengalaman WhatsApp marketing sebelumnya?",
    answer: "Tidak perlu! Program ini dirancang untuk pemula hingga advanced. Kami akan membimbing Anda step-by-step dari awal.",
  },
  {
    question: "Apakah program ini cocok untuk pemula?",
    answer:
      "Ya! Program ini didesain step-by-step dari basic sampai advanced. Bahkan jika Anda baru mulai bisnis online, Anda bisa mengikuti dengan mudah..",
  },
  {
    question: "Berapa lama saya bisa akses materinya?",
    answer: "Anda mendapatkan akses SEUMUR HIDUP ke semua materi, template, dan update di masa depan",
  },
  {
    question: "Dimana saya mendapatkan materinya?",
    answer: "Anda akan mendapatkan materinya langsung dikirim ke No WhatsApp Anda selama 14 Hari berturut.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-medium text-xl text-gray-900">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600 text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
