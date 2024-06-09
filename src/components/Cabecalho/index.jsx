import styled from "styled-components";
import LinkEstilizado from "@/components/LinkEstilizado";

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

const Cabecalho = () => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png"></img>
      <DivEstilizado>
        <nav>
          <UlEstilizado>
            <li>
              <LinkEstilizado to={"/"} $cabecalho={true}>Home</LinkEstilizado>
            </li>
            <li>
              <LinkEstilizado to={"/favoritos"} $cabecalho={true}>Favoritos</LinkEstilizado>
            </li>
          </UlEstilizado>
        </nav>
      </DivEstilizado>
    </HeaderEstilizado>
  )
}

export default Cabecalho