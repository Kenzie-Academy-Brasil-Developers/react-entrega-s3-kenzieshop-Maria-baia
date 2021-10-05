import { ADD_USER } from "./actionType";

export const sigIn = (token) => ({
    type: ADD_USER,
    token
})