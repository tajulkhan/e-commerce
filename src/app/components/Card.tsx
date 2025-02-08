import Link from "next/link";

export default function Card({ product }: { product: any }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2 text-black">{product.title}</h2>
      <p className="text-gray-600">{product.price} / 250g</p>
      <Link href={`/product/${product.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded">
        View Details
      </Link>
    </div>
  );
}
