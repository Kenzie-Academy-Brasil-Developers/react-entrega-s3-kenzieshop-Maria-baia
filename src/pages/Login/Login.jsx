import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { signIn } from "../../store/modules/login/thunk"
import { ToastContainer } from "react-toastify"
import Header from "../../components/Header/Header"

function Login(){
    const dispatch = useDispatch()

    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório!").email("E-mail inválido."),
        password: yup.string().required("Campo obrigatório!").min(6, "Mínimo 6 caracteres."),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()

    const onSubmitFunction = (data) => {
        dispatch(signIn(data))
    }

    return(
        <div>
            <div className="header">
                <Header/>
            </div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>LOGIN</h1>
                <input placeholder='E-mail' {...register("email")}/>
                <span>{errors.email?.message}</span>
                <input type="password" placeholder='Senha' {...register("password")}/>
                <span>{errors.password?.message}</span>
                <button className="addCart">ENTRAR</button>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default Login