import { combineReducers } from 'redux';
import makers from './MakerReducer';
import posts from './PostReducer';

export default combineReducers({
    makers,
    posts
});