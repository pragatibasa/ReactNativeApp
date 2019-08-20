import {postsData} from '../../data/data';

const INITIAL_STATE = {
    posts: postsData
};

const posts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default posts;