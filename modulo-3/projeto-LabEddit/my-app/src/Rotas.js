import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Feed from "./Feed";
import Post from "./Post";

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