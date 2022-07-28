import { Menu } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Headers/Headers";
import MenuMain from '../../Components/Menu/Menu'
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { useRequestData } from "../../Hooks/useRequestData";
import { goToProfileEdit } from "../../Routes/coordinator";
import { Main, Perfil, PerfilPessoa, EnderecoPessoa, HistoricoCompras, Informacoes } from "./styled"
//   <Header title={"meu perfil"} />
const Profile = () => {
    useProtectedPage()
    const navigate = useNavigate()
    
    const person = useRequestData({},`${BASE_URL}/profile`)
    //console.log(person);
    return (

        <Main>
         
             <Perfil>meu perfil</Perfil>
            <Informacoes>
                <PerfilPessoa>
                    <div>
                       <p>{person[0].user && person[0].user.name}</p>
                      
                       <p>{person[0].user && person[0].user.cpf}</p>
                      
                       <p>{person[0].user && person[0].user.email}</p>
                       
                    </div>
                    <div onClick={()=>goToProfileEdit(navigate, person[0].user.id)}>editar</div>
                </PerfilPessoa>
                <EnderecoPessoa>
                    <div>
                        <h4>Endereço cadastrado</h4>
                       
                        <p>{person[0].user && person[0].user.address}</p>
                    </div>
                    <div>editar</div>
                </EnderecoPessoa>
                <HistoricoCompras>HISTORICO </HistoricoCompras>

            </Informacoes>






            <MenuMain page={"profile"} />
        </Main>
    )
}
export default Profile