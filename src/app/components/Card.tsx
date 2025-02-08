import Link from "next/link";

// Change the price type to number
interface Product {
  id: number;
  image: string;
  title: string;
  price: number; // Updated to number
}

export default function Card({ product }: { product: Product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">Rs. {product.price.toFixed(2)} / 250g</p>
      <Link
        href={`/product/${product.id}`}
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
