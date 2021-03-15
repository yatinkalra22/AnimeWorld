import { SEARCH_ANIME } from '../actions/Types';
const initialState = {
    searchText: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_ANIME:
            return {...state, searchText: [...state.searchText, action.payload] };
        default:
            return state;
    }
}