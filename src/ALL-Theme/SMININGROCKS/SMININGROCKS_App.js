import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Components/home'
import Impact from './Pages/Components/Impact'

export default function SMININGROCKS_App() {
    return (
        <div style={{backgroundColor : '#c0bbb1'}}> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/impact" element={<Impact />} />
            </Routes>
        </div>
    )
}
