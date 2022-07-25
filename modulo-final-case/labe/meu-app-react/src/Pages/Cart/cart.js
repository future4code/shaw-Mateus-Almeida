import React, { useState } from "react";
import { Main, MainCart ,CartConfig,InfoProfile, InfoRestaurant, CartInfo, EmptyCart, Payment, Freight, Total, Form } from "./styled";
import {useRequestData} from "../../Hooks/useRequestData"
import { BASE_URL } from "../../Constants/url";
import CardCart from "../../Components/CardCarrinho/CardCart";
import { Key } from "@mui/icons-material";
import { Button } from "@mui/material";
import Header from "../../Components/Headers/Headers";



const Cart = () => {
const profile = useRequestData({}, `${BASE_URL}/profile`)
const   [payment,setPaymant] =useState([])
const[paymentMethod,setPaymantMethod]=useState({
    'money':false,
    'creditcard':false,
})
const mockData =[
    {
        name:"mateus",
        price:40,
        photoUrl:'https://i.pining.com/474x/bc¹db¹d1/bcdbd1fcd7c67100dd5651b023ed72195.png',
        amount:2,
        description:'pao,carne,queijo,cebola,alface,milho'
    }
]
const onChangePayment=(event)=>{
    const newCheck ={...paymentMethod}
    newCheck[event.target.name]=event.target.checked
         const result =Object.keys(newCheck).filter((pay)=>{
            if(newCheck[pay]){
                return[pay, ...payment]
            }
         })
setPaymant(result)
setPaymantMethod(newCheck)
}

//console.log(profile[0].user);

console.log(payment);

    return (

        <Main>
            
                <Header title={"meu carrinho "} back/>
            
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
                    {mockData.length > 0 ? mockData.map((data)=>{
                        return (
                            <CardCart
                            name={data.name}
                            price={data.price}
                            photoUrl={data.photoUrl}
                            amount={data.amount}
                            description={data.description}
                            />
                        )
                    }) :<EmptyCart>carrinho vazio</EmptyCart>}
                </CartInfo>
              <Payment>
                <Freight>Frete{new Intl.NumberFormat('pt-BR',{
                    style:'currency',
                    currency:'BRL'
                }).format(6)}</Freight>
                <Total>
                    <p>Subtotal</p>
                    <p>{new Intl.NumberFormat('pt-Br',{
                    style:'currency',
                    currency:'BRL'
                }).format(10)}</p>
                </Total>
                    <h1>forma de pagamento </h1>
                    <hr/>
                    <Form>
                        {Object.keys(paymentMethod).map((key)=>{
                            const checked =paymentMethod[Key]
                            return(
                                <div key={key}>
                                    <input 
                                    checked={checked}
                                    name={key}
                                    type={'checkbox'}
                                    onChange={onChangePayment}
                                    />
                                    <label>{key}</label>
                                </div>
                            )
                        })}
                        <Button>confirmar</Button>
                    </Form>
              
              </Payment>

            </CartConfig>

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