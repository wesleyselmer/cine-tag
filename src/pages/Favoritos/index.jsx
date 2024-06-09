import Titulo from "../../components/Titulo";
import Banner from "/src/components/Banner";
import cards from "../../../db.json";
import Card from "../../components/Card";
import Cards from "../../components/Cards";


const Favoritos = () => {
  return (
    <>
      <Banner tipo="favoritos" />
      <Titulo titulo="Meus Favoritos" />
      <Cards>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </Cards>
    </>
  );
};

export default Favoritos;
