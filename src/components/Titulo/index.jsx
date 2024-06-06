import styled from "styled-components";

const H1Estilizado = styled.h1`
  font-size: 32px;
  font-family: "Montserrat SemiBold";
  color: #000000;
  text-align: center;
`;

export default function Titulo({ titulo }) {
  return <H1Estilizado>{titulo}</H1Estilizado>;
}
