
import React, {useState} from 'react';
const Bai2_day4 = () => {
    const arr2 = [0,1,2,3,4,5]
    
    const [checked,setChecked] = useState(0);
    const handleClick  = ()=>{
        // setChecked(checked == 5 ? 0 : checked+1);
       setChecked(checked +1)
      
    }
    console.log(checked)
    
    return (
    <>
        {arr2.map((iteam,index)=>(
            <span key={index} className={`${index===checked && 'active'}`}></span>
        ))}
        <button onClick={handleClick}>Click</button>
    </>
  )
}

export default Bai2_day4