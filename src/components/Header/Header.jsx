import { useHistory } from "react-router"

const Header = () => {
    const history = useHistory()

    return (
        <div className="buttons">
            <button className="kenzie" onClick={() => history.push("/")}>
                Kenzie Shop
            </button>
            <button onClick={() => history.push("/shop")}>
                Carrinho
            </button>
        </div>
  );
}

export default Header