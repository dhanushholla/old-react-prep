import React from 'react'
import { useState,useEffect } from 'react'
const Todo = () => {
    const [todoitems,setTodo]=useState([]);
    const [currentItem,setItem]=useState('');
    const [editflag,setEdit]=useState(0)
    const [editIndex,setEditIndex]=useState('');
    const addHandle =() =>{
        setTodo([...todoitems,currentItem]);
        setItem('')
    }
    const deleteItem =(index)=>{
        const newList = [...todoitems];
        newList.splice(index,1);
        setTodo(newList)
        localStorage.setItem('TodoList',JSON.stringify(newList))
    }
    const editItem =(index)=>{
        setEdit(1);
        const newList = [...todoitems];
        setItem(newList[index]);
        setEditIndex(index);
    }
    const saveEdit = ()=>{
        const newList = [...todoitems];
        newList.splice(editIndex,1,currentItem);
        setEditIndex('')
        setEdit(0);
        setTodo(newList);
        setItem('')
    }
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem('TodoList'))
        setTodo(items)
    },[])
  return (
    <div>
        <h2>TodoList</h2>
        <input type="text" value={currentItem} onChange={(e)=> {setItem(e.target.value);  localStorage.setItem('TodoList',JSON.stringify([...todoitems,e.target.value]))}}/>
        {!editflag?<button onClick={()=>addHandle()}>Add</button>:''}
        {editflag?<button onClick={()=>saveEdit()}>save</button>:''}
        <ul>
        {todoitems.length?
            todoitems.map((ele,index) => <li style={{gap:'2rem',display:'flex'}}key={index}>{ele}<span>
                <button onClick={() => editItem(index)}>edit</button>
                <button onClick={() => deleteItem(index)}>X</button></span></li>)
        :''}
        </ul>
        
    </div>
  )
}

export default Todo