import { combineReducers } from 'redux';
import ReducerApp from './reducer_app';
import ActiveBook from './reducer_active_book';
import breathReducer from './breathReducer';
import outBreathReducer from './outBreathReducer';
import isCheckedReducer from './isCheckedReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  books: ReducerApp,
  activeBook: ActiveBook,
  breath: breathReducer,
  outBreath: outBreathReducer,
  bgON: isCheckedReducer
});

export default rootReducer;
