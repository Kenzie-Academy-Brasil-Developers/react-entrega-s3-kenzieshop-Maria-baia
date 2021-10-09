import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {addProductsThunk} from "../cart/thunks"
import {ToastContainer, toast} from "react-toastify"

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
        toast.success("Produto adicionado ao cariinho!")
        dispatch(addProductsThunk(product))
        setNumber(number + 1)
    }

    return (
        <div className="body">
            <h3>Quantidade de produtos no carrinho: {number}</h3>
            <div className="products" >{data.map((product) => (
                <div className="product">
                    <img src={product.image}/>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    <span>{product.price}</span>
                    <button className="addCart" onClick={() => handleClick(product)}>
                            Adicionar ao Carrinho
                    </button>
                </div>
            ))}
            </div>
            <ToastContainer/>
        </div>
    )
}

