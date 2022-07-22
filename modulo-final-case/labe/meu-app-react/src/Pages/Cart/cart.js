import React from "react";
import { Main, MainCart ,CartConfig, InfoProfile} from "./styled";
import {useRequestData} from "../../Hooks/useRequestData"
import { BASE_URL } from "../../Constants/url";
const Cart = () => {
const profile = useRequestData({}, `${BASE_URL}/profile`)
//console.log(profile[0].user);


    return (

        <Main>
            <MainCart>
                <p>Meu carrinho</p>
            </MainCart>
            <CartConfig>
                <InfoProfile>
                    <p>Endereço de entrega</p>
                    <p>{profile[0].user && profile[0].user.address}</p>
                </InfoProfile>
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

            </CartConfig>

        </Main>


    )
}
export default Cart