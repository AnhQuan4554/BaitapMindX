import React,{useState} from 'react'
import './day5.css'




const arrIteam = ['']; //mảng ban đầu 

const Bai2_day5 = ({nameTitle}) => {
    const[iteam,SetIteam] = useState("")
    const handleIteam = (e)=>{
        SetIteam(e.target.value)
        
    }
    const [arrIteam2, setaArrIteam2] = useState(arrIteam) // gia tri trung gian với arr ban đầu 
    ////////////// thêm  các iteam vào
    const   addIteam = ()=>{
        setaArrIteam2([...arrIteam2,iteam]);
    }

    /////// Xóa các iteam
    const deleteIteam = (e)=>{
        
        console.log(e.target.id) //index thẻ cần xóa 
        const indexDelete = e.target.attributes.id
        console.log(indexDelete)
        // setaArrIteam2(arrIteam2.filter((iteam,index)=>index))
        console.log(arrIteam2)
    }


    return (
    <div className='Buoi5'>
      
            <h1>{nameTitle}</h1>
            <div className="type">
                    <input type="text" 
                    placeholder='Nhập việc muốn làm'
                    onChange={handleIteam}
                    value={iteam}
                />
                <button onClick={addIteam}>ADD</button>
            </div>
            <div className="display">

                {arrIteam2.map((iteam,index)=>(
                    <div key={index}  className="wrapIteam">
                        <div key={index} >{iteam}</div>
                        {iteam!==""&& 
                            <i cd  className='bx bx-x-circle delete' index = {index} id={index} onClick={deleteIteam} ></i>
                        }
                    </div>
                    ))}
            </div>
           
    </div>
  )
}

export default Bai2_day5