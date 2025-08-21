"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">ShopEase</h2>
          <p className="mt-3 text-sm text-gray-300">
            Your trusted online store for quality products at unbeatable prices.  
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
            <li><Link href="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link href="/products" className="hover:text-red-500">Products</Link></li>
            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-red-500">FAQ</Link></li>
            <li><Link href="/returns" className="hover:text-red-500">Returns</Link></li>
            <li><Link href="/shipping" className="hover:text-red-500">Shipping Info</Link></li>
            <li><Link href="/privacy" className="hover:text-red-500">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-3">
            Subscribe to get special offers, free giveaways, and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md text-black"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
