import Card from "./Card";

export default function ProductList({ products }: { products: { id: number; title: string; price: number; image: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
