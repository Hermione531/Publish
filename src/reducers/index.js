import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import basicInfo from './basicInfo';

const rootReducer = combineReducers({
    basicInfo,
    router: routerReducer
});

export default rootReducer;