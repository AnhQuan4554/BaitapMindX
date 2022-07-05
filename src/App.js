import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'

import Api from './componet/EX1/Api';
import Api2 from './componet/Api2';
import Api3 from './componet/Api3';
import Scroll from './componet/Scroll';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from './componet/reacRounter/Header';
import Product from './componet/reacRounter/ProductDetail';
const App = () => {
 
  return (
    <>
        
        <BrowserRouter>
       <Header/>
        <Routes>
          <Route path="/Api" element={<Api />}/>
          <Route path="/Api/:productId" element={<Product/>}/>
          <Route path="/Api2" element={<Api2 />}/>
          <Route path="/Api3" element={<Api3 />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  
  )
}

export default App
