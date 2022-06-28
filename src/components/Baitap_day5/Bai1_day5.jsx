import React,{useState} from 'react'

const Bai1_day5 = () => {
  const[text,SetText] = useState("");
  const handleText = (e)=>{
    SetText(e.target.value)
  }
  return (
    <div>
        <input type="text" name='text' onChange={handleText} />
        <h1>{text}</h1>
    </div>
  )
}

export default Bai1_day5