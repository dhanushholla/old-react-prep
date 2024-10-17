
import './App.css'
import Scroller from './Scroller'
import Todo from './Todo'
import ContextUser from './ContextUser'
import { UserContextProvider } from './userContext'
import { ThemeContextProvider } from './ThemeContext'
import { createRef, useEffect, useRef } from 'react'
import ChildElement from './ChildElement'
import Counter from './Counter'
import Tablecomp from './Tablecomp'
import TicGame from './TicGame'
import Pagination from './Pagination'
import CountdownTimer from './CountdownTimer'
import Stopwatch from './StopWatch'
function App() {
  // const inputref=useRef(null);
  // const passedref = useRef(null)
  // useEffect(()=>{
  //   // if(inputref.current){
  //   //   inputref.current.value ='dhanush'
  //   //   setTimeout(()=>{ inputref.current.value ='dhanush holla'},2000)
  //   // }
  //   if(passedref.current){
  //     setTimeout(()=>{ passedref.current.value ='dhanush holla passedref'},2000)
  //   }
  // },[])
  return (
    <>
      {/* <Todo/> */}
      {/* <Scroller/> */}
      {/* <ThemeContextProvider>
      <UserContextProvider>
        <ContextUser/>
      </UserContextProvider>
      </ThemeContextProvider> */}
      {/* <input type="text" value ={'mock'} ref={inputref}/> */}
      {/* <ChildElement ref={passedref}/> */}
      {/* <Counter/> */}
      {/* <Tablecomp/> */}
      {/* <Pagination/> */}
      {/* <CountdownTimer/> */}
      {/* <TicGame/> */}
      <Stopwatch/>
    </>
  )
}

export default App
