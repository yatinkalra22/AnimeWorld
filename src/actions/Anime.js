import { ANIME_LIST, REQUEST_API_URL, ADD_ANIME_TO_THE_LIST } from './Types';
import { startLoading, stopLoading } from './Loader';
import axios from 'axios';
const animeUrl = 'https://api.jikan.moe/v3/search/anime?q=';
const limitPerPage = 16;
export const getAnimeList = (animeName, pageNumber) => dispatch => {
    dispatch(startLoading());
    return axios
        .get(
            `${animeUrl}${animeName}&limit=${limitPerPage}&page=${
        pageNumber ? pageNumber : 1
      }`,
        )
        .then(res => {
            dispatch(stopLoading());
            dispatch({
                type: ANIME_LIST,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
};
export const addAnimeToTheList = (animeName, pageNumber) => dispatch => {
    dispatch(startLoading());
    return axios
        .get(
            `${animeUrl}${animeName}&limit=${limitPerPage}&page=${
        pageNumber ? pageNumber : 2
      }`,
        )
        .then(res => {
            dispatch(stopLoading());
            dispatch({
                type: ADD_ANIME_TO_THE_LIST,
                payload: res.data.results,
            });
        })
        .catch(err => {
            console.log(err);
            dispatch(stopLoading());
        });
};

export const getApiCallUrl = (animeName, pageNumber) => dispatch => {
    dispatch({
        type: REQUEST_API_URL,
        payload: `${animeUrl}${animeName}&limit=${limitPerPage}&page=${
      pageNumber ? pageNumber : 1
    }`,
    });
};