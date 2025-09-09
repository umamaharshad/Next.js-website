import "./globals.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero/Hero";
import { CartProvider } from "./context/CartContext";
import Footer from "@/Components/Footer/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js Website",
  description: "A simple Next.js website with Home, About, and Contact pages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <Hero/>
        <CartProvider>
        <main className="p-6">{children}</main>
        </CartProvider>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
