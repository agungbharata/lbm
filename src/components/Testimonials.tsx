import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah P.",
    role: "Owner Fashion Store",
    quote: "Sebelumnya saya struggle banget manual follow up satu-satu. Setelah implement system ini, dalam 1 bulan pertama omset naik 300%!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
  },
  {
    name: "Reza K.",
    role: "Digital Course Creator",
    quote: "List prospek saya nambah 50-100 orang SETIAP HARI, dan semuanya targeted! Best investment ever for my business.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apa Kata Member Kami?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.quote}</p>
              <div className="flex items-center mt-4 text-[#FCB023]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}