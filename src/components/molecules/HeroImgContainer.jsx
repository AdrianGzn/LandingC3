import Img from "../atomes/Img.jsx"
import styled from "styled-components"

const DivStyled = styled.div`
    width: 90%;
    height: 90%;
`

function HeroImgContainer() {
    return <DivStyled><Img link="hero.png"></Img></DivStyled>
}

export default HeroImgContainer