import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import PostDetalhe from "../pages/PostDetalhe";

// usar ctrl + espaço no final da palavra para chamar o auto import
//usei o /:id para virar um qery paramets , geralmente e usado o id
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/post/:id" element={<PostDetalhe />} />
            </Routes>
        </BrowserRouter>
    )
}