import { Link } from "react-router-dom"


function Card({ game }) {
    const {id, image, name, genre } = game;

    return (
        <div>
            <Link to={`/home/${id}`}>
                <h2>este es el card</h2>
                <h2>Image: {image} </h2>
                <p>Name: {name} </p>
                <p>Genre: {genre} </p>
            </Link>
        </div>
    )
}

export default Card;