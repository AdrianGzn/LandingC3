import Text from "../atomes/Text.jsx"
import "./Card.css"
import mysql from "../../data/mysql.js";
import Img from "../atomes/Img.jsx"

function Cards() {
    return (
        mysql.products.map (product => {
            return (
                <>
                    <div id="my-card">
                        <div id="image-card">
                            <Img link={product.image} alt="" />
                        </div>
                        <Text text={product.text}></Text>
                    </div>
                </>
            )
        })   
    )
}

export default Cards