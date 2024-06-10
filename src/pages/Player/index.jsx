import { useParams } from "react-router-dom";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cards from "@/components/Cards";
import PaginaErro from "@/pages/PaginaErro";
import { useEffect, useState } from "react";

const Player = () => {
  const [card, setCard] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/wesleyselmer/cine-tag-api/videos?id=${params.id}`
    )
      .then(resposta => resposta.json())
      .then(dados => setCard(...dados));
  }, []);

  if (!card) {
    return <PaginaErro />;
  } else {
    return (
      <>
        <Banner tipo="player" />
        <Titulo titulo="Player" />
        {card ? (
          <Cards>
            <iframe
              width="560"
              height="315"
              src={card.link}
              title={card.titulo}
              allow="
              accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture; 
              web-share
            "
            ></iframe>
          </Cards>
        ) : (
          ""
        )}
      </>
    );
  }
};

export default Player;
