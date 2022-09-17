import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import {OgContext} from "./contexts/OgContext"
import User from './pages/User';
import Product from './pages/Product';
function App() {
  
  const [auth,setAuth]= useState(null)
  return (
    <>
    <OgContext.Provider value={{auth,setAuth}}>
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />

        <Route path="/login" element={<Login />} />
        <Route path="/:slug" element={<User />} />
      </Routes>
      
    </BrowserRouter>
    </OgContext.Provider>
    
    </>
  );
}

export default App;
