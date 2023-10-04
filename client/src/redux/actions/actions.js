

import axios from "axios";

export const GET_GAMES = "GET_GAMES"


export function getGames(){
    return async function(dispatch){
        const response = await axios.get("http://localhost:3001/games");
        return dispatch ({
            type: "GET_GAMES",
            payload:response.data
        })
    }
}