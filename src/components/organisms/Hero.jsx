import styled, { isStyledComponent } from "styled-components";
import HeroImgContainer from "../molecules/HeroImgContainer";
import HeroText from "../molecules/HeroText";

const DivStyled = styled.div`
    height: 490px;
    width: 81.5%;
    background-color: rgb(58, 58, 58);
    box-shadow: 0 -5px 0 #04AA6D;
    margin: 30px auto 0 auto;
    border-radius: 5px;
    display: grid;
    grid-template-columns: 75% 20%;
    grid-gap: 0;
    justify-content: center;
    align-items: center;
`
function Hero() {
    return <DivStyled>
        <HeroImgContainer></HeroImgContainer>
        <HeroText></HeroText>
    </DivStyled>
}

export default Hero