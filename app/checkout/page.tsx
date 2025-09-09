"use client";

import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    payment: "cod", // default cash on delivery
  });
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill all fields before proceeding.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setLoading(true);

    try {
      // Replace this with actual userId from auth/session
      const userId = 1;

      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          name: formData.name,
          email: formData.email,
          address: formData.address,
          payment: formData.payment,
          items: cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to place order");

      alert(`✅ Order placed successfully! Order ID: ${data.order.id}`);
      clearCart();
      setFormData({ name: "", email: "", address: "", payment: "cod" });
    } catch (error: any) {
      alert("❌ " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-stone-900 font-sans px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Cart Summary */}
        <section className="md:col-span-2 bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center gap-4 border-b pb-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={item.image || "/images/no-image.png"}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}

          {/* Subtotal */}
          <div className="mt-6 flex justify-between text-lg font-semibold">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </section>

        {/* Checkout Form */}
        <section className="bg-gray-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCheckout();
            }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-4 py-2"
            />
            <textarea
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-4 py-2"
              rows={3}
            />
            <select
              name="payment"
              value={formData.payment}
              onChange={handleInputChange}
              className="w-full border rounded-lg px-4 py-2"
            >
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>

            <button
              type="submit"
              disabled={cart.length === 0 || loading}
              className="w-full bg-stone-900 text-white py-3 rounded-lg font-medium hover:bg-stone-700 transition"
            >
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
