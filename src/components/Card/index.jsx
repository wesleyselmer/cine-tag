import { useFavoritoContext } from "@/context/FavoritosContext";
import styled from "styled-components";
import iconeFavorito from "/imagens/favorite.png";
import iconeDesfavorito from "/imagens/favorite_outline.png";
import LinkEstilizado from "@/components/LinkEstilizado";

const SectionEstilizada = styled.section`
  width: 282px;
  height: 541px; 
`

const Card = ({ card }) => {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === card.id);
  const icone = ehFavorito ? iconeFavorito : iconeDesfavorito
  return (
    <SectionEstilizada>
      <LinkEstilizado to={`/${card.id}`}>
        <img src={card.capa} alt={card.titulo} />
        <h2>{card.titulo}</h2>
      </LinkEstilizado>
      <img src={icone} alt="" onClick={() => adicionarFavorito(card)} />
    </SectionEstilizada >
  );
}

export default Card;