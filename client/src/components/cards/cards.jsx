import Card from "../card/card";


function Cards({allGames}) {
const gamesList=allGames

    return (
        <div>
            <h2>estas son las cards</h2>
            {gamesList?.map(game=>(
            <Card key={game.id} game = {game} />
            ))}
        </div>

    )
}

export default Cards;