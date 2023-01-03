import { types } from '../actions/modeActions';

const defaultState = {
    darkMode: 0,
};

export default function (state = defaultState, action) {
    switch (action.type) {
    case types.DARK_MODE:
        return {
            ...state,
            darkMode: action.darkMode,
        };

    default:
        return state;
    }
}
