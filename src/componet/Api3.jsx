import React,{useState} from 'react'

const Api3 = () => {
    const [infor, setinfor] = useState(null)
    const apiFake3 = async()=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const store = await response.json();
        setinfor(store)
    }
  return (
    <div className='contaier2'>
        <button onClick={apiFake3}> Click me</button>
       {infor && infor.map(iteam=>(
            <div key={iteam.id} className="wrapIteam">
                <h4>{iteam.title}</h4>
                <img src={iteam.url} alt="" />
                <img src={iteam.thumbnailUrl} alt="" />
            </div>
       ))}
    </div>
  )
}

export default Api3