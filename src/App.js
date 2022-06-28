import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import './App.css'
import Bai1 from './components/Bai1_buoi3/Bai1';
import Bai2 from './components/Bai2_buoi3/Bai2';
import Bai1_buoi2 from './components/Baitap_buoi2/Bai1_buoi2';
import Bai2_buoi2 from './components/Baitap_buoi2/Bai2_buoi2';
import Bai3_buoi2 from './components/Baitap_buoi2/Bai3_buoi2';
import Trenlop_day4 from './components/Baitap_day4/Trenlop_day4';
import './components/Baitap_day4/Day4.css'
import Bai2_day4 from './components/Baitap_day4/Bai2_day4';
import Bai3_day4 from './components/Baitap_day4/Bai3_day4';
import Bai1_day5 from './components/Baitap_day5/Bai1_day5';
import Bai2_day5 from './components/Baitap_day5/Bai2_day5';
const arrColor = ['red','yellow','green'];

function App() {
 

  return (
    <>

      <Bai1_day5/>
        <p>------------------------</p>
        <Bai2_day5 nameTitle = 'TODO' />
   </>
  );
}

export default App;
