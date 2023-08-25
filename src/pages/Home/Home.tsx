import React, { useState } from "react";
import { fetchProducts } from "../../functions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);

  const handleClick = async (input: string) => {
    const results = await fetchProducts(input);
    setProducts(results);
  };

  return (
    <div className="home">
      <SearchBar handleClick={handleClick} />
      <div className='cards'>
      {products.map((item) => (
        <Card item={item} />
      ))}
      </div>
    </div>
  );
}

export default Home;
