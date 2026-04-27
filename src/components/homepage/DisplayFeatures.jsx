import React from 'react';
import {Gift, Users, Store, Globe, Heart} from "lucide-react";
import Link from 'next/link';

const features = [
  {
    title: "Gift Cards",
    description: "Send love with instant digital gift cards.",
    icon: Gift,
    link: "/gift-card",
  },
  {
    title: "Membership",
    description: "Get exclusive deals & premium benefits.",
    icon: Users,
    link: "/membership",
  },
  {
    title: "Become a Seller",
    description: "Start selling and grow your business.",
    icon: Store,
    link: "/seller",
  },
  {
    title: "International Shopping",
    description: "Shop products from around the world.",
    icon: Globe,
    link: "/international",
  },
  {
    title: "Smart Wishlist",
    description: "Save and track your favorite items.",
    icon: Heart,
    link: "/wishlist",
  },
];

const DisplayFeatures = () => {
    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our Features
        </h2>
        <p className="text-gray-500 mt-2">
          Explore powerful features designed for better shopping experience
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Link
              key={index}
              href={feature.link}
              className="bg-white rounded-xl shadow p-5 text-center hover:shadow-lg transition group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <Icon className="w-10 h-10 text-amber-700 group-hover:scale-110 transition" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 mt-1">
                {feature.description}
              </p>
            </Link>
          );
        })}
      </div>
      <div className='flex justify-center py-5'>
        <Link href="/features" className="text-amber-600 font-semibold">Explore All Features...</Link>
      </div>
    </section>
    );
};

export default DisplayFeatures;