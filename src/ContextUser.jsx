import React, { useContext } from 'react'
import userContext from './userContext'
import ThemeContext from './ThemeContext'
const ContextUser = () => {
    console.log(useContext(userContext))
    const{user,setUser}=useContext(userContext)
    const{theme,changeTheme}=useContext(ThemeContext)
  return (<>
    <div>context value name : {user.name}, age : {user.age}</div>
    <div>Theme context value: {theme} <button onClick={()=>changeTheme('Dark')}>changeContextValue</button></div>
    </>
  )
}

export default ContextUser