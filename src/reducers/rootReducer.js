import { combineReducers } from 'redux';

import timeReducer from './timeReducer';
import modeReducer from './modeReducer';

const appReducer = combineReducers({
    time: timeReducer,
    mode: modeReducer
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
