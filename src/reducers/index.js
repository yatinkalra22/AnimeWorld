import { combineReducers } from 'redux';
import animeReducer from './AnimeReducer';
import loadingReducer from './LoadingReducer';
export default combineReducers({ animeReducer, loadingReducer });