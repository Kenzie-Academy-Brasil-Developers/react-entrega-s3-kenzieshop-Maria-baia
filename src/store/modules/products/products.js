import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {addProductsThunk} from "./thunks"

export const Products = () => { 
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const [number, setNumber] = useState(0)

    useEffect(() => {
        axios.get("https://kenzieshop.herokuapp.com/products/")
        .then(response => setData(response.data))
        .catch((err) => console.log(err))
    })

    const handleClick = (product) => {
        dispatch(addProductsThunk(product))
        setNumber(number + 1)
    }

    return (
        <div className="body">
            <h3>Quantidade de produtos no carrinho: {number}</h3>
            <div className="products" >{data.map((product) => (
                <div className="product">
                    <img src={product.image}/>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                    <button className="addCart" onClick={() => handleClick(product)}>
                            Adicionar ao Carrinho
                    </button>
                </div>
            ))}
            </div>
        </div>
    )
}

