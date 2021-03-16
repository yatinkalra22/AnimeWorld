import {
    ANIME_LIST,
    REQUEST_API_URL,
    ADD_ANIME_TO_THE_LIST,
} from '../actions/Types';
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
        case ADD_ANIME_TO_THE_LIST:
            return {
                ...state,
                animeList: [...state.animeList, ...action.payload],
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