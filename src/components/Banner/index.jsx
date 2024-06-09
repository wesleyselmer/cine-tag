import styled from "styled-components";

const ImgEstilizada = styled.img`
  width: 100vw;
`;

const Banner = ({ tipo }) => {
  return (
    <ImgEstilizada
      src={`/imagens/banner-${tipo}.png`}
      alt={`Banner da página ${tipo}`}
    />
  );
}

export default Banner