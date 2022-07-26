
//import { ConteinerCardProduct, BoxInformTimePrice, ContainerCardRestauranteDetails, ImagemRestaurant, Inform, NomeRestaurant } from "./styled"
//import styled from "styled-components"

//import { ProductionQuantityLimits } from "@mui/icons-material"
import { useState } from "react"
import { useGlobal } from "../../Context/Global/GlobalStateContext"
import ModalSelectQuantity from "../ModalSelectQuantity/ModalSelectQuantity"


import {
    BoxInform,
    BoxInformPriceButton,
    BoxNameQuantity,
    CardProduto,
    ImageProduct,
    InformAddItemButton,
    InformButton,
    InformDescription,
    InformPrice,
    InformRemoveItemButton,
    NameProduct,
    QuantidadeItens
} from "./styled"


const ProdutoCard = ({ product, restaurant }) => {

    const [showModal, setShowModal] = useState(false)
    //const   requests  = useGlobal()
    //const  addToCart  = requests
    const { requests, states } = useGlobal()
    const { addToCart, removeToCart } = requests
    const { cart } = states

    const choiceQuantity = (quantity) => {
        addToCart(product, quantity, restaurant)
        setShowModal(false)
    }

    const productInCart = cart.find((productCart) => productCart.id === product.id)
    console.log(productInCart);

    return <CardProduto>
        <ImageProduct src={product.photoUrl} />
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{product.name}</NameProduct>
                {

                    productInCart &&<QuantidadeItens>{productInCart.quantity}</QuantidadeItens>
                    }
            </BoxNameQuantity>

            <InformDescription>
                {product.description}
            </InformDescription>
            <BoxInformPriceButton>
                <InformPrice>
                    R$ {product.price}
                </InformPrice>
                {
                    productInCart ?
                    <InformRemoveItemButton onClick={()=>removeToCart(product.id)}>
                        Remover
                    </InformRemoveItemButton>
                        :
                    <InformAddItemButton onClick={() => setShowModal(true)}>
                        adicionar
                    </InformAddItemButton>

                }
            </BoxInformPriceButton>

            <ModalSelectQuantity choiceQuantity={choiceQuantity}
                open={showModal}
                setOpen={setShowModal}

            />
        </BoxInform>
    </CardProduto>



}

export default ProdutoCard