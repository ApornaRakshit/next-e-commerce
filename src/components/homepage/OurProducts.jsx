"use client";

import Image from "next/image";
import Link from "next/link";
import React, {
  useEffect,
  useState
} from "react";

const OurProducts = () => {

  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  useEffect(() => {

    async function fetchProducts() {

      const res = await fetch(
        "https://fakestoreapi.com/products"
      );

      const data = await res.json();

      setProducts(data);
    }

    fetchProducts();

  }, []);

  // Unique Categories
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  // Filter Products
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (

    <div className="mx-auto px-6 py-16">

      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl font-extrabold
        mb-10 text-center text-slate-900 tracking-tight"
      >
        Our Products
      </h1>

      {/* Categories */}
      <div
        className="flex flex-wrap justify-center
        gap-4 mb-10"
      >

        {categories.map((category, index) => (

          <button
            key={index}
            onClick={() =>
              setSelectedCategory(category)
            }
            className={`px-5 py-2 rounded-full
            font-medium transition capitalize

            ${
              selectedCategory === category
                ? "bg-yellow-600 text-white"
                : "bg-orange-100 text-slate-700 hover:bg-yellow-500 hover:text-white"
            }`}
          >
            {category}
          </button>

        ))}

      </div>

      {/* Products Grid */}
      <div
        className="max-w-7xl mx-auto
        grid grid-cols-1 md:grid-cols-3
        lg:grid-cols-4 gap-6"
      >

        {filteredProducts
          .slice(0, 8)
          .map((product) => (

            <div
              key={product.id}
              className="group bg-orange-50
              border border-orange-100
              rounded-2xl p-5 shadow-sm

              hover:shadow-xl
              transition-all duration-300
              transform hover:-translate-y-1"
            >

              {/* Product Image */}
              <div
                className="relative w-full h-48 mb-4"
              >

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain
                  transition-transform duration-500
                  group-hover:scale-105"
                />

              </div>

              {/* Title */}
              <h2
                className="font-medium text-slate-800
                text-sm line-clamp-2 h-10"
              >
                {product.title}
              </h2>

              {/* Price */}
              <p
                className="text-yellow-600
                font-bold text-lg mt-3"
              >
                ${product.price}
              </p>

              {/* Button */}
              <div
                className="flex justify-center mt-4"
              >

                <Link
                  href={`/products/${product.id}`}
                  className="w-full text-center
                  text-sm font-semibold

                  border-2 border-slate-900
                  rounded-xl text-slate-900
                  py-2.5

                  transition-all duration-300
                  hover:bg-slate-900 hover:text-white"
                >
                  View Details
                </Link>

              </div>

            </div>

          ))}

      </div>

      {/* Show More */}
      <div className="flex justify-center py-10">

        <Link
          href="/products"
          className="text-yellow-600 font-bold
          hover:text-yellow-800 transition-colors
          border-b-2 border-yellow-600 pb-1"
        >
          Show More
        </Link>

      </div>

    </div>
  );
};

export default OurProducts;