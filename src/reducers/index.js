import { combineReducers } from 'redux';
import user from './userReducer';
import loading from './loadingReducer';
import errors from './errorReducer';
import { CartReducder as cart } from './cartReducer';
import products from './productReducer';
import questions from './questionReducer';
import history from './historyReducer';

export default combineReducers({
  user,
  loading,
  errors,
  cart,
  products,
  questions,
  history,
});
