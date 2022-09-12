import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from './components/Products';
import Cart from './components/Cart';

export default function App() {
  return (
  
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>  
    
  )
}


