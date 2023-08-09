import React, { Children, useContext } from 'react'
import { Context } from '../Context/Mycontext'
import { Navigate } from 'react-router-dom'

export default function CheckUser({children}) {
  const  {user,setUser}=useContext(Context)

  if(!user.isLogin)
  return <Navigate to={'/'} />

  return (
    <div>

      {children}
    </div>
  )
}
