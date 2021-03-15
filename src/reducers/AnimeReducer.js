import { ANIME_LIST } from '../actions/Types';
const initialState = {
    animeList: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ANIME_LIST:
            return {...state, animeList: action.payload };
        default:
            return state;
    }
}