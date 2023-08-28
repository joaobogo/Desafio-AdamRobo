import React, { useState, useContext } from "react";
import "./Card.css";
import { Button, ButtonGroup } from "@chakra-ui/react";


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
  const [clicked, setClicked] = useState<boolean>(false);
  

  const editTitle = (title: string): string => {
    if (title.length > 40) {
      return title.slice(0, 25) + "...";
    }
    return title;
  };

  const formatPrice = (price: number): string => {
    const cents = String(Math.round(price * 100));
    const integer = cents.slice(0, -2);
    const decimal = cents.slice(-2);
    return `R$${integer},${decimal}`;
  };

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="card">
      <img alt={title} src={thumbnail} />
      <h3>{editTitle(title)}</h3>
      <p>
        Quantidade disponível: <span>{available_quantity}</span>
      </p>
      <p>
        <span>{formatPrice(price)}</span>
      </p>
      <Button fontSize="14px" colorScheme="blue" onClick={handleClick}>
        {clicked ? "Item no Carrinho" : "Adicionar ao Carrinho"}
      </Button>
    </div>
  );
}

export default Card;