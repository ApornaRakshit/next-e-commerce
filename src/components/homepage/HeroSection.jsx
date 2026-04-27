import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#f6f3ef] rounded-3xl overflow-hidden mt-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center relative">

        {/* LEFT SIDE */}
        <div className="relative h-[400px] md:h-[520px] flex items-center justify-center">

          <div className="relative w-[520px] h-[520px]">
            <Image
              src="/deals.png"
              alt="Cart"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain scale-110"
            />
          </div>

          {/* Small Decorative Dots */}
          <div className="absolute top-10 left-10 grid grid-cols-4 gap-2 opacity-40">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-[#c9b8a5] rounded-full"></div>
            ))}
          </div>

          {/* Small Circle */}
          <div className="absolute left-20 bottom-24 w-6 h-6 border-2 border-[#d6c3a7] rounded-full"></div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-6 md:px-12 py-12 text-center md:text-left">

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#5a2d0c] leading-[1.1] tracking-tight">
            🔥 Today’s <br /> Special Deals
          </h2>

          {/* Small underline */}
          <div className="w-16 h-[3px] bg-[#c47a2c] mx-auto md:mx-0 mt-4 rounded-full"></div>

          <p className="mt-6 text-gray-600 text-sm md:text-lg leading-relaxed">
            Go on Flash Sale! Get the best discounts. <br />
            Limited time offer!
          </p>

          <Link
            href="/sale"
            className="inline-block mt-8 bg-gradient-to-r from-[#c96b1d] to-[#a24a05] 
                       text-white px-8 py-3 rounded-full font-semibold text-lg
                       shadow-lg hover:scale-105 transition"
          >
            Shop Deals
          </Link>

        </div>

      </div>
    </section>
  );
}