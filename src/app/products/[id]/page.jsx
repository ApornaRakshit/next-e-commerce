"use client"

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from "next/image";

const Page = () => {

    const [product, setProduct] = useState([])
    
    const params = useParams()
    const productId = params?.id
    console.log(productId);

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
            const data = await res.json()
            setProduct(data);
            console.log(data);
        }
        fetchProduct()
    }, [productId])

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
      
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div>
          
          {/* Category */}
          <p className="text-sm text-gray-500 uppercase">
            {product.category}
          </p>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mt-2 gap-2">
            <span className="text-yellow-500">
              ⭐ {product.rating?.rate}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl text-yellow-600 font-bold mt-4">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700">
              Add to Cart
            </button>

            <button className="border px-6 py-2 rounded hover:bg-gray-100">
              Add to Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
    );
};

export default Page;