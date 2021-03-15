import { ANIME_LIST } from './Types';

export const getAnimeList = () => dispatch => {
    dispatch({
        type: ANIME_LIST,
        payload: res.data,
    });
};