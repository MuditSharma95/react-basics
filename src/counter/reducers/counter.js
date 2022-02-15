
import { INCREMENT_SUCCESS, DECREMENT_SUCCESS } from '../actions/actionConstants';

const INITIAL_STATE = {
    count: 0,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case INCREMENT_SUCCESS:
            return {
                ...state, count: action.payload
            }

        case DECREMENT_SUCCESS:
            return {
                ...state, count: action.payload
            }
        default:
            return state;
    }

}