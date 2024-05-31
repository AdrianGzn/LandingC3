import Text2 from "../atomes/Text2"
import Title3 from "../atomes/Title3"
import styled from "styled-components"

const DivStyled = styled.div`
    height: 90%;
    width: 90%;
`

function HeroText() {
    return (<>
        <DivStyled>
            <Title3 text="VolksWaguen"></Title3>
            <Text2 text="
                Explora la excelencia en movimiento con Volkswagen. Nuestro compromiso 
                con el diseño innovador, la tecnología avanzada y la confiabilidad redefine tu 
                experiencia de conducción. Únete a nosotros para formar parte de un estilo de vida 
                automotriz incomparable. Desde nuestros icónicos modelos hasta las innovaciones 
                revolucionarias, te invitamos a experimentar el placer de conducir con Volkswagen.
            "></Text2>
        </DivStyled>
    </>)
}

export default HeroText