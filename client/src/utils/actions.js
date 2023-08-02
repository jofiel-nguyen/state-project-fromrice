

// Define your action types as constants
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_MULTIPLE_TO_CART = 'ADD_MULTIPLE_TO_CART';
export const UPDATE_CART_QUANTITY = 'UPDATE_CART_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const TOGGLE_CART = 'TOGGLE_CART';
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export const UPDATE_CURRENT_CATEGORY = 'UPDATE_CURRENT_CATEGORY';

// Create action creators to dispatch actions
export const updateProducts = (products) => ({
  type: UPDATE_PRODUCTS,
  products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const addMultipleToCart = (products) => ({
  type: ADD_MULTIPLE_TO_CART,
  products,
});

export const updateCartQuantity = (_id, purchaseQuantity) => ({
  type: UPDATE_CART_QUANTITY,
  _id,
  purchaseQuantity,
});

export const removeFromCart = (_id) => ({
  type: REMOVE_FROM_CART,
  _id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const updateCategories = (categories) => ({
  type: UPDATE_CATEGORIES,
  categories,
});

export const updateCurrentCategory = (currentCategory) => ({
  type: UPDATE_CURRENT_CATEGORY,
  currentCategory,
});
