import React, { useContext } from 'react'
import { Context } from '../Context/Mycontext'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const  {user,setUser,setNewsData,newsData}=useContext(Context)
const navigate=useNavigate()

  function signout(){
    localStorage.clear()
    navigate('/')
  }

  return (
    <div className=''>
<div className='flex justify-between px-10  items-center bg-indigo-800 h-10 text-white'>
    <h1 className='font-bold'>NEWS</h1>
    <div>
      {user.isLogin? <div className='flex gap-2 items-center'>

      <p>{user.userData.name}</p>
      <button onClick={signout}>Signout</button>
      </div> 
      :
      <div className='flex gap-2 items-center'>
        <Link to={'/login'}>Login</Link>
        <Link to={'/signup'}>Signup</Link>

      </div>
        }
    </div>
</div>
    </div>
  )
}
