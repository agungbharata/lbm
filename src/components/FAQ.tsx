import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Apakah saya perlu pengalaman WhatsApp marketing sebelumnya?",
    answer: "Tidak perlu! Program ini dirancang untuk pemula hingga advanced. Kami akan membimbing Anda step-by-step dari awal."
  },
  {
    question: "Berapa lama saya bisa melihat hasil?",
    answer: "Member kami rata-rata mulai melihat hasil dalam 14-30 hari pertama, tergantung konsistensi implementasi dan niche bisnis."
  },
  {
    question: "Apakah ada garansi?",
    answer: "Ya! Kami memberikan garansi 30 hari uang kembali jika Anda telah mengimplementasikan sistem tapi tidak mendapatkan hasil."
  },
  {
    question: "Apakah ada support yang diberikan?",
    answer: "Tentu! Anda akan mendapat akses ke grup WhatsApp eksklusif dan support langsung dari tim kami selama 30 hari."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}