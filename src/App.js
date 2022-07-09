import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Input from './Form'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const keyValue = `keyValue`
  
  const data = localStorage.getItem(keyValue)//lấy  dũ liệu từ local
  
  const [arrStore, setArrStore] = useState([])
  useEffect(()=>{ // chỉ cần chạy 1 lần khi mới mở trang 
    data ? setArrStore(JSON.parse(data)):setArrStore([])

  },[])
  console.log("arrStore",arrStore[0])
  return (
    <>
      <Input arrStore={arrStore} setArrStore = {setArrStore} />
      <ToastContainer/>
   
    </>
  )
}

export default App
const Sh1 = styled.div`
  background-color : red;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;