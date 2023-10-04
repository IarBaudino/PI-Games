


import { GET_GAMES } from "../actions/actions";


let initialState = {
    allGames: []
}
function rooterReducer(state = initialState, action) {
    switch (action.type) { //cada action debe tener su type
        case GET_GAMES: //dependiendo del tipo va a entrar a un switch statement, en este caso la action es GET_USERS (importada mas arriba)
            return {
                ...state, //hago una copia del estado para no pisar el original
                allGames: action.payload, // modifica el estado
                /* gamesCopy: action.payload */
            };
    }
};

export default rooterReducer