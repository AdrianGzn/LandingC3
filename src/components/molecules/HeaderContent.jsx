import Title from "../atomes/Title.jsx";
import Img from "../atomes/Img"
import styled from "styled-components";

const DivStyled = styled.div`
    height: 60%;
    width: 5%;
    margin-right: 20px;
`

function HeaderContent() {
    return (<>
        <DivStyled><Img link="logo.png"></Img></DivStyled>
        <Title text="VolksWagen"></Title>
    </>)
}

export default HeaderContent