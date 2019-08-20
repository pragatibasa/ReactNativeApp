import {users} from '../../data/data';

const INITIAL_STATE = {
    makers: users
};

const makers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default makers;