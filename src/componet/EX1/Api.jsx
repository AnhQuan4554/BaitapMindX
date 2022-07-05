import React ,{useState,useEffect} from 'react'
import '../EX1/Api.css'
import Header from '../reacRounter/Header'
import { Product_1 } from './Product_1'
import ReactLoading from 'react-loading';
const Api = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const dataFake = async()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const store = await response.json();
    setData(store)
    setIsLoading(false)
  }
  //không cần sử dụng đến nút bấm nữa 
  useEffect(()=>{
    dataFake();
  },[])
  return (
    <div >
     
      {/* <button onClick={dataFake}>Call API</button> */}
      <div className="wrapStore">
          {isLoading&& <div className="loading"><ReactLoading type={`spin`} color={`red`} height={667} width={375} /></div> }
        {data && data.map((iteam)=>(
          <Product_1  key={iteam.id} iteam = {iteam} />
        ))}

      </div>
    </div>
  )
}

export default Api