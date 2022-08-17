import { BrowserRouter,Routes, Route  } from "react-router-dom";
import Detalhes from "../PaginaDetalhes/Detalhes";
import Principal from "../PaginaPrincipal/Principal";

 const Router = () => {
    return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Principal/>}/>
        <Route path="/Detalhes" element={<Detalhes/>}/>
    </Routes>
    </BrowserRouter>
    )
}
export default Router