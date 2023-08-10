import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Mycontext'
import { Navigate } from 'react-router-dom'
import { readlat, updateAdd, updateTags, updatetags } from '../services/userService'

export default function Dashboard() {

  const  {user,setUser,setNewsData,newsData}=useContext(Context)
  const [selectIndex,setSelectIndex]=useState()
  const [editTag,setEditTag]=useState('')
  const[update,setUpdate]=useState(false)
  const [interests,setInterests]=useState([])
  const [readlate,setReadlate]=useState([])

   async function getNewsData(){
       await axios.get('https://gnews.io/api/v4/search?q=example&lang=en&country=india&max=10&apikey=de62bc6ec8fb5ff8aea28d42c1f8afb4')
        .then(res=>{
         

          setNewsData(res.data.articles)
        })
 
    }

    useEffect(()=>{

        getNewsData()

        
    },[])

    function readLater(readLater){
      readlat({id:user.userData.id,readLater})
      .then(res=>{
        console.log(res.data.readLater)
        setReadlate(res.data.readLater)
        console.log('updated')
      })
      .catch(err=>{
        console.log(err)
      })
      setUpdate(false)
    }

    function updateTag(tag){
      setInterests([...interests,editTag])
      
      updateTags({id:user.userData.id,interests})
      .then(res=>{
     
        console.log('updated')
      })
      .catch(err=>{
        console.log(err)
      })
      setUpdate(false)
    }

  return (
    <div className='bg-indigo-100 min-h-screen'>

    <div className='flex justify-center gap-2 items-center bg-indigo-400 p-1'>
    <p className='font-semibold'>Interests-</p>
    {interests?.map((it,index)=>(
      <div key={index} onClick={()=>setSelectIndex(index)} className={`${index===selectIndex?'text-white':''} flex gap-2 items-center bg-indigo-700 p-1 rounded-xl`}>
          <p >{it}</p>
          {update && <p className='text-red-500 hover:cursor-pointer' onClick={()=>{

         const ne= interests.filter(item=> it!=item)
         setInterests(ne)
         }}>x</p>}
      </div>
    ))}
    {update && <input type="text" placeholder='Add tag' onChange={(e)=>setEditTag(e.target.value)} className=' outline-none rounded-lg px-2'/> }
   {!update? <button className='px-2 border' onClick={()=>{

   setUpdate(true)
   }}>edit </button>:
    <button className='px-2 border' onClick={updateTag}>update </button>}
    </div>
    {newsData.map((item,index)=>(
        <div key={index} className='w-[400px] p-2 rounded-md bg-white m-2'>
          <p className='text-blue-800 font-semibold'>{item.title}</p>
          <p>{item.description}</p>
          <button onClick={()=>readLater(item)} className='border px-1 rounded-lg mt-5 bg-indigo-200 font-semibold'>Read Later</button>
        </div>
      ))}
    </div>
  )
}
