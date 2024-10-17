import React, { useState } from 'react'

const Pagination = () => {
  const perpageLength = 10;
  const totalData =200;
  const [page,setPage]=useState(1)
  return (
    <>
    current Page :{page}
    <div style={{display:'flex',gap:'0.5rem'}}>
    <button onClick={()=> page>1?setPage(page-1):''}  style={{background: page<2 ?'black':''}}>{'<'}</button>
      {[...Array(totalData/perpageLength)].map((ele,index)=> <button style={{background : page==index+1? 'yellow':''}} onClick={()=> setPage(index+1)} key={`${ele}_${index}`}>{index+1}</button>)}
    <button onClick={()=> page<(totalData/perpageLength)?setPage(page+1):''}  style={{background: page<(totalData/perpageLength)?'':'black'}}>{'>'}</button>
    </div>
    <div>Products Fetch assumption as {page*10-10} to {page*10} </div>
    </>
  )
}

export default Pagination