import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = ({ Children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (product, quantity) => {
        setCart([...cart, { ...product, quantity }])
    }
   // console.log(addToCart());
   //console.log(GlobalState);
    console.log(cart);
    const states = { cart }
    const requests = {addToCart}
    const setters = {}


    return (
        <GlobalStateContext.Provider value={{ states, requests, setters }}>
            {Children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
