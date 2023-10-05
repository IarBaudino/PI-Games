


import { GET_GAMES, GET_GAME_ID } from "../actions/actions";


let initialState = {
    allVideogames: [],
    videoGameId : []
}
function rootReducer(state = initialState, action) {
    switch (action.type) { //cada action debe tener su type
        case GET_GAMES: //dependiendo del tipo va a entrar a un switch statement, en este caso la action es GET_USERS (importada mas arriba)
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
        default:
            return { ...state }
    }
};

export default rootReducer