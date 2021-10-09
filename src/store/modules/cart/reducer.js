import { ADD_PRODUCTS } from "./actionType";
import {cart} from "./cart"

const productsReducer = (state = cart, action) => {
    switch (action.type){
        case ADD_PRODUCTS:
            const {product} = action
            return [...state, product];
        default:
            return state;
    }
};

export default productsReducer