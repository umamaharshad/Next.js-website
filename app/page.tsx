"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans">
      {/* Brand Intro */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-red-600">
          SoleEdge
        </h1>
        <p className="text-lg text-stone-700">
          Step into style with sneakers and shoes that define your lifestyle. 
          Designed for comfort, made for impact.
        </p>
      </section>

      {/* Shoe Categories */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Sneakers", "Casual Shoes", "Formal Shoes", "Sports"].map((cat, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl shadow p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium">{cat}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Shoes */}
      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Featured Shoes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["/shoes1.png", "/shoes2.png", "/shoes3.png"].map((src, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={src}
                alt={`Shoe ${index + 1}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-medium">Signature Sneaker {index + 1}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="w-full h-72 bg-[url('/shoes-banner.jpg')] bg-cover bg-center my-16 flex items-center justify-center">
        <div className="bg-black bg-opacity-70 px-8 py-4 rounded">
          <h2 className="text-xl font-semibold text-white">
            Walk Bold. Live Stylish.
          </h2>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">What Our Customers Say</h2>
        <p className="italic text-stone-700">
          “The most comfortable sneakers I’ve ever owned. Sleek, modern, and
          perfect for every occasion.”
        </p>
      </section>

      {/* Newsletter CTA */}
      <section className="px-6 py-12 text-center bg-stone-200">
        <h2 className="text-xl font-semibold mb-4">Join the Sneaker Club</h2>
        <p className="mb-6 text-stone-700">
          Be the first to know about new drops and exclusive releases.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded border border-stone-400 w-full sm:w-64"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            Subscribe
          </button>
        </form>
      </section>
    </main>
  );
}
