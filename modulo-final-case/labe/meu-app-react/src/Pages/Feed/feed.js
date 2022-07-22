import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../../Constants/url";
import { useState } from "react";
import { InputSearch, Menu, MenuItem } from "./styled";
import ContainerFeed, { CardsRestaurant } from "./styled";
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante";
import Header from "../../Components/Headers/Headers";
import { Category } from "@mui/icons-material";
const Feed = () => {
    const [restaurantes, setRestaurantes] = useState([])
    const [categoryRestaurant, setCategoryRestaurant] = useState([])
    const [valueCategory, setValueCategory] = useState('')
    const [inputText, setInputText] = useState('')
   // console.log(valueCategory);
    // FEITO PARA BUSCAR O ARRAY DOS RESTAURANTES!  
    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data);
                setRestaurantes(res.data.restaurants)
                filterCategory(res.data.restaurants)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const filterCategory = (restaurants) => {
        const arrayAux = []
        restaurants && restaurants.map((res) => {
            arrayAux.push(res.category)
        })
        const takeOutRepeat = [... new Set(arrayAux)]
        const ChangeObjectArray = []
        takeOutRepeat.map((category)=>{
            const insertObj ={category,select:false};
            ChangeObjectArray.push(insertObj)
        })
        setCategoryRestaurant(ChangeObjectArray)
    }
    // console.log(categoryRestaurant);

    //console.log(categoryRestaurant);
    //console.log(inputText);

    useEffect(() => {
        getRestaurants()
    }, [])

    const filtrandoRestaurante = restaurantes.filter((restaurant) =>
        //console.log(restaurant);
        inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()) : true

    )
    .filter((restaurant)=>
        valueCategory ? restaurant.category.toLocaleLowerCase().includes(valueCategory.toLocaleLowerCase()): true )
    .map((restaurant) => {
        return <CardRestaurante
            restaurant={restaurant}
        />
    })
    
const changeCategory =(category)=>{
    setValueCategory(category)
    const result = categoryRestaurant.map((cat)=>{
        if(cat.category === category){
            
            return{
                ...cat,
                select:true
            }
        }else{
            return{
                ...cat,
                select:false
            }

        }
       
    })
    setCategoryRestaurant(result);
 }

    //console.log(filtrandoRestaurante);

    return (
        <ContainerFeed>
            <Header title={"IfuturE"} />
            <CardsRestaurant>
                <InputSearch
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                />
                <Menu>
                <MenuItem
                 onClick={()=>changeCategory('')}
                >
               
                Todos
                </MenuItem>

                    {categoryRestaurant.map((category) => {
                        //console.log(category.select);
                        return (
                            < MenuItem
                                select={category.select}
                                onClick={()=>changeCategory(category.category)}
                            >
                                {category.category}
                            </MenuItem>
                        )
                    })}



                </Menu>
                {filtrandoRestaurante}

            </CardsRestaurant>
        </ContainerFeed>
    )
}
export default Feed