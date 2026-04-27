"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Page = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);

            console.log(data);
        }
        fetchProducts()
    }, [])
    
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
      
      <h1 className="text-2xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <div className="relative w-full h-40">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h2 className="mt-3 font-semibold text-sm line-clamp-2">
              {product.title}
            </h2>

            <p className="text-blue-600 font-bold mt-2">
              ${product.price}
            </p>

            <div className='flex  justify-center'>
              <Link href={`/products/${product.id}`}
              className="mt-3 text-sm md:text-base px-4 md:px-14 border-2 hover:border-blue-700 rounded-lg hover:text-blue-700 py-1 border-yellow-600 text-yellow-600">
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