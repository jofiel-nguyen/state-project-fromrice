import {createStore} from 'redux';

import { reducer } from './utils/reducers'; 
const initialState = {
  // Define your initial state here, the same as you had before
  products: [],
  cartOpen: false,
  cart: [],
  categories: [],
  currentCategory: '',
};

const store = createStore(reducer, initialState);

export default store;
