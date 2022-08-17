import { useNavigate } from "react-router-dom"
import { goToCart, goToFeed, goToProfile } from "../../Routes/coordinator"
import { BoxInform } from "../ProdutosCard/styled"
import {
    BoxInformacao,
    ClockStyled,
    OrderContainerSpace,
    OrderContainer,
    Tittle,
    TotalPrice,
    RestaurantName
} from "./styled"

const Order = ({ totalPrice, restaurantName }) => {
    const navigate = useNavigate()
    return <>

        <OrderContainer>
            <ClockStyled />
            <BoxInformacao>
                <Tittle>
                    pedido-em-andamento
                </Tittle>
                <RestaurantName>{restaurantName}</RestaurantName>
                <TotalPrice>
                    Subtotal r${totalPrice}
                </TotalPrice>
            </BoxInformacao>

        </OrderContainer>
        <OrderContainerSpace />
    </>
}
export default Order