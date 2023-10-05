import { Link } from "react-router-dom"
import style from "../card/card.module.css"

function Card(game) {
    const {id, image, name, genre } = game;

    return (
        <div className={style.cardcontainer}>
            <Link to={`/home/${id}`}>
                
                <img className={style.img} src={image} alt={name}/>
                <h2>name: {name}</h2>
                <h2>Genre: {genre} </h2>
            </Link>
        </div>
    )
}

export default Card;
