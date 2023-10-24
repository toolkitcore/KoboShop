import { combineReducers } from "redux";
import productReducer from './productSlice/productSlice';
import cartReducer from './cartSlice/cartSlice'
import categoryReducer from './categorySlice/categorySlice'
import commentReducer from './comment/commentSlice'

export const clientReducer = combineReducers({
    productReducer,
    cartReducer,
    categoryReducer,
    commentReducer
})