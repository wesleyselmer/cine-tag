import styled from "styled-components";

const ImgEstilizada = styled.img`
  width: 100vw;
`;

export default function Banner({ tipo }) {
  return (
    <ImgEstilizada
      src={`/imagens/banner-${tipo.toLowerCase()}.png`}
      alt={`Banner da página ${tipo}`}
    />
  );
}
