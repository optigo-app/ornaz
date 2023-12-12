import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'
import JewelryPage from './Pages/Components/jewelry/JewelryPage'

export default function GORJANA_App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jewelry" element={<JewelryPage />} />
            </Routes>
        </div>
    )
}
