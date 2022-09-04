import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Login from './pages/Login';
import {OgContext} from "./contexts/OgContext"
function App() {

  const [auth,setAuth]= useState(false)
  return (
    <>
    <OgContext.Provider value={{auth,setAuth}}>
    <BrowserRouter>
    <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
  
      </Routes>
    </BrowserRouter>
    </OgContext.Provider>
    
    </>
  );
}

export default App;
