import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car.jsx'
import Moto from './components/Moto.jsx'
import FavoriteColor from './components/FavoriteColor.jsx'

function App() {
  return (
    <>
    <Car brand="Ford" model="Mustang" color="red" year={1969} />
    <Moto  brand="Honda" />
    <FavoriteColor/>
    </>
  )
}


export default App
