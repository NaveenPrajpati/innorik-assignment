
import React, { createContext, useState } from 'react'

export const Context=createContext()
export default function Mycontext({children}) {
  const [user,setUser]=useState({
    isLogin:false,
    userData:{},
  })
  const [newsData,setNewsData]=useState([])
let values={
user,setUser,newsData,setNewsData
}

  return (
    <Context.Provider value={values}>
        {children}
    </Context.Provider>
  )
}
