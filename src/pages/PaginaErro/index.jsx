import styled from "styled-components";
import Banner from "@/components/Banner";

const SectionEstilizada = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PaginaErro = () => {
    return (
        <SectionEstilizada>
            <Banner tipo="home" />
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </SectionEstilizada>
    )
}

export default PaginaErro;