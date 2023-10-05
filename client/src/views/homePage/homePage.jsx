/* HOME PAGE | la página principal de tu SPA debe contener:

SearchBar: un input de búsqueda para encontrar videojuegos por nombre.
Sector en el que se vea un listado de cards con los videojuegos. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /videogames y deberá mostrar su:
Imagen.
Nombre.
Géneros.
Cuando se le hace click a una Card deberá redirigir al detalle de ese videojuego específico.
Botones/Opciones para filtrar por género, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating.
Paginado: el listado de videojuegos se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 15 videojuegos por página. */
import { useDispatch} from "react-redux";
import { useEffect } from 'react';
import { getGames } from "../../redux/actions/actions";

import Cards from "../../components/cards/cards";

import Style from "../homePage/homePage.module.css"


function HomePage() {
    const dispatch = useDispatch();
    /* const allGames = useSelector(state => state.allVideogames); */


    useEffect(() => {
        dispatch(getGames());
    }, [dispatch]);
    
    return (
        <div className={Style.home}>
            
            <h2 className={Style.titleone}>bienvenides</h2>
            <div className="cardcontainer">
                <Cards />
            </div>
        </div>
    );
}

export default HomePage;