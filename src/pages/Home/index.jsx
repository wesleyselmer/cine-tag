import Titulo from "@/components/Titulo";
import Banner from "/src/components/Banner";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/wesleyselmer/cine-tag-api/videos"
    )
      .then(resposta => resposta.json())
      .then(dados => setCards(dados))
  }, []);

  return (
    <>
      <Banner tipo="home" />
      <Titulo titulo="Um lugar para guardar seus vídeos e filmes!" />
      <Cards>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </Cards>
    </>
  );
};

export default Home;
