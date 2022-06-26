import React, { useState } from 'react'
// import React,{useState} from 'react';

const Trenlop_day4 = () => {
  const arr = [1,2,3,4,5,6]
  const[ok,setOK]= useState(arr);
  console.log(ok)
  // const[form,setForm] = useState(arr);
 
  return (
    <>
        {arr.map((item,index)=>{
          return <span key ={index} className={`${index%2==0 ? 'spare ': 'circle'}`}></span>
       })}
   </>
  )
}

export default Trenlop_day4