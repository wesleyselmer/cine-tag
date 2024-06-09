import styled from "styled-components";

const CardsEstilizada = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  margin-bottom: 50px;
`;

const Cards = ({ children }) => {
    return (
        <CardsEstilizada>
            {children}
        </CardsEstilizada>
    )
}

export default Cards;