import {addProducts} from "./actions"

export const addProductsThunk = (product) => (dispatch) => {
    const list = JSON.parse(localStorage.getItem("shop")) || []
    const newList = [...list, product]
    localStorage.setItem("shop", JSON.stringify(newList))
    dispatch(addProducts(product));
};