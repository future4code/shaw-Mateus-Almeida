import { BrowserRouter, Route,  Routes } from "react-router-dom";
import DiadeSorte from "../DiaDeSorte/DiaDeSorte";
import LotoFacil from "../Lotofacil/LotoFacil";
import LotoMania from "../LotoMania/LotoMania";
import Megasena from "../Mega-sena/MegaSena";
import Quina from "../Quina/Quina";
import TimeMania from "../TimeMania/TimeMania";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Megasena />} />

                <Route path="/Quina" element={<Quina />} />

                <Route path="/LotoFacil" element={<LotoFacil />} />

                <Route path="/LotoMania" element={<LotoMania />} />

                <Route path="/TimeMania" element={<TimeMania />} />

                <Route path="/DiadeSorte" element={<DiadeSorte />} />

                


            </Routes>
        </BrowserRouter>
    )
}