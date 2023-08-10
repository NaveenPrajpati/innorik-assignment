import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Context } from '../Context/Mycontext'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const  {user,setUser,setNewsData,newsData}=useContext(Context)
  const navigate=useNavigate()

   async function getNewsData(){
    if(!user.isLogin){
      const data=localStorage.getItem('userData')
      if(data!=null){
        setUser({isLogin:true,userData:JSON.parse(data)})
        navigate('/dashboard')
      }
      else{
       
      }
      
    }
 
    }

    useEffect(()=>{

        getNewsData()

     
        
    },[])

  return (
    <div className='bg-indigo-300 min-h-screen flex flex-col justify-center'>
    
<div className='w-fit mx-auto  text-center '>
  <p className='text-[50px] font-bold'>Welcome to world of news</p>
  <p className='text-xl font-semibold text-indigo-800'>Here you can find news of your interest</p>
</div>
    
    </div>
  )
}
