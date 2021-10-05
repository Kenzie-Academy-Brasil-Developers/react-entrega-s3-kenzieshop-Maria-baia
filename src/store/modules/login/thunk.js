import { sigIn } from "./actions";
import axios from "axios";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const signIn = (userData) => (dispatch) => {
    axios.post("https://kenziehub.herokuapp.com/sessions", userData)
    .then(response => {
        dispatch(sigIn(response.data.token))
        localStorage.setItem(response.data.token)
    })
    .catch(() => toast.error("Usuário ou senha incorretos."))
}