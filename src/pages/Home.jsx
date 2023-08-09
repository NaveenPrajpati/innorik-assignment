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
    <div className='bg-indigo-100 min-h-screen'>
    
<div className='w-fit mx-auto  text-center my-20'>
  <p className='text-3xl font-bold'>Welcome to world of news</p>
  <p className='text-lg font-semibold text-slate-500'>Here you can find news of your interest</p>
</div>
    
    </div>
  )
}
