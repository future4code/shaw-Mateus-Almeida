import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const useProtectedPage =()=>{
const navigate=useNavigate()
useEffect(()=>{
    const token=window.localStorage.getItem("token")
    if(token=null){
        navigate("/login")
    }
},[Navigate])


}
// parte 5 trelo , obs parte feita para o login ser feita de maneira correta e nao permitir o acesso
// a pessoas que nao tenham autorização