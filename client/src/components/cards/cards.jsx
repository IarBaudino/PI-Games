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

                                //QUE ES LO QUE HACE ESTE COMPONENETE?

 //se encarga de renderizar una lista de tarjetas (o cartas) de juegos de video. Veamos el código paso a paso:

//Card: Se importa un componente llamado Card desde el archivo "../card/card". Esto indica que hay otro componente en un archivo llamado "card.js" en el directorio "../card".

//useSelector: Se importa la función useSelector desde la librería "react-redux". Esta función es utilizada para seleccionar datos del estado de Redux en componentes de React.


//Se define una función llamada Cards.
//Dentro de esta función, se utiliza useSelector para obtener el estado de Redux. Se supone que en el estado de Redux existe una propiedad llamada allVideogames que contiene información sobre los juegos de video.

//Renderizado del componente:

//Se utiliza una expresión de mapeo para recorrer el array allGames (una lista de juegos) y crear un componente Card para cada juego.
//Cada tarjeta Card recibe varias propiedades, incluyendo un key (clave única), el nombre del juego (name), la imagen del juego (image), y los géneros del juego (genres).
//La clave (key) es importante para React y debe ser única dentro de la lista para optimizar la renderización.
//Los datos de cada juego se obtienen del array allGames.
//En resumen, este componente Cards se encarga de renderizar una lista de tarjetas de juegos de video, utilizando datos del estado de Redux. Cada tarjeta se representa con el componente Card y se pasa la información relevante como propiedades para ser renderizada. El estilo de estas tarjetas se gestiona a través de clases CSS definidas en el archivo de estilos "cards.module.css".
