import React,{useState} from 'react'
import './day5.css'
import { toast } from 'react-toastify';
import{RiTodoLine}from 'react-icons/ri';
import IteamBai2 from './IteamBai2';


const Bai2_day5 = () => {
    const age= 18;
    const [test, settest] = useState({
        name: 'Quan',
        age,
    })
    const [arrIteams, setArrteams] = useState([]);// mảng chứa các phần tư 
    const [valueInput, setValueinput] = useState("");// giá trị nhập vào input
    //sử lí khi nhập dũ liệu mới
    const handleInput = (e)=>{
        setValueinput(e.target.value);
    }
   
    //thêm phần tử mới vào mảng
    const handleSubmit = (e)=> {
        e.preventDefault();
         if(!valueInput){
            toast.error("Can nhap thong tin");
            return ;
         }
        const valueInput_new ={
            name :valueInput ,
            completed: false,
            id : new Date(),
        }
           
        setArrteams([valueInput_new,...arrIteams ]);
        setValueinput("")
        // console.log(arrIteams)
    }
   
    /// Kiêm tra xem phần tử đó có được đánh dấu hay không
    const handelChecked = (id)=>{//id này là biến tương đương biên irteam bài 2 
            // console.log(id);
          setArrteams(arrIteams.map(iteam=>(iteam.id===id ? {...iteam,completed : !iteam.completed}:iteam)))
    } 
    //xóa phần tử 
    const handelDelete = (id)=>{
        const checkIteam = arrIteams.find((iteam)=>(iteam.id===id))

        if(checkIteam.completed==false){
            toast.error("không thể xóa")
            return ;
        }

        setArrteams(arrIteams.filter(iteam=>(iteam.id != id )))
    }
    console.log(arrIteams)
  return (
    <div className='Bai2_day5'>
     
        <div className="wrap_Bai2_day5">

            <h1><span>TODO</span> <RiTodoLine/></h1>
            <form onSubmit={handleSubmit}>
                    <input type="text"
                    placeholder="Nhập nhiệm vụ "
                    onChange={handleInput} 
                    value={valueInput} 
                    
                    />
                    <button type='submit' >ADD</button>
            </form>
            <div className="display">
                    {arrIteams.map((iteam,index)=>(
                        <IteamBai2 key={iteam.name}  iteam = {iteam}
                        handelChecked = {handelChecked}
                        handelDelete = {handelDelete}
                        />
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Bai2_day5