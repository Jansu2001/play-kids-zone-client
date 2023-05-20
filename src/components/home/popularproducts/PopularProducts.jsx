import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";



const PopularProducts = () => {
  const [proCards, setProCards] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProCards(data));
  }, []);

  console.log(proCards);

  return (
    <div className="pt-4">
      <h1 className="text-4xl font-bold w-1/3 bg bg-indigo-400 p-3 mx-auto">Popular Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-3">
        {
            proCards.map(card=><ProductCard
            key={card.id}
            card={card}
            ></ProductCard>)
        }
      </div>
    </div>
  );
};

export default PopularProducts;
