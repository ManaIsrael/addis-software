import { combineReducers } from 'redux';
import songReducer from './slices/songSlice';

const rootReducer = combineReducers({
  song: songReducer,
});

export default rootReducer;
