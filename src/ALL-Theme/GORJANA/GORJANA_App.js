import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'

export default function GORJANA_App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    )
}
