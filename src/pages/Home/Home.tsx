import React, { useState } from "react";
import { IProduct, fetchProducts } from "../../functions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./Home.css";



function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  

  const handleClick = async (input: string) => {
    const results = await fetchProducts(input);
    setProducts(results);
  };

  return (
    <div className="home">
      <SearchBar handleClick={handleClick} />
      <div className="cards">
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;