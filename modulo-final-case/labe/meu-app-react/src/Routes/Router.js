import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from "../Pages/Cart/cart"
import Feed from "../Pages/Feed/feed"
import Login from "../Pages/Login/login"
import Profile from "../Pages/Profile/profile"
import Restaurant from "../Pages/Restaurant/restaurant"
import SingUp from "../Pages/SingUp/singUp"
import SingUpAdress from "../Pages/SingUpAdress/signUpAdress"
 // criando o router , para fazer as rotas da pagina!
const Router = () => {
 return(
    <BrowserRouter>

        <Routes>
          <Route index path="/" element ={<Login/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/singUp" element={<SingUp/>}/>
          <Route path="/singUp/adress" element={<SingUpAdress/>}/>
          <Route path="/adressEdit/:id" element={<adressEdit/>}/>
         
          <Route path="/feed/:restaurantId" element={<Restaurant/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profile/:id" element={<goToProfileEdit/>}/>
          <Route path="/cart" element={<Cart/>}/>

        </Routes>

    </BrowserRouter>
 )

}
export default Router