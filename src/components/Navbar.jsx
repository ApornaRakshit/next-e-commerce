"use client";

import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

import { usePathname } from "next/navigation";

import {
  useEffect,
  useState
} from "react";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { auth } from "../../firebase";

export default function Navbar() {

  const path = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const [user, setUser] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/products" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Flash Sale", href: "/sale" },
  ];

  // Detect Logged-in User
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return () => unsubscribe();

  }, []);

  // Logout
  const handleLogout = async () => {

    try {

      await signOut(auth);

    } catch (error) {

      console.log(error);

    }
  };

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
              className={`font-medium transition ${path === link.href
                ? "text-yellow-600 border-b-2 border-yellow-600 pb-1"
                : "text-black hover:text-yellow-500"
                }`}
            >
              {link.name}
            </Link>

          ))}

          {/* User or Login */}
          {
            user ? (

              <div className="relative group">

                {/* User Button */}
                <button
                  className="w-11 h-11 rounded-full
  bg-yellow-600 text-white
  flex items-center justify-center
  hover:bg-yellow-700 transition"
                >

                  <FaUserCircle className="text-3xl" />

                </button>

                {/* Dropdown */}
                <div
                  className="absolute right-0 mt-2 w-56 bg-white
                  shadow-xl rounded-xl

                  opacity-0 invisible
                  group-hover:opacity-100
                  group-hover:visible

                  transition-all duration-300 z-50"
                >

                  <div className="p-4 border-b">

                    <p className="font-semibold text-gray-800">
                      {user.displayName}
                    </p>

                    <p className="text-sm text-gray-500 break-all">
                      {user.email}
                    </p>

                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3
                    hover:bg-gray-100 text-red-500"
                  >
                    Logout
                  </button>

                </div>

              </div>

            ) : (

              <Link
                href="/login"
                className="bg-yellow-600 text-white
                px-4 py-2 rounded hover:bg-yellow-700"
              >
                Login
              </Link>

            )
          }

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
      {
        menuOpen && (

          <div className="md:hidden px-4 pb-4 space-y-3">

            {navLinks.map((link) => (

              <Link
                key={link.href}
                href={link.href}
                className={`block ${path === link.href
                  ? "text-yellow-600 font-semibold"
                  : "text-gray-600"
                  }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>

            ))}

            {/* Mobile User/Login */}
            {
              user ? (

                <div className="space-y-2">

                  <div className="bg-white p-3 rounded-lg shadow">

                    <p className="font-semibold">
                      {user.displayName}
                    </p>

                    <p className="text-sm text-gray-500 break-all">
                      {user.email}
                    </p>

                  </div>

                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500 text-white
                    px-3 py-2 rounded"
                  >
                    Logout
                  </button>

                </div>

              ) : (

                <Link
                  href="/login"
                  className="block bg-yellow-600 text-white
                  px-3 py-2 rounded text-center"
                >
                  Login
                </Link>

              )
            }

          </div>

        )
      }

    </nav>
  );
}