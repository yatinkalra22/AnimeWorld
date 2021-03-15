import { ANIME_LIST, REQUEST_API_URL } from '../actions/Types';
const initialState = {
    animeList: [],
    requestApiUrl: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ANIME_LIST:
            return {
                ...state,
                animeList: action.payload,
            };
        case REQUEST_API_URL:
            return {
                ...state,
                requestApiUrl: action.payload,
            };
        default:
            return state;
    }
}