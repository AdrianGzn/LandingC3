import styled from "styled-components";

const ImgStyled = styled.img`
    height: 100%;
    width: 100%;
    margin: 0;
`;

function Img(props) {
    return <ImgStyled src={props.link} />;
}

export default Img;
