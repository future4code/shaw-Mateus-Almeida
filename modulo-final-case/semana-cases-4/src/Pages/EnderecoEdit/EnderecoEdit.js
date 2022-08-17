import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../../Components/Headers/Headers";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToProfile } from "../../Routes/coordinator";
import { ButtonStyled, Form, Principal } from "./styled";

const EnderecoEdit = () => {
   
   const getAdress =useRequestData({},`${BASE_URL}/profile/address`)
   //console.log(getAdress);
   const navigate= useNavigate()

   const {form , onChange,clean, setForm}= useForm({

    "street": "",
    "number": "",
    "neighbourhood": "",
    "city": "",
    "state": "",
    "complement": ""
})

   const getEndereco = async ()=>{
    await axios.get(`${BASE_URL}/profile/address`,{
        headers:{
            auth:localStorage.getItem(`token`)
        }
    })
    .then((res) => {
        console.log(res.data);
        setForm({
            "street": res.data.address.street ,
            "number": res.data.address.number ,
            "neighbourhood": res.data.address.neighbourhood ,
            "city": res.data.address.city ,
            "state": res.data.address.state ,
            "complement": res.data.address.complement
        })

    })
    .catch((err) => {

      console.log(err.response.data);
    })
   }

useEffect(()=>{
   
    getEndereco()
   
},[])



 const onSubmitFormAdress =(event)=>{
    event.preventDefault();
    goEndereco()
   
 }

    
    const goEndereco = async ()=>{
        const token =localStorage.getItem('token')
       await  axios.put(`${BASE_URL}/address`,form , {
            headers:{
               auth: token
            }
        })

        .then((res) => {
            console.log(res.data)
            localStorage.setItem(`token`,res.data.token)
            
            goToProfile(Navigate)
            



        })
        .catch((err) => {

          console.log(err.response.data);
        })
    }

   
    return (
    
        <div>
                <Header title={"Editar "}back/>
                <Principal>
          
          
                <br></br><br></br><br></br><br>
                </br><br></br><br></br><br></br>
                <br></br>
               

            <Form onSubmit={onSubmitFormAdress}>
             
               
                
                <TextField

                    placeholder="Rua/av"
                    value={form.street}
                    onChange={onChange}
                    label="rua/av"
                    name="street"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="Numero"
                    value={form.number}
                    onChange={onChange}
                    name="number"
                    label="numero"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required
                />
                <br></br>
                <TextField
                    placeholder="apto/bloco"
                    value={form.neighbourhood}
                    onChange={onChange}
                    name="neighbourhood"
                    label="apto/bloco"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="bairro"
                    value={form.city}
                    onChange={onChange}
                   name="city"
                    label="bairro"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="cidade"
                    value={form.complement}
                    onChange={onChange}
                    name="complement"
                    label="cidade"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <TextField
                    placeholder="estado"
                    value={form.state}
                    onChange={onChange}
                    name="state"
                    label="estado"
                    type={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    required

                />
                <br></br>
                <ButtonStyled type={`submit`}>salvar</ButtonStyled>
            </Form>
        </Principal>




        </div>
    )
}
export default EnderecoEdit