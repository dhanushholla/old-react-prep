import React, { useReducer } from 'react'

const Counter = () => {
    const reducerfn = (state,action)=>{
        switch(action.type){
            case 'increment':
                return {count: state.count+1}
                case 'increment5':
                    return {count: state.count+action.payload}
                    case 'decrement':
                return {count: state.count-1}
                case 'decrement5':
                return {count: state.count-action.payload}
            default:
                return {count:0}
        }

    }
    const [state,dispatch]=useReducer(reducerfn,{count:0})
    
  return (
    <>
    <div>Counter value:{state.count}</div>
    <button onClick={()=>dispatch({type:'increment'})}>+1</button>
    <button onClick={()=>dispatch({type:'increment5',payload:5})}>+5</button>
    <button onClick={()=>dispatch({type:'decrement'})}>-1</button>
    <button onClick={()=>dispatch({type:'decrement5',payload:5})}>-5</button>
    </>

  )
}

export default Counter