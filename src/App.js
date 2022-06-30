import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Bai1_day5 from './components/Baitap_day5/Bai1_day5';
import Bai2_day5 from './components/Baitap_day5/Bai2_day5';
const arrColor = ['red','yellow','green'];

function App() {
 

  return (
    <>

      {/* <Bai1_day5/>
        <p>------------------------</p> */}
        <Bai2_day5 nameTitle = 'TODO' />
        <ToastContainer />

   </>
  );
}

export default App;
