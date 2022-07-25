
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
    InformButton,
    InformDescription,
    InformPrice,
    NameProduct
} from "./styled"


const ProdutoCard = ({ product}) => {

    const [showModal, setShowModal] = useState(false)
    //const   requests  = useGlobal()
    //const  addToCart  = requests
    const  requests = useGlobal()
    const   addToCart  = requests


    const choiceQuantity = (quantity) => {
        addToCart(product, quantity)
    }
    

    return <CardProduto>
        <ImageProduct src={product.photoUrl} />
        <BoxInform>
            <BoxNameQuantity>
                <NameProduct>{product.name}</NameProduct>
            </BoxNameQuantity>

            <InformDescription>
                {product.description}
            </InformDescription>
            <BoxInformPriceButton>
                <InformPrice>
                    {product.price}
                </InformPrice>
                <InformButton onClick={() => setShowModal(true)}>
                    adicionar
                </InformButton>
            </BoxInformPriceButton>

            <ModalSelectQuantity choiceQuantity={choiceQuantity}
                open={showModal}
                setOpen={setShowModal}
               
            />
        </BoxInform>
    </CardProduto>



}

export default ProdutoCard