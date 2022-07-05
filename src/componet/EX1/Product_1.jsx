import React from 'react'
import { Link } from 'react-router-dom'

export const Product_1 = ({iteam}) => {
  return (
    <Link to={`/Api/${iteam.id}`}>
        <div className="warpIteam" key={iteam.id} >
                <h4>{iteam.title}</h4>
                <div className="iteamMid">
                    <img src={iteam.image} alt="" />
                    <p>{iteam.description}</p>
                </div> 
        </div>
    </Link>
  )
}
