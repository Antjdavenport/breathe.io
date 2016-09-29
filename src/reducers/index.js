import { combineReducers } from 'redux';
import ReducerApp from './reducer_app';
import ActiveBook from './reducer_active_book';
import breathReducer from './breathReducer';
import outBreathReducer from './outBreathReducer';
import isCheckedReducer from './isCheckedReducer';
import customColorsReducer from './customColorsReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  books: ReducerApp,
  activeBook: ActiveBook,
  breath: breathReducer,
  outBreath: outBreathReducer,
  isChecked: isCheckedReducer,
  customColors: customColorsReducer
});

export default rootReducer;
