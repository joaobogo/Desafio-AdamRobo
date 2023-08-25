import React, { useState, ChangeEvent, FormEvent } from "react";
import "./SearchBar.css";




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
        <div className="wrapper">
          <div id="M" className="letter">
            M
          </div>
          <div className="shadow">M</div>
        </div>
        <div className="wrapper">
          <div id="E" className="letter">
            E
          </div>
          <div className="shadow">E</div>
        </div>
        <div className="wrapper">
          <div id="R" className="letter">
            R
          </div>
          <div className="shadow">R</div>
        </div>
        <div className="wrapper">
          <div id="C" className="letter">
            C
          </div>
          <div className="shadow">C</div>
        </div>
        <div className="wrapper">
          <div id="A" className="letter">
            A
          </div>
          <div className="shadow">A</div>
        </div>
        <div className="wrapper">
          <div id="D" className="letter">
            D
          </div>
          <div className="shadow">D</div>
        </div>
        <div className="wrapper">
          <div id="Ã" className="letter">
            Ã
          </div>
          <div className="shadow">Ã</div>
        </div>
        <div className="wrapper">
          <div id="O" className="letter">
            O
          </div>
          <div className="shadow">O</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
      <h2>Tudo o que você precisa, em um só lugar!</h2>
        <div className="search">
        <input type="text" value={input} onChange={handleChange} placeholder="O que você busca?"/>
        <button type="submit">Buscar</button>
        </div>
      </form>
    </section>
  );
}

export default SearchBar;
