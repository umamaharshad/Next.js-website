import "./globals.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero/Hero";
import Footer from "@/Components/Footer/Footer";
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
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <Hero/>
        <main className="p-6">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
