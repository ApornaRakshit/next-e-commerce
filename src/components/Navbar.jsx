"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Flash Sale", href: "/sale" },
  ];

  return (
    <nav className="bg-orange-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition ${
                path === link.href
                  ? "text-yellow-600 border-b-2 border-yellow-600 pb-1"
                  : "text-black hover:text-yellow-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Login Buttons */}
          <Link
            href="/login"
            className="bg-yellow-600 text-white px-4 py-1 rounded hover:bg-yellow-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block ${
                path === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="block bg-blue-600 text-white px-3 py-1 rounded text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}