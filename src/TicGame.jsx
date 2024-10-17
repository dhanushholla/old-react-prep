import React, { useState } from 'react'
import './board.css'
const TicGame = () => {
    const [boxes,setBoxes]=useState([...Array(9).fill(null)])
    const [isXnext,setNext]=useState(true);
    const [message,setMessage]=useState('')
    const setData = (index) =>{
        const winner = calculate();
        winner ? setMessage(winner):''
        if(winner || boxes[index]) return;
        const ele = [...boxes];
        isXnext? ele[index]='x': ele[index]='o'
        setBoxes(ele)
        setNext(!isXnext)
    }
    const reset =() =>{
        setBoxes([...Array(9).fill(null)])
        setNext(true);
        setMessage('')
    }
    const calculate = () =>{
        let winnerTrack = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<winnerTrack.length;i++){
            const [a,b,c]=winnerTrack[i];
            if(boxes[a] && boxes[a] == boxes[b] && boxes[a] == boxes[c]){
                return boxes[a]
            }
        }
        return null;
    }
  return (
    <div className='board'>
        {boxes.map((box,index)=><button style={{padding:'2rem'}} onClick={()=>setData(index)} disabled={box!=null} key={index}>{box}</button>)}
        <button onClick={() => reset()}>Reset</button>
        <div>Result = {boxes.every(ele => ele != null)?'DRAW please reset':message}</div>

    </div>
  )
}

export default TicGame