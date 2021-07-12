import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import sortReducer from './sortReducer';
import  loadingReducer   from './loadingReducer';

const rootReducer = combineReducers({
  sort: sortReducer,
  filter: filterReducer,
  load: loadingReducer
});

export default rootReducer;