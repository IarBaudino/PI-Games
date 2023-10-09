//importa las actions types
import { GET_GAMES, GET_GAME_ID, GET_GENRES, GET_PLATFORMS } from "../actions/actions";

//estado inicial
let initialState = {
    allVideogames: [],
    videoGameId : [],
    allGenres:[],
    allPlatforms:[]
}

function rootReducer(state = initialState, action) {
    switch (action.type) { 
        case GET_GAMES: 
            return {
                ...state, //hago una copia del estado para no pisar el original
                allVideogames: action.payload // modifica el estado
                /* gamesCopy: action.payload */
            };

            case GET_GAME_ID: //dependiendo del tipo va a entrar a un switch statement, en este caso la action es GET_USERS (importada mas arriba)
            return {
                ...state, //hago una copia del estado para no pisar el original
                videoGameId: action.payload // modifica el estado
                /* gamesCopy: action.payload */
            };

            case GET_GENRES: 
            return {
                ...state, 
                allGenres: action.payload 
            };

            case GET_PLATFORMS: 
            return {
                ...state, 
                allPlatforms: action.payload 
            };

        default:
            return { ...state }
    }
};

export default rootReducer