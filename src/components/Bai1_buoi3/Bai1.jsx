import React from 'react'
import './Bai1.css'
const Bai1 = ({products}) => {
  return (
    <>
    <h1>Sản phẩm thứ {products.id}</h1>
    <h3>Name: {products.name}</h3>
    <h3>username: {products.username}</h3>
    <h3>email : {products.email}</h3>
    <h3>street : {products.address.street}</h3>
    </>
  )
}

export default Bai1