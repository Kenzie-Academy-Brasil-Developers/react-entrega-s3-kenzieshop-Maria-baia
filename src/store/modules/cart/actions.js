import { ADD_PRODUCTS } from "./actionType";

export const addProducts = (product) => ({
    type: ADD_PRODUCTS,
    product
});