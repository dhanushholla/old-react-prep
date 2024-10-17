import React, { useEffect, useState } from 'react'

const Tablecomp = () => {
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(true);
    const [heading,setheading]=useState([])
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result =await res.json();
                setData(result);
                setheading(Object.keys(result[0]))
                setLoading(false);
            }catch(err){
                console.log(err)
            }
        }
        fetchData();  
    },[])
  return (
    <div>Tablecomp
        {loading?<div>loading</div>:<div>loading complete
            <table style={{border:'1px solid black',borderCollapse:'collapse'}}>
                <thead>
                    <tr style={{border:'1px solid black',borderCollapse:'collapse'}}>
                    {heading.map(head => <th style={{border:'1px solid black',borderCollapse:'collapse'}}key={`${head}`}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index) =>(
                    <tr key={`row_${index}`} style={{border:'1px solid black',borderCollapse:'collapse'}}>
                        {Object.keys(row).map((val,index)=><td style={{border:'1px solid black',borderCollapse:'collapse'}} key={`col_${index}`}>{row[val]}</td>)}
                    </tr>))}
                </tbody>
            </table>
            </div>}
    </div>
  )
}

export default Tablecomp