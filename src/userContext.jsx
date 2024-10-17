import React, { createContext, useState } from 'react'

const UserContext = createContext();
export const UserContextProvider = ({children}) => {
    const [user,setUser]=useState({name:'dhanush',age:25})
  return (
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
  )
}
export default UserContext;