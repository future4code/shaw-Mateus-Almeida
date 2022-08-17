import { Category } from "./styled"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import {CardProduct} from "../../Components/CardProduct/CardProduct";
import CardRestauranteDetails from "../../Components/CardRestaurantDetai/CardRestaurantDetails";
import ProdutoCard from "../../Components/ProdutosCard/ProdutosCard";
import { BASE_URL } from "../../Constants/url";
import {  ConteinerRestaurant, CardRestaurant, SectionProductByCategory } from "./styled";
import Header from "../../Components/Headers/Headers";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
const Restaurant = () => {
    const { restaurantId } = useParams()
    const [restaurant, setRestaurant] = useState({})
    const [categories,setCategories]=useState([])


    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants/${restaurantId}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
            .then((res) => {
                setRestaurant(res.data.restaurant)
                //console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getRestaurants()
    }, [])
    useEffect(()=>{
         if (restaurant.products){
            const newCategories =[]
            for(const product of restaurant.products){
                //console.log(product.category);
                if(!newCategories.includes(product.category)){
                    newCategories.push(product.category);
                }
               
            }
            setCategories(newCategories)
            //console.log(newCategories);
         }
    },[restaurant])
     //console.log(categories);

    //console.log(restaurant);
// o erro esta no component  do cardProduct
    return (
        <ConteinerRestaurant >
            <Header title={"restaurante"} back={true}/>
            <CardRestaurant >
            <CardRestauranteDetails restaurant={restaurant} />
            {
                restaurant.products
                 &&
                 categories.map((category)=>{
                    return<SectionProductByCategory>
                        <Category>{category}</Category>
                        {

                            restaurant.products

                            .filter((product)=>{
                                return product.category === category
                            })

                            .map((product)=>{
                                //return <CardProduct product={product}/>
                                return <ProdutoCard 
                                product={product}
                                 key={product.id}
                                 restaurant={restaurant}
                              
                                />
                        })
                    }
                    </SectionProductByCategory>
                 })
            }
          

            </CardRestaurant>
          
        </ConteinerRestaurant >
    )
}
export default Restaurant

/*



{
            restaurant &&  restaurant.products && restaurant.products.map((product)=>{
               //return <CardProduct product={product}/>
               return <ProdutoCard product={product} key={product.id}>
                
               </ProdutoCard>
                
            })
         }






         */





























/*
 {
            restaurant.products.map((product)=>{
                return <CardProduct product={product}/>
            })
         }

*/
/*
 restaurant &&  restaurant.products && restaurant.products.map((product)=>{
               //return <CardProduct product={product}/>
               return <ProdutoCard>
                <p>{product.name}</p>
                <img src={product.photoUrl}/>
               </ProdutoCard>
                console.log(product);
            })
         }
*/