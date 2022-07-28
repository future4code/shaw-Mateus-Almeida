import React, { useState } from "react";
import { Main, MainCart, CartConfig, InfoProfile, InfoRestaurant, CartInfo, EmptyCart, Payment, Freight, Total, Form } from "./styled";
import { useRequestData } from "../../Hooks/useRequestData"
import { BASE_URL } from "../../Constants/url";
import  MenuMain from '../../Components/Menu/Menu'
import { Key } from "@mui/icons-material";
import { Button, Menu } from "@mui/material";
import Header from "../../Components/Headers/Headers";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { CardProduto } from "../../Components/ProdutosCard/styled";
import ProdutoCard from "../../Components/ProdutosCard/ProdutosCard";



const Cart = () => {
    const profile = useRequestData({}, `${BASE_URL}/profile`)
    const [payment, setPaymant] = useState("")
   
    const {requests, states} = useGlobal()
    const {addToCart, removeCart}= requests
    const {cart, restaurant}= states
 console.log(states);
    const [paymentMethod] = useState([
        'money',
        'creditcard'
    ])
    const mockData = {
        place:[
            {
            name: "stencil",
            price: 40,
            photoUrl:  "a",
            amount: 2,
            description:"pao,carne,alface"
            }
        ]

    }
       
    
    const onChangePayment = (event) => {
        
        setPaymant(event.target.value)
       
    }

    //console.log(profile[0].user);

    console.log(payment);

    return (

        <Main>

            <Header title={"meu carrinho "} back />

            <CartConfig>
                <InfoProfile>
                    <br></br>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>
                <InfoRestaurant>
                    <p>Nome do restaurant</p>
                    <p>rua do restaurant</p>
                    <p> 30 - 45min</p>
                </InfoRestaurant>
                <CartInfo>
                    {cart.length > 0 ? cart.map((product) => {
                   {console.log(product)}
                       return (
                        
                            <ProdutoCard
                            
                               product={product}
                               key={product.id}
                               restaurant={restaurant}
                            />
                        )
                    }) : <EmptyCart>carrinho vazio</EmptyCart>}
                </CartInfo>
                <Payment>
                    <Freight>Frete{new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(6)}</Freight>
                    <Total>
                        <p>Subtotal</p>
                        <p>{new Intl.NumberFormat('pt-Br', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(10)}</p>
                    </Total>
                    <h1>forma de pagamento </h1>
                    <hr />
                    <Form>
                        {paymentMethod.map((key) => {
                           
                            return (
                                <div key={key}>
                                    <input
                                        checked={payment === key}
                                        name={"paymentMethod"}
                                        id={key}
                                        type={'radio'}
                                        onChange={onChangePayment}
                                        value={key}
                                    />
                                    <label for={key}>{key}</label>
                                </div>
                            )
                        })}
                        <Button>confirmar</Button>
                    </Form>

                </Payment>

            </CartConfig>
            <MenuMain page={"cart"}/>
        </Main>


    )

}
export default Cart
/* 
 <div>
                    <p>carrinho vazio</p>
                </div>
                <div>
                    <p>frete 000</p>
                    <div>
                        <p>Subtotal</p>
                        <p>R$ 00,00</p>

                    </div>
                    <h1>Forma de pagamento</h1>
                    <form>
                        <label>Dinheiro</label>
                        <input type="checkbox" id="11" value="dinheiro" />
                        <label>Cartão credito</label>
                        <input type="checkbox" id="12" value="cartao credito" />
                        <button>confirmar </button>
                    </form>
                </div>
*/