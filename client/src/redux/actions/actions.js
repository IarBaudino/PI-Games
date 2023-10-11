

import axios, { all } from "axios";

export const GET_GAMES = "GET_GAMES"
export const GET_GAME_ID = "GET_GAME_ID"
export const GET_GENRES = "GET_GENRES"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const PAGINATED = "PAGINATED"

export function getGames() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/games");
      const videoGames = response.data
      return dispatch({
        type: GET_GAMES,
        payload: videoGames
      })
    } catch (error) {
      alert(error.response.data.error)
    }

  }
}


export function getById(id) {
  return async function (dispatch) {
    try{
    const response = await axios.get(`http://localhost:3001/games/${id}`);
    const videoGameID = response.data;
    return dispatch({
      type: GET_GAME_ID,
      payload: videoGameID,
    });
  }catch (error){
    alert(error.response.data.error)
  }
  };
}

export function getGenres() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/genres");
      const allGenres = response.data
      return dispatch({
        type: GET_GENRES,
        payload: allGenres
      })
    } catch (error) {
      alert(error.response.data.error)
    }

  }
}

export function getPlatforms() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/platforms");
      const allPlatforms = response.data
      return dispatch({
        type: GET_PLATFORMS,
        payload: allPlatforms
      })
    } catch (error) {
      alert(error.response.data.error)
    }

  }
}

export function postGame(state) {
  return async function (dispatch) {
    try {
       await axios.post("http://localhost:3001/games", state)
      alert("Juego creado con exito!")
    } catch (error) {
      alert(error.response.data.error)
    }

  }
}


export function paginatedGames(order) {
  return (dispatch) => {
    try {
      dispatch({
        type: PAGINATED,
        payload: order
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}
