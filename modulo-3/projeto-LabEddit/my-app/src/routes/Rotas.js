import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Feed from "../pages/Feed";
import Login from "../pages/Login";
import Post from "../pages/Post";

// usar ctrl + espaço no final da palavra para chamar o auto import
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/post" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}