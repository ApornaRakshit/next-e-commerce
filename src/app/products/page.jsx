"use client";

import Image from "next/image";
import Link from "next/link";

import React, {
  useEffect,
  useState
} from "react";

const Page = () => {

  const [products, setProducts] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const [searchTerm, setSearchTerm] =
    useState("");

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

  // Categories
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  // Filter Products
  const filteredProducts = products.filter((product) => {

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;

  });

  return (

    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* Heading */}
      <h1
        className="text-3xl md:text-4xl
        font-bold text-center
        mb-8 text-slate-800"
      >
        All Products
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-8">

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }

          className="w-full md:w-[400px]

          px-5 py-3 rounded-full

          border border-gray-300

          focus:outline-none
          focus:ring-2
          focus:ring-yellow-500"
        />

      </div>

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
            capitalize font-medium transition

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
        className="grid grid-cols-1
        md:grid-cols-3 lg:grid-cols-4
        gap-6"
      >

        {filteredProducts.map((product) => (

          <div
            key={product.id}

            className="group bg-white
            shadow rounded-2xl p-4

            hover:shadow-xl
            transition-all duration-300
            hover:-translate-y-1"
          >

            {/* Image */}
            <div className="relative w-full h-44">

              <Image
                src={product.image}
                alt={product.title}
                fill

                sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw
                "

                className="object-contain
                transition-transform duration-500
                group-hover:scale-105"
              />

            </div>

            {/* Title */}
            <h2
              className="mt-4 font-semibold
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
            <div className="flex justify-center">

              <Link
                href={`/products/${product.id}`}

                className="mt-4 w-full text-center

                text-sm md:text-base

                border-2 border-yellow-600
                text-yellow-600

                rounded-xl py-2

                hover:border-slate-900
                hover:bg-slate-900
                hover:text-white

                transition-all duration-300"
              >
                View Details
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Page;