import { combineReducers } from 'redux';
import ReducerApp from './reducer_app';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: ReducerApp,
  activeBook: ActiveBook
});

export default rootReducer;
