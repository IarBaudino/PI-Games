import Card from "../card/card";
import { useSelector } from "react-redux";
import style from "../cards/cards.module.css"

function Cards() {

    const allGames = useSelector(state => state.allVideogames);

    return (
        <div className={style.cardslist}>
            {allGames?.map(game => (
                <Card
                    key={game.id}
                    name={game.name}
                    image={game.image}
                    genres={game.genres}
                     />
            ))}
        </div>

    )
}

export default Cards;
