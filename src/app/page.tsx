import Navbar from "./components/Navbar";
import Card from "./components/Card";

const products = [
  { id: 1, image: "https://thefishhouse.co.in/cdn/shop/files/EmperorFish01_1f636bc8-85a3-4aca-bee1-1594a5702fa7.jpg?v=1734673209&width=713", title: "Emperor Fish", price: 112.5 },
  { id: 2, image: "https://thefishhouse.co.in/cdn/shop/files/WhitePomfret01.jpg?v=1733477262&width=823", title: "White Pomfret", price: 337.5 },
  { id: 3, image: "https://thefishhouse.co.in/cdn/shop/files/RedSnapper01_436f91c2-3668-4344-bf45-d4961dfeb4e0.jpg?v=1733476823&width=713", title: "Red Snapper", price: 337.5 },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl md:mx-auto sm:mx-5">
        <h1 className="text-2xl font-bold text-center my-6">Fresh Fish Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
