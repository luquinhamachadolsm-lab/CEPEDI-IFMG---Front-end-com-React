import { useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import CarProducts from './pages/CarProducts.jsx'
import Products from './pages/Products.jsx'
import BikeProducts from './pages/BikeProducts.jsx'
import Info from './pages/Info.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/customer/Emil">Emil</Link> |{" "}
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link>
      </nav>
        <Routes>
          <Route path= '/' element ={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
          <Route path= '/Contact' element ={<Contact/>} />
          <Route path= '/About' element ={<About/>} />
          <Route path="/customer/:firstname" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
