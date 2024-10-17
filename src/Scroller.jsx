import React, { useEffect, useState } from 'react'

const Scroller = () => {
    const[topval,setval]=useState();
    useEffect(()=>{
        function calculate(){
            let scrolledLength = window.scrollY;
            let innerHeight = window.innerHeight;
            let res = innerHeight/2 +scrolledLength;
            console.log(res)
            setval(res)
        }
        calculate();
        window.addEventListener('scroll',calculate)
        return () =>{
            window.removeEventListener('scroll',calculate)
        }
    },[])
  return (
    <div className='clicker' style={{ top:`${topval}px`}}>
        <button>Click ME!</button>
    </div>
  )
}

export default Scroller