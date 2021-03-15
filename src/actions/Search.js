import { SEARCH_ANIME } from './Types';

export const searchAnime = word => dispatch => {
    dispatch({
        type: SEARCH_ANIME,
        payload: res.data,
    });
};