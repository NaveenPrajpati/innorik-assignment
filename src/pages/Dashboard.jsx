import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/Mycontext'
import { Navigate } from 'react-router-dom'
import { getUserDetail, readlat, updateAdd, updateTags, updatetags } from '../services/userService'
import { toast } from 'react-hot-toast'

export default function Dashboard() {

  const  {user,setUser,setNewsData,newsData}=useContext(Context)
  const [selectIndex,setSelectIndex]=useState()
  const [editTag,setEditTag]=useState('')
  const[update,setUpdate]=useState(false)
  const [interests,setInterests]=useState([])
  const [readlate,setReadlate]=useState([])

  const baseUrl=`https://gnews.io/api/v4/search?q=${interests[selectIndex]}&lang=en&country=india&max=10&apikey=de62bc6ec8fb5ff8aea28d42c1f8afb4`

   async function getNewsData(){
       await axios.get(baseUrl)
        .then(res=>{
         

          setNewsData(res.data.articles)
        })
 
    }

    async function getUserData(){
      getUserDetail(user.userData.id)
      .then(res=>{
        console.log(res.data)
        setInterests(res.data.interests)
        setReadlate(res.data.readLater)
        
      })
      .catch(err=>{
        console.log(err)
      })
    }

    useEffect(()=>{

        getUserData()
        getNewsData()

        
    },[baseUrl])

    function readLater(readLater){
      readlat({id:user.userData.id,readLater})
      .then(res=>{
        console.log(res.data.readLater)
        setReadlate(res.data.readLater)
        toast.success('article add to read later')
      })
      .catch(err=>{
        console.log(err)
      })
      setUpdate(false)
    }

    function updateTag(){
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


    <div className='flex justify-center gap-2 flex-wrap items-center bg-indigo-400 p-1'>
    <p className='font-semibold text-xl'>Interests-</p>
    {interests?.map((it,index)=>(
      <div key={index} onClick={()=>setSelectIndex(index)} className={`${index===selectIndex?'bg-white text-indigo-700':'bg-indigo-700 text-white'} flex gap-2 items-center  p-1 rounded-2xl`}>
          <p className='font-semibold'>{it}</p>
          {update && <p className='text-red-500 hover:cursor-pointer' onClick={()=>{

         const ne= interests.filter(item=> it!=item)
         setInterests(ne)
         }}>x</p>}
      </div>
    ))}
    {update && <div className='flex items-center bg-white p-1 rounded-xl'>
     <input type="text" placeholder='Add tag' onChange={(e)=>setEditTag(e.target.value)} className=' outline-none rounded-lg px-2'/> 
     <button onClick={()=> setInterests([...interests,editTag])} className='mr-1 bg-indigo-400 px-1 rounded-lg text-sm font-semibold text-white'>Add</button>
    </div>}
   {!update? <button className='px-2 border-2 border-indigo-700 rounded-2xl' onClick={()=>{setUpdate(true)}} >Edit </button>:
    <div>

    <button className='px-2 border-2 border-indigo-700 rounded-2xl' onClick={updateTag}>Update </button>
    <button className='px-2 border-2 border-indigo-700 rounded-2xl' onClick={()=>setUpdate(false)}>Cancel </button>
    </div>
    }
    </div>


   {/* new container */}
<div className='flex flex-col-reverse sm:flex-row sm:justify-center'>
    <div className='flex flex-wrap w-fit '>

    {newsData.map((item,index)=>(
        <div key={index} className='sm:w-[400px] p-2 rounded-md bg-white m-2'>
        <img src={item.image} alt="" />
          <p className='text-blue-800 font-semibold'>{item.title}</p>
          <p>{item.description}</p>
          <button onClick={()=>readLater(item)} className='border px-1 rounded-lg mt-5 bg-indigo-200 font-semibold'>Read Later</button>
        </div>
      ))}
    </div>
   {readlate.length>0 &&  <div className=''>
      <p className='bg-indigo-500 p-1 text-white'>Pending to Read</p>
      {readlate.map((item,index)=>(
        <div key={index} className='sm:w-[400px] p-2 rounded-md bg-white m-2'>
        <img src={item.image} alt="" />

          <p className='text-blue-800 font-semibold'>{item.title}</p>
          <p>{item.description}</p>
          {/* <button onClick={()=>readLater(item)} className='border px-1 rounded-lg mt-5 bg-indigo-200 font-semibold'>Read Later</button> */}
        </div>
      ))}
    </div>
   }
    </div>

    </div>
  )
}
