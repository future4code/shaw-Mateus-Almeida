import { useNavigate } from "react-router-dom"
import { goToRestaurant } from "../../Routes/coordinator"
import { BoxInformTimePrice, ContainerCardRestauranteDetails, ImagemRestaurant, Inform, NomeRestaurant } from "./styled"
const CardRestauranteDetails = ({ restaurant }) => {
const navigate = useNavigate()
    return (
     <ContainerCardRestauranteDetails onClick={()=>goToRestaurant(navigate,restaurant.id)}>
        <ImagemRestaurant src={restaurant.logoUrl} alt={`logo ${restaurant.name}`} />
        <NomeRestaurant>{restaurant.name}</NomeRestaurant>
        <Inform>{restaurant.category}</Inform>
        <BoxInformTimePrice>
         <Inform>{restaurant.deliveryTime}</Inform>
        <Inform>{restaurant.shipping}</Inform>
         </BoxInformTimePrice>
         <Inform>{restaurant.address}</Inform>



     </ContainerCardRestauranteDetails >
    )
}
export default CardRestauranteDetails