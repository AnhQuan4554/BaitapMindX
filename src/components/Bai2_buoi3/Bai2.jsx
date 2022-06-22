import React from 'react'
import './Bai2.css'
const Bai2 = ({products}) => {
  return (
    <div className='container'>
        <img src={products.image} alt="" />
        <div className="content">
        <h2>{products.title}</h2>
        <p className='category'>{products.category}</p>
        <p className='price '>{products.description }</p>
        <p className='price '>{products.price }$</p>
        </div>
    </div>
  )
}

export default Bai2