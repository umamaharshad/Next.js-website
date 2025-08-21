"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("/api/Shoes");
      const data = await res.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans px-6 py-12 max-w-7xl mx-auto">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 tracking-tight text-stone-900">
          Explore Our Shoes
        </h1>
        <p className="text-lg text-stone-600">
          Step into comfort, style, and durability with our curated shoe collection.
        </p>
      </section>

      {/* Product Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-72 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-stone-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-stone-900">{product.price}</span>
                <button className="bg-stone-900 text-white px-4 py-2 rounded hover:bg-stone-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
