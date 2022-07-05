import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='headerApi' >
            
            <Link to="/Api"><span>Api Bài 1</span></Link>
            <Link to="/Api2"><span>Api2 Bài 2</span></Link>
            <Link to="/Api3"><span>Api3 Bài 3</span></Link>
    </div>
  )
}

export default Header