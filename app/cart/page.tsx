"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-white text-stone-900 px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-stone-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image || "/placeholder-shoe.jpg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-stone-600">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total & Checkout */}
          <div className="mt-8 flex justify-between items-center">
            <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
            <div className="space-x-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Clear Cart
              </button>

              {/* Checkout Link */}
              <Link
                href="/checkout"
                className="px-4 py-2 bg-stone-900 text-white rounded hover:bg-stone-700"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
