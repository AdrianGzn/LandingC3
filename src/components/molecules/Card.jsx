import Text from "../atomes/Text.jsx"
import "./Card.css"
import mysql from "../../data/mysql";

function Card() {
    return (
        mysql.products.map (product => {
            return (
                <>
                    <div id="my-card">
                        <img src={product.image} alt="" />
                        <Text text={product.text}></Text>
                    </div>
                </>
            )
        })   
    )
}

export default Card