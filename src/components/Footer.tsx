import React from "react";
import { MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <MessageCircle className="w-8 h-8 text-[#00ACEE]" />
          <span className="text-xl font-bold text-white">List Building Mastery</span>
        </div>
        <div className="text-center">
          <p>© 2024 Dripsender. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
