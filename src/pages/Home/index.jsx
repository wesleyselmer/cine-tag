import Titulo from "../../components/Titulo";
import Banner from "/src/components/Banner";
import styled from "styled-components";
import cards from "../../../db.json";
import Card from "../../components/Card";
import Rodape from "../../components/Rodape";

const HeaderEstilizado = styled.header`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  padding: 0 160px;
`;

const DivEstilizado = styled.div`
  width: 1162px;
`;

const UlEstilizado = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 50px;
`;

const LiEstilizado = styled.li`
  color: #f0f0f0;
  font-weight: 400;
  font-style: 18px;
  text-align: center;
  list-style-type: none;
  width: auto;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  margin-bottom: 50px;
`;

const Home = () => {
  return (
    <>
      <HeaderEstilizado>
        <img src="/imagens/logo.png"></img>
        <DivEstilizado>
          <nav>
            <UlEstilizado>
              <LiEstilizado>Home</LiEstilizado>
              <LiEstilizado>Favoritos</LiEstilizado>
            </UlEstilizado>
          </nav>
        </DivEstilizado>
      </HeaderEstilizado>
      <Banner tipo="Home" />
      <Titulo titulo="Um lugar para guardar seus vídeos e filmes!" />
      <Cards>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </Cards>
      <Rodape />
    </>
  );
};

export default Home;
