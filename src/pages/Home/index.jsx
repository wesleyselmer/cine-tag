import Titulo from "@/components/Titulo";
import Banner from "/src/components/Banner";
import cards from "@/json/db.json";
import Card from "@/components/Card";
import Cards from "@/components/Cards";


const Home = () => {
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
