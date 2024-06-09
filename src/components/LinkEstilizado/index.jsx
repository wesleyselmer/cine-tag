import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkEstilizado = styled(Link)`
  &&& {
    color: ${props => props.$cabecalho? "#f0f0f0" : "#000000"};
    font-weight: 400;
    font-style: 18px;
    text-align: center;
    text-decoration: none;
    list-style-type: none;
    width: auto;

    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      list-style-type: none;
    }
  }
`

export default LinkEstilizado;