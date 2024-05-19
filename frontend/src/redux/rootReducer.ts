import { combineReducers } from 'redux';
import songReducer from './slices/songSlice';
import filterReducer from './slices/filterSlice';

const rootReducer = combineReducers({
  song: songReducer,
  filter: filterReducer
});

export default rootReducer;
