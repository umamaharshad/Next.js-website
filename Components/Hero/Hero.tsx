"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[90vh] bg-stone-900 overflow-hidden flex items-center">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80"
        alt="Fashion shopping banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay (subtle for readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Hero Content - aligned left */}
      <div
        className={`relative z-10 text-left max-w-xl px-8 md:px-16 transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Redefine Your Style
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Fresh arrivals every week. Shop fashion, lifestyle, and accessories that match your vibe.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/products"
            className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-medium hover:bg-pink-700 shadow-lg transition"
          >
            Shop Now
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 bg-white text-stone-900 rounded-2xl font-medium hover:bg-gray-200 shadow-lg transition"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}
