import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ORNAZ_App from './ALL-Theme/ORNAZ/ORNAZ_App'
import SMININGROCKS_App from './ALL-Theme/SMININGROCKS/SMININGROCKS_App'

export default function ThemeRoutes() {
  return (
    <div>
      <div>
        {false && <ORNAZ_App />}
      </div>
      <div>
        {true && <SMININGROCKS_App />}
      </div>
    </div>
  )
}
