import Titulo from "@/components/Titulo";
import Banner from "@/components/Banner";
import { useParams } from "react-router-dom";
import cards from "@/json/db.json";
import Cards from "@/components/Cards";
import PaginaErro from "@/pages/PaginaErro";

const Player = () => {
  const params = useParams();
  const card = cards.find((card) => {
    return card.id === Number(params.id);
  });

  if (!card) {
    return <PaginaErro />
  } else {
    return (
      <>
        <Banner tipo="player" />
        <Titulo titulo="Player" />
        {card ?
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
            >
            </iframe>
          </Cards>
          : ''}
      </>
    );
  };
}

export default Player;