import { useSelector } from "react-redux"
import { useState } from "react"
import { useHistory } from "react-router"
import Header from "../../components/Header/Header"

const Shop = () => {
    const shop = useSelector((state) => state.shop)
    const [number, setNumber] = useState(shop.length)
    const handleRemove = (product) => {
        shop.splice(shop.indexOf(product), 1)
        setNumber(number - 1)
    }
    const history = useHistory()
    const [shopTotal, setCartTotal] = useState(0)

    return(
        <div>
            <div className="header">
                <Header/>
                <button onClick={() => history.push("/login")}>
                    Entrar
                </button>
            </div>
            <div className="shop">
            <div className="cart">
                {shop.map((cart) => (
                    <div className="product cartProducts">
                        <img src={cart.image}/>
                        <h1>{cart.title}</h1>
                        <p>{cart.description}</p>
                        <span>{cart.price}</span>
                        <button className="addCart" onClick={() => handleRemove(cart)}>
                            Remover do Carrinho
                        </button>
                    </div>
                ))}
            </div>
            <div className="product">
                <h2>Resumo do pedido</h2>
                <div>
                    <h3>Quantidade de produtos: {number}</h3>
                    <span>
                        {shop.map((cart) => cart)
                        .reduce((shopTotal, current) => shopTotal + parseFloat(current.price), shopTotal)
                        .toFixed(2)}
                    </span>
                </div>
                <button className="addCart" onClick={() => history.push("/login")}>
                    Finalizar Compra
                </button>
            </div>
            </div>
        </div>
    ) 
}

export default Shop