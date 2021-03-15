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
            var newArr = state.animeList.concat(action.payload);
            return {
                ...state,
                animeList: newArr,
            };
            // // can only add one element
            // return {
            //     ...state,
            //     animeList: [...state.animeList, action.payload[0]],
            // };
        case REQUEST_API_URL:
            return {
                ...state,
                requestApiUrl: action.payload,
            };
        default:
            return state;
    }
}