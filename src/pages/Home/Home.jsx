import { Products } from "../../store/modules/products/products"
import { useHistory } from "react-router"
import Header from "../../components/Header/Header"

const Home = () => {
    const history = useHistory()

    return(
        <div>
            <div className="header">
                <Header/>
                <button onClick={() => history.push("/login")}>
                    Entrar
                </button>
            </div>
            <div>
                <Products/>
            </div>
        </div>
    )
}

export default Home