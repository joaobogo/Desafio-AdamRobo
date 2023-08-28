import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import "./SearchBar.css";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";


interface SearchBarProps {
  handleClick: (query: string) => void;
}

function SearchBar({ handleClick }: SearchBarProps): JSX.Element {
  const [input, setInput] = useState<string>("");


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleClick(input);
    setInput("");
  };

  return (
    <section className="main">
      <div className="text">
        {"MERCADÃO".split("").map((letter) => (
          <div key={letter} className="wrapper">
            <div id={letter} className="letter">
              {letter}
            </div>
            <div className="shadow">{letter}</div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Tudo o que você precisa, em um só lugar!</h2>
        <div className="search">
          <Input
            className="input"
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="O que você busca?"
          />
          <Button
            className="button"
            colorScheme="blue"
            variant="outline"
            type="submit"
          >
            Buscar
          </Button>
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
