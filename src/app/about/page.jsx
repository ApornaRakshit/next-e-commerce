import Link from "next/link";
import React from "react";



const Page = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About New Arrivals
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Your trusted online marketplace for smart, fast, and reliable shopping.
        </p>
      </div>

      {/* About Content */}
      <div className="flex items-center">

        {/* Text */}
        <div>
          <h2 className="text-center text-2xl font-semibold text-gray-800">
            Who We Are
          </h2>

          <p className="text-center text-gray-600 mt-4 leading-relaxed">
            E-commerce is a modern e-commerce platform designed to simplify your
            shopping experience. We bring together a wide range of products,
            trusted sellers, and smart features to help you shop efficiently and
            confidently.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            From daily essentials to unique international items, our platform
            ensures quality, convenience, and affordability for every customer.
          </p>
        </div>

      </div>

      {/* Mission & Vision */}
      <div className="mt-16 grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Our Mission
          </h3>
          <p className="text-gray-600 mt-3">
            To provide a seamless and enjoyable shopping experience by offering
            high-quality products, innovative features, and excellent customer
            support.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Our Vision
          </h3>
          <p className="text-gray-600 mt-3">
            To become a leading global marketplace where customers and sellers
            connect easily and grow together in a trusted digital ecosystem.
          </p>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="bg-gray-100 p-4 rounded">
            
            <p className="mt-2 text-sm">Gift Cards</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            
            <p className="mt-2 text-sm">Membership</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            🏪 <p className="mt-2 text-sm">Seller Platform</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            🌍 <p className="mt-2 text-sm">Global Shopping</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            ❤️ <p className="mt-2 text-sm">Wishlist</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Start Your Shopping Journey Today
        </h2>

        <p className="text-gray-500 mt-2">
          Discover thousands of products and amazing deals now.
        </p>

        <Link
          href="/products"
          className="inline-block mt-4 bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
        >
          Explore Products
        </Link>
      </div>

    </div>
  );
};

export default Page;