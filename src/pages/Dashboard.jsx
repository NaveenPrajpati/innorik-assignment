import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/Mycontext'
import { Navigate } from 'react-router-dom'

export default function Dashboard() {

  const  {user,setUser,setNewsData,newsData}=useContext(Context)

   async function getNewsData(){
       await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-07-09&sortBy=publishedAt&apiKey=85f719a3fd0740f3bbabfcca9bded7ae')
        .then(res=>{
         

          setNewsData(res.data.articles)
        })
 
    }

    useEffect(()=>{

        getNewsData()

        
    },[])


  return (
    <div className='bg-indigo-100 min-h-screen'>

    <div className='flex justify-center gap-2 items-center bg-indigo-400 p-1'>
    <p className='font-semibold'>Interests-</p>
    {user?.userData?.interests?.map((it,index)=>(
          <p key={index}>{it}</p>
    ))}
    </div>
    {newsData.map((item,index)=>(
        <div key={index} className='p-2 rounded-md bg-white m-2'>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}
