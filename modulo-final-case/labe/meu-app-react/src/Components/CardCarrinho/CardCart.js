import { Button } from "@mui/material"
import React from "react"
import { Main, CardComponet, ImageCard, InfoCard } from "./styled"


 const CardCart =(props)=>{
    return(
        <Main>
            <CardComponet>
               <ImageCard src={props.photoUrl}/>
            </CardComponet>
            <InfoCard>
                <div>
                    <p>{props.name}</p>
                    <p>{props.amount}</p>
                </div>
                <div>
                    <p>{props.description}</p>
                </div>
                <div>
                    <p>{new Intl.NumberFormat('pt-BR',{
                        style:'currency',
                        currency:'BRL'
                    }).format(props.price)}
                    </p>
                    <Button>Remover</Button>
                </div>
            </InfoCard>
        </Main>
    )
 }
 export default CardCart