
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#f6f3ef] text-gray-700 mt-20 border-t border-[#e5ded4]">

            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                <Link href="/">
        <Image
          src="/logo2.png"
          alt="Logo"
          width={120}
          height={40}
          className="object-contain"
        />
      </Link>
                    <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                        Discover premium products crafted for comfort, style, and performance.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-[#2c2c2c] font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-[#c47a2c] transition">Home</Link></li>
                        <li><Link href="/products" className="hover:text-[#c47a2c] transition">Products</Link></li>
                        <li><Link href="/features" className="hover:text-[#c47a2c] transition">Features</Link></li>
                        <li><Link href="/about" className="hover:text-[#c47a2c] transition">About</Link></li>
                    </ul>
                </div>

                {/* Features */}
                <div>
                    <h3 className="text-[#2c2c2c] font-semibold mb-4">Features</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/gift-card" className="hover:text-[#c47a2c] transition">Gift Cards</Link></li>
                        <li><Link href="/membership" className="hover:text-[#c47a2c] transition">Membership</Link></li>
                        <li><Link href="/seller" className="hover:text-[#c47a2c] transition">Become a Seller</Link></li>
                        <li><Link href="/wishlist" className="hover:text-[#c47a2c] transition">Wishlist</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-[#2c2c2c] font-semibold mb-4">Contact</h3>
                    <p className="text-sm">support@newarrivals.com</p>
                    <p className="text-sm mt-1">+880 1234-567890</p>

                    {/* Social Icons */}
                    <div className="flex gap-3 mt-5">
                        {["FB", "IG", "TW"].map((item, i) => (
                            <span
                                key={i}
                                className="w-9 h-9 flex items-center justify-center 
                           border border-[#d6c3a7] rounded-full 
                           hover:bg-[#c47a2c] hover:text-white 
                           transition cursor-pointer text-sm"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center py-5 text-sm text-gray-500 border-t border-[#e5ded4]">
                © {new Date().getFullYear()} NEW ARRIVALS. All rights reserved.
            </div>
        </footer>
    );
}