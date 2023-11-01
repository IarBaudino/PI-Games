//importa las actions types
import { GET_GAMES, GET_GAME_ID, GET_GENRES, GET_PLATFORMS, PAGINATED } from "../actions/actions";

//estado inicial
let initialState = {
    allVideogames: [],
    videoGameId: [],
    allGenres: [],
    allPlatforms: [],
    allVideogamesBackUp: [],
    currentPage: 0,
}

function rootReducer(state = initialState, action) {
    const ITEMS_PER_PAGE = 15;



    switch (action.type) {
        case GET_GAMES:
            return {
                ...state, //hago una copia del estado para no pisar el original
                allVideogames: [...action.payload].splice(0, ITEMS_PER_PAGE),
                allVideogamesBackUp: action.payload

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

        case PAGINATED:
            const next_page = action.payload === "next" ? state.currentPage + 1 : state.currentPage - 1;
            const startIndex = next_page * ITEMS_PER_PAGE;
            const endIndex = startIndex + ITEMS_PER_PAGE;
            return {
                ...state,
                allVideogames: state.allVideogamesBackUp.slice(startIndex, endIndex),
                currentPage: next_page,
            };

        case SEARCH_GAME:

        



        default:
            return { ...state }
    }
};

export default rootReducer