import { Link } from "react-router-dom";
import style from "../card/card.module.css";

function Card({ id, image, name, genres }) {
    return (
        <div className={style.cardcontainer}>
            <Link to={`/home/${id}`}>
                <img className={style.img} src={image} alt={name} />
                <h2>Nombre: {name}</h2>
                <h2>Géneros: {genres.join(", ")}</h2>
            </Link>
        </div>
    );
}

export default Card;

                                            //QUE ES LO QUE HACE ESTE COMPONENTE?
//function Card({ id, image, name, genres }) {: Este es el comienzo de la definición de la función del componente Card. Toma cuatro propiedades como argumentos: id, image, name, y genres. Estas propiedades representan los datos que se utilizarán para mostrar información sobre un juego en una tarjeta.
//<div className={style.cardcontainer}>: Aquí se crea un elemento div que actúa como contenedor de la tarjeta. Se aplica una clase de estilo cardcontainer que se define en el archivo CSS importado anteriormente.
//<Link to={/home/${id}}>: Utilizamos el componente Link para crear un enlace que dirige a la vista "home" con el id del juego como parte de la URL. Esto permite la navegación a la página de detalles del juego cuando se hace clic en la tarjeta.
//<img className={style.img} src={image} alt={name} />: Aquí se muestra una imagen del juego. Se utiliza la clase de estilo img para aplicar estilos al elemento img. La URL de la imagen se toma de la propiedad image, y el atributo alt se establece en el nombre del juego para proporcionar un texto alternativo en caso de que la imagen no se cargue.
//<h2>Nombre: {name}</h2>: Se muestra el nombre del juego dentro de un encabezado de nivel 2 (<h2>). El nombre se toma de la propiedad name.
//<h2>Géneros: {genres.join(", ")}</h2>: Aquí se muestran los géneros del juego en un encabezado <h2>. Los géneros se toman de la propiedad genres, que es un arreglo. Para mostrarlos de manera legible, utilizamos .join(", ") para unir los elementos del arreglo con comas y espacios.
//</Link>: Cierra el componente Link. Este es el final del enlace que rodea la tarjeta, lo que significa que toda la tarjeta es clickeable y redirigirá a la vista "home" con el id del juego en la URL.

//En resumen, el componente Card se utiliza para mostrar información sobre un juego, incluyendo su imagen, nombre y géneros, en una tarjeta que es un enlace clickeable para ver detalles adicionales del juego. La información se toma de las propiedades pasadas al componente y se utiliza para generar la tarjeta.