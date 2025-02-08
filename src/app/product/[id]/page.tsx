// src/app/product/[id]/page.tsx
"use client"
import { notFound } from 'next/navigation'; // Correct import for notFound
import { useParams } from 'next/navigation'; // Correct import for dynamic params

// Static product data
const products = [
  {
    id: 1,
    image: 'https://thefishhouse.co.in/cdn/shop/files/EmperorFish01_1f636bc8-85a3-4aca-bee1-1594a5702fa7.jpg?v=1734673209&width=713',
    title: 'Emperor Fish',
    price: 112.5,
  },
  {
    id: 2,
    image: 'https://thefishhouse.co.in/cdn/shop/files/WhitePomfret01.jpg?v=1733477262&width=823',
    title: 'White Pomfret',
    price: 337.5,
  },
  {
    id: 3,
    image: 'https://thefishhouse.co.in/cdn/shop/files/RedSnapper01_436f91c2-3668-4344-bf45-d4961dfeb4e0.jpg?v=1733476823&width=713',
    title: 'Red Snapper',
    price: 337.5,
  },
];

export default function ProductDetail() {
  const { id } = useParams(); // Get dynamic `id` from URL

  // Ensure `id` is a valid string and convert to a number
  const productId = Array.isArray(id) ? id[0] : id; // In case of multiple parameters

  // If `id` is undefined or not a valid number, return a 404
  if (!productId || isNaN(Number(productId))) {
    return notFound();
  }

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(productId, 10));

  // If product is not found, show 404
  if (!product) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-80 object-cover rounded-md shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg font-semibold mt-2">Rs. {product.price.toFixed(2)} / 250g</p>
        </div>
      </div>
    </div>
  );
}
