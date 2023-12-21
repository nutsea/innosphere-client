import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Price from "./pages/Price";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/price" element={<Price />} />
        </Routes>
    );
}

export default AppRoutes;