//import { AlternateEmail, SettingsSystemDaydreamOutlined } from "@mui/icons-material";
import { Alert, TextField } from "@mui/material";

import React, { useState } from "react";

import Header from "../../Components/Headers/Headers";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { useRequestData } from "../../Hooks/useRequestData";


import {Form, Principal,ButtonStyled  } from "./styled"


const ProfileEddit = () => {
    
    const person = useRequestData({},`${BASE_URL}/profile`)
    console.log(person[0].user);


    const { form, onChange, clean } = useForm({
        "name": "",
        "email": "",
        "cpf": ""
        
    })
   const onSubmitForm =(event)=>{
    event.preventDefault()
   
    
   }
    return (
    
        <div>
                <Header title={"Editar "} back/>
            <br></br><br></br>

                <Principal>
        
            
           
                       < Form onSubmit={onSubmitForm }>
                <TextField
                    id="outlined-basic"
                  
                    name="name"
                    type={"text"}
                   
                    variant="outlined"
                    value={person[0].user && person[0].user.name}
                    onChange={onChange}
                   
                />
                 <br></br>
                <TextField
                    id="outlined-basic"
                    
                    name="email"
                    type={"email"}
                  
                    variant="outlined"
                    value={person[0].user && person[0].user.email}
                    onChange={onChange}
                    required
                />
                 <br></br>
                <TextField
                    id="outlined-basic"
                    
                    name="cpf"
                    type={"text"}
                    // testar se o patern ira funcionar para o cpf
                   
                    variant="outlined"
                    value={person[0].user && person[0].user.cpf}
                    onChange={onChange}
                    required
                />
               

                
                 


             <br></br>
                <ButtonStyled
                    type={"submit"}
                >
             
                    Salvar
                </ButtonStyled>







            </Form>
        </Principal>
        </div>
    )
}
export default ProfileEddit