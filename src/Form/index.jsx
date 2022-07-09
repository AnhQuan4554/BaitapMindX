import React,{useState,useEffect} from 'react'
import style from './style.css'
import { ToastContainer, toast } from 'react-toastify';

const Input = ({setArrStore,arrStore}) => {
  const keyValue = `keyValue`
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(!name ){
      // toast('🦄 Wow so easy!', {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   });
      alert('Hãy nhập họ và tên')
      console.log('nhập đi')
      return ;
    }
    if(!password ){
      // toast.error("Can nhap thong tin");
      alert('Hãy password')
      console.log('nhập đi')
      return ;
    }
    const user = { // biến này dùng để lưu vào localStore
      "id" : new Date(),
      name,
      password,
    }
  
    setArrStore([...arrStore,user])// them phần tử cho 
    // Sau mỗi submit thì xóa các giá trị trong input
    setName("")
    setPassword("")
  }

  // sau  mỗi lần mảng mới thì sẽ được cho vào local
  // chú ý là arrStore ở đay từ đầu đã được đọc ở dòng 12 bên app.js
  useEffect(()=>{
   localStorage.setItem(keyValue,JSON.stringify(arrStore))

 },[arrStore])



  return (
    <div className="wrapForm">

    <form onSubmit={handleSubmit} className='form'>
        <h2>Đăng kí đi chơi </h2>
        <div className="userName">

            <input type="text"
             onChange={(e)=>(setName(e.target.value))}
             value = {name}
             placeholder="Họ và tên"
             />
        </div>
        <div className="userPassword">
            <input type="text"
             onChange={(e)=>(setPassword(e.target.value))}
             value = {password}
             placeholder = "Mật khẩu"
             />
        </div>
        <button type="submit">REGISTER</button>
    <ToastContainer/>
    </form>
    </div>
  )
}

export default Input