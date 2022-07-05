import React,{useState,useEffect} from 'react'

const Scroll = () => {
    const [isButton, setIsButton] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
             const scrollTop  = document.documentElement.scrollTop
             console.log(scrollTop)
             console.log('okok')
             if(scrollTop>0)setIsButton(true)
             else setIsButton(false)
            }
            document.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
   
   /*  useEffect(()=>{
        console.log('okokok')
            setScroll(scrollTop)
    },[scrollTop]) */
  return (
    <div>
        <div  className="scroll" style={{height :'2000px',backgroundColor : 'green'}}></div>
        {isButton && <button style={{
            backgroundColor:'#fff',
            width : '500px',height:`50px`,position:'fixed',bottom : 0 }} >
            
            CÓ rồi nè</button> }
    </div>
  )
}

export default Scroll