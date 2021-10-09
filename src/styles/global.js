import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background-color: #ffcdb2;
        color: #e5989b;
        display: flex;
        flex-direction: column;
    }

    button {
        background-color: #ffcdb2;
        color: #b5838d;
        border: none;
        font-size: 18px;
        cursor: pointer;
    }

    .kenzie {
        font-size: 25px;
        font-weight: bold;
        margin: 0 85% 0 0;
    }

    .header {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #6d6875;
        padding: 20px;
        align-items: center;
    }

    .buttons {
        display: flex;
        width: 60%;
    }

    .body {
        margin: 5%;
        display: flex;
        flex-direction: column;
    }

    h3 {
        margin-bottom: 10px;
    }

    .products {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
    }

    .product {
        background-color: #ffffff;
        width: 95%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        justify-content:space-between;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
    }

    img {
        width: 200px;
    }

    .addCart {
        background-color: #ffb4a2;
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
        color: #b5838d;
    }

    .cart {
        display: flex;
        flex-direction: column;
        margin: 5%;
        align-items: center;
    }

    span {
        color: #6d6875;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 500px;
        justify-content: center;
    }

    h1 {
        margin-bottom: 30px;
        text-align: center;
    }

    input {
        margin-bottom: 15px;
        background-color: #ffb4a2;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #e5989b;
        color: #6d6875;
        ::placeholder {
            color: #b5838d;
        }
    }

    @media (min-width: 1024px){
        .buttons {
            width: 90%;
        }
         
        .header {
            justify-content: space-evenly;
        }

        .products {
            flex-direction: row;
        }

        .product {
            width: 32%;
        }

        .shop {
            display: flex;
            align-items: flex-start;
            margin: 1%;
            justify-content: center;
        }

        .cart {
            margin: 0;
            width: 60rem;
        }

        .cartProducts {
            flex-direction: row;
            width: 90%;
            column-gap: 20px;
        }
        .addCart {
           width: 100px;
        }
    }
`;