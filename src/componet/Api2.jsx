import React,{useState} from 'react'

const Api2 = () => {
    const [infor, setInfor] = useState(null)
    const dataFake2  = async()=>{
        const response  = await fetch(`https://jsonplaceholder.typicode.com/todos`)
        const store = await response.json()
        setInfor(store)
    }

  return (
    <>
    <button onClick={dataFake2}>CLick me </button>
    <div className='contaier2'>
            {infor && infor.map(iteam=>(
                <div className="wrapIteam">
                    <span>{iteam.userId}</span>
                    <p>iteam.title</p>
                    <span>iteam.completed</span>
                </div>
            ))}
       
    </div>
    </>
  )
}

export default Api2