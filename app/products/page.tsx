"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../context/CartContext";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image?: string | null;
}

// Map product IDs to fallback image URLs
const productImages: Record<number, string> = {
  1: "https://redtape.com/cdn/shop/files/RSO4034_1_40cd841c-11dc-4c78-ab85-bfad034e31fe.jpg",
  2: "https://redtape.com/cdn/shop/files/RSO3884_8_a015c9b3-5cbc-4754-b93c-d9bc22bd9e91.jpg",
  3: "https://www.redshoes.com.bd/wp-content/uploads/2024/09/1000128166-300x400.jpg",
  // Add more fallback images if needed
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/Shoes", { cache: "no-store" }); // Capital S
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      }
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative w-full h-72">
                <Image
                  src={product.image || productImages[product.id] || "/images/no-image.png"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-stone-600 text-sm mb-3">{product.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-stone-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <p className="text-sm text-stone-500 mt-2">
                  Stock: {product.stock > 0 ? product.stock : "Out of stock"}
                </p>

                {/* Add to Cart Button */}
                <button
                  disabled={product.stock <= 0}
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image || productImages[product.id] || "/images/no-image.png",
                    })
                  }
                  className={`w-full mt-4 px-4 py-2 rounded font-medium transition ${
                    product.stock > 0
                      ? "bg-stone-900 text-white hover:bg-stone-700"
                      : "bg-gray-400 text-gray-100 cursor-not-allowed"
                  }`}
                >
                  {product.stock > 0 ? "Add to Cart" : "Sold Out"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-stone-500 col-span-full">
            No products available.
          </p>
        )}
      </section>

      {/* Go to Cart Button */}
      <section className="flex justify-center mt-8">
        <Link
          href="/cart"
          className="bg-stone-900 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-stone-700 transition"
        >
          Go to Cart
        </Link>
      </section>
    </main>
  );
}
