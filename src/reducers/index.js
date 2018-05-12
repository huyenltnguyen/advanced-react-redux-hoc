import { combineReducers } from 'redux';
import authenticationReducer from './authentication';

const rootReducers = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducers;
