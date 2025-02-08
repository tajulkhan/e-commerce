// src/app/page.tsx (Product List Page)

import Link from 'next/link';
import Navbar from './components/Navbar';

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

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Fresh Fish Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">Rs. {product.price.toFixed(2)} / 250g</p>
            <Link
              href={`/product/${product.id}`} // Dynamic route for product details
              className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
