import React from "react";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Prospek sedikit & tidak berkualitas",
  "Engagement rendah di broadcast WhatsApp",
  "Penjualan tidak konsisten setiap bulan",
  "Kesulitan follow up manual satu-persatu",
  "Bingung cara scaling bisnis ke level berikutnya",
];

const solutions = [
  "List prospek yang terus bertambah otomatis",
  "Engagement tinggi & konversi konsisten",
  "Sistem follow up autopilot 24/7",
  "Omset bisnis naik signifikan",
  "Bisnis yang bisa di-scale dengan mudah",
];

export function Problems() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="px-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="max-w-3xl mx-auto mb-16 text-3xl font-bold text-center text-gray-900 sm:text-5xl">
          Apa Yang Membuat Bisnis Online Anda Stagnan?
        </h2>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="mb-8 text-2xl font-semibold text-red-500">😫 Masalah Yang Anda Hadapi:</h3>
            {problems.map((problem) => (
              <div key={problem} className="flex items-start space-x-3">
                <XCircle className="flex-shrink-0 w-6 h-6 mt-1 text-red-500" />
                <p className="text-lg text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <h3 className="mb-8 text-2xl font-semibold text-green-500">😊 Yang Anda Inginkan:</h3>
            {solutions.map((solution) => (
              <div key={solution} className="flex items-start space-x-3">
                <CheckCircle className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <p className="text-lg text-gray-700">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
