import { ADD_USER } from "./actionType"

const token = (localStorage.getItem("token")) || ""

const userReducer= (state = {
    token}, action) => {
    switch (action.type){
        case ADD_USER:
            const {token} = action;
            return {...state, token}
        default:
            return state
    }
}

export default userReducer