import React from 'react'
import './Style_buoi2.css'
const Bai3_buoi2 = ({textH1,textp,img}) => {
  return (
    <div className='container'>
        <div className="left">
                <h1>{textH1}</h1>
                <p>{textp}</p>
        </div>
      
                <img src={img} alt="" />
       
    </div>
  )
}

export default Bai3_buoi2