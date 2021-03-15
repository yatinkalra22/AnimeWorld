import { combineReducers } from 'redux';
import searchReducer from './SearchReducer';
import animeReducer from './AnimeReducer';
export default combineReducers({ searchReducer, animeReducer });