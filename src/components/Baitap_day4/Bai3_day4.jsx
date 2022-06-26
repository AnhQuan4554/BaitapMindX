import React,{useState}  from 'react'

const Bai3_day4 = () => {
    const [circle,setCircle] = useState(true);
    const handleCircle = ()=>{
        setCircle(!circle);
    }
  return (
    <div ><span className={`${circle&&'circle1'}`}></span>
        <button onClick={handleCircle}>Click</button>

    </div>
    
  )
}

export default Bai3_day4