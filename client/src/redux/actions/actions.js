

import axios from "axios";

export const GET_GAMES = "GET_GAMES"
export const GET_GAME_ID = "GET_GAME_ID"


export function getGames(){
    return async function(dispatch){

        const response = await axios.get("http://localhost:3001/games");
        const videoGames = response.data
        return dispatch ({
            type: GET_GAMES,
            payload:videoGames
        })
    }
}


export function getById(id) {
    return async function (dispatch) {
      const response = await axios.get(`http://localhost:3001/games/${id}`);
      const videoGameID = response.data;
      return dispatch({
        type: GET_GAME_ID,
        payload: videoGameID,
      });
    };
  }
  