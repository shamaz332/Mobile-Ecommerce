"use strict"
import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import mobilesReducers from './mobilesReducers';
import cartReducers from './cartReducers';
import authReducer from "./authReducers";
import errorReducer from "./cartReducers";
//HERE COMBINE THE REDUCERS
export default combineReducers({
  mobiles: mobilesReducers,
  cart: cartReducers,
  auth: authReducer,
  errors: errorReducer
})
