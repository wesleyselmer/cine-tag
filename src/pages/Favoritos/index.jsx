import Titulo from "@/components/Titulo";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Cards from "@/components/Cards";
import { useFavoritoContext } from "@/context/FavoritosContext";


const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner tipo="favoritos" />
      <Titulo titulo="Meus Favoritos" />
      <Cards>
        {favorito.map((fav) => {
          return <Card key={fav.id} card={fav} />;
        })}
      </Cards>
    </>
  );
};

export default Favoritos;
