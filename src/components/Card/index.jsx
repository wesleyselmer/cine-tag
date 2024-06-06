import styled from "styled-components";

const SectionEstilizada = styled.section`
  width: 282px;
  height: 541px; 
`

export default function Card({ card, favorito = false }) {
  return (
    <SectionEstilizada>
      <img src={card.capa} alt={card.titulo} />
      <div className="texto">
        <h2>{card.titulo}</h2>
        {favorito ? (
          <img src="/imagens/favorite.png" alt="" />
        ) : (
          <img src="/imagens/favorite_outline.png" alt="" />
        )}
      </div>
    </SectionEstilizada>
  );
}
