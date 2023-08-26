import React from "react";
import "./Card.css";


interface CardProps {
  item: {
    id: string;
    title: string;
    available_quantity: number;
    thumbnail: string;
    sold_quantity: number;
    price: number;
  };
}

function Card({ item }: CardProps): JSX.Element {
  const { id, title, available_quantity, thumbnail, price } = item;

  const editTitle = (title: string): string => {
    if (title.length > 40) {
      return title.slice(0, 30) + "...";
    }
    return title;
  };

  console.log(item)
  return (
    <div className="card">
      <h3>{editTitle(title)}</h3>
      <img alt={title} src={thumbnail} />
      <p>
        Quantidade disponível: <span>{available_quantity}</span>
      </p>
      <p>
       <span>R${price}</span>
      </p>
      
    </div>
  );
}

export default Card;