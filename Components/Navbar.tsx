"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-black text-white px-8 py-4 shadow-md w-full">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Left: Shop Name */}
        <div className="text-lg font-semibold tracking-wide">
          <Link href="/">Sole Edge</Link>
        </div>

        {/* Center: Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`${
                  pathname === link.path ? "font-bold underline" : ""
                } hover:opacity-80 transition`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Auth Buttons */}
        <div>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="bg-white text-stone-800 px-4 py-2 rounded hover:bg-stone-200 transition font-medium">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
