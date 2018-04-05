import { combineReducers } from 'redux';
import appReducer from './data/reducers'

const rootReducer = combineReducers({
  app: appReducer
});

export default rootReducer;