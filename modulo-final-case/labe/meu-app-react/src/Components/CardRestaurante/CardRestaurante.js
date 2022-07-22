import { useNavigate } from "react-router-dom"
import { goToRestaurant } from "../../Routes/coordinator"

import { BoxInformTimePrice, ContainerCardRestaurante, ImagemRestaurant,  InformTimePrice, NomeRestaurant } from "./styled"
const CardRestaurante = ({ restaurant }) => {
const navigate = useNavigate()
    return (
     <ContainerCardRestaurante onClick={()=>goToRestaurant(navigate,restaurant.id)}>
        <ImagemRestaurant src={restaurant.logoUrl} />
        <NomeRestaurant>{restaurant.name}</NomeRestaurant>
        <BoxInformTimePrice>
         <InformTimePrice>{restaurant.deliveryTime}</InformTimePrice>
        <InformTimePrice>{restaurant.shipping}</InformTimePrice>
         </BoxInformTimePrice>



     </ContainerCardRestaurante >
    )
}
export default CardRestaurante