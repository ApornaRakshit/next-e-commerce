import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative bg-[url('/banner-bg.png')] bg-cover bg-center overflow-hidden rounded-3xl">

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 items-center">

        {/* LEFT */}
        <div>
          <p className="text-3xl p-3 italic text-yellow-600">
            New Arrivals
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 ">
            Discover <br /> Your Style
          </h1>

          <p className=" text-gray-600 p-3  max-w-md leading-relaxed">
            Premium products. Best prices.<br />
            Exceptional experience.
          </p>

          <div className="p-3 flex gap-4">
            <Link
              href="/products"
              className="bg-black text-white px-6 py-3 rounded-xl shadow hover:scale-105 transition"
            >
              Shop Now →
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[500px]">

          {/* Glass circle */}
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/40 backdrop-blur-xl rounded-full"></div>

          {/* Product */}
          <Image
            src="/product.png"
            alt="Product"
            width={600}
            height={500}
            className="absolute bottom-0 right-0 z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.25)]"
          />

        </div>

      </div>
    </section>
  );
}