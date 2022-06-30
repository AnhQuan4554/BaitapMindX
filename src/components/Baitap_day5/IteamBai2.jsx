import React,{useState} from 'react'
import { toast } from 'react-toastify';
import './day5.css'
import{RiDeleteBin6Line}from 'react-icons/ri';

const IteamBai2 = ({iteam,handelChecked,handelDelete}) => {

  return (
    <div className='wrapIteam' >
        <div className="left" style={{opacity :iteam.completed && 0.3}}>
            <input type="checkbox" name="checkbox" onChange={(e)=>(handelChecked(iteam.id))} />
            
            <span style={{textDecorationLine : iteam.completed && 'line-through' } }>
              {iteam.name}
            </span>
        </div>
        <div className="righ">
                <RiDeleteBin6Line fontSize='22px' onClick={()=>(handelDelete(iteam.id))} 
                  style = {{opacity :iteam.completed===false && 0.3}}
                />
        </div>
    </div>
  )
}

export default IteamBai2