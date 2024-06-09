import { Link } from "react-router-dom";
import styled from "styled-components";

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

const LinkEstilizado = styled(Link)`
  &&& {color: #f0f0f0;
  font-weight: 400;
  font-style: 18px;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
  width: auto;

  &:focus, &:hover, &:visited, &:link, &:active {
  text-decoration: none;
  list-style-type: none;
  }}`

export default function Cabecalho() {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png"></img>
      <DivEstilizado>
        <nav>
          <UlEstilizado>
            <li>
              <LinkEstilizado to={"/"}>Home</LinkEstilizado>
            </li>
            <li>
              <LinkEstilizado to={"/favoritos"}>Favoritos</LinkEstilizado>
            </li>
          </UlEstilizado>
        </nav>
      </DivEstilizado>
    </HeaderEstilizado>
  )
}