import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = ({ children }) => {
    const [order, setOrder] = useState([])
    const [cart, setCart] = useState([])
    const [restaurant, setRestaurant] = useState({})
    const addToCart = (product, quantity, newRestaurant) => {
             if(newRestaurant.id === restaurant.id){
               
        setCart([...cart, { ...product, quantity }])
        
        }else {
                setCart([{ ...product, quantity }])
                setRestaurant(newRestaurant)
        }
    }
    console.log(cart);
    const removeToCart = (id) => {
        const index = cart.findIndex((product)=> product.id === id)
        const newCart =[...cart]
        newCart.splice(index, 1)
        setCart(newCart)
    }
   // console.log(addToCart());
   //console.log(GlobalState);
   // console.log(cart);
    const states = { cart, restaurant, order}
    const requests = {addToCart, removeToCart}
    const setters = {setOrder}


    return (
        <GlobalStateContext.Provider value={{ states, requests, setters }}>
            {children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
