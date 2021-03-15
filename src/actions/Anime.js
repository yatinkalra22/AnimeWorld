import { ANIME_LIST, REQUEST_API_URL } from './Types';
import { startLoading, stopLoading } from './Loader';
import axios from 'axios';
const animeUrl = 'https://api.jikan.moe/v3/search/anime?q=';
const limitPerPage = 16;
export const getAnimeList = animeName => dispatch => {
    dispatch(startLoading());
    return axios
        .get(`${animeUrl}${animeName}&limit=${limitPerPage}`)
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

export const getApiCallUrl = animeName => dispatch => {
    dispatch({
        type: REQUEST_API_URL,
        payload: `${animeUrl}${animeName}&limit=${limitPerPage}`,
    });
};