"use client"
import { useState } from "react";
import Navbar from "@/app/components/Navbar";

const product = {
  id: 1,
  image:
    "https://thefishhouse.co.in/cdn/shop/files/EmperorFish01_1f636bc8-85a3-4aca-bee1-1594a5702fa7.jpg?v=1734673209&width=713",
  title: "Emperor Fish",
  price: 112.5, // Price as a number
};

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover rounded-md shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-lg font-semibold mt-2">
              Rs. {product.price.toFixed(2)} / 250g
            </p>
            <div className="mt-4 flex items-center">
              <button
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
              >
                -
              </button>
              <span className="mx-4">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded"
              >
                +
              </button>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
