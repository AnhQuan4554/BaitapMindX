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
const arrColor = ['red','yellow','green'];
function App() {
 

  return (
    <>
      {/* Bài 1  */}
        <Trenlop_day4/>
        
        <div className='bai2'>
              <Bai2_day4/>
        </div>
        <div className='bai3'>
             <Bai3_day4/>
        </div>

   </>
  );
}

export default App;
