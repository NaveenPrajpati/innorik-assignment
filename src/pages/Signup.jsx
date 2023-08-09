// RegisterForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../services/userService';
import { toast } from 'react-hot-toast';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState([]);
  const [text, setText] = useState('');
  
  const navigate=useNavigate()

  const handleRegister = async (e) => {
   e.preventDefault()
   
   signup({email,name,password,interests})
   .then(res=>{ 
    toast.success(res.data.message)
    navigate('/login')
   })
   .catch(err=>{
       console.log('error in signup',err)
       
   })

  };

  return (
    <div className='bg-indigo-200 h-[100vh] p-20'>
    <form onSubmit={handleRegister} className='w-[400px] mx-auto p-10 flex flex-col gap-5 justify-center items-center bg-indigo-300'>
      <input
        type="text"
        placeholder="Name"
        value={name}
        required
        className='w-full p-2 rounded-md border-2 border-indigo-800'
        onChange={(e) => setName(e.target.value)}
      />
           <input
        type="email"
        placeholder="Email"
        value={email}
        required
        className='w-full p-2 rounded-md border-2 border-indigo-800'
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='w-full bg-white rounded-md border-2 border-indigo-800'>
      <div className='flex items-center gap-2'>
      {interests.map((it,index)=>(
        <p key={index} className='bg-indigo-100 p-1 rounded-xl'>{it}</p>
      ))}
      {interests.length>0 && <p className='text-2xl font-bold ' onClick={()=>{setInterests([])}}>x</p>}
      </div>
      <div className='flex items-center'>

      
      <input
        type="text"
        placeholder="Interests"
        
        value={text}
        className='w-full p-2 rounded-md outline-none'
        
        onChange={(e) => setText(e.target.value)}
      />
      <button className='bg-indigo-100 p-1 rounded-xl mr-1' onClick={(e)=>{
        e.preventDefault()
        setInterests([...interests,text])
        setText('')
      }}>Add</button>
      </div>
      </div>
     
 
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        className='w-full p-2 rounded-md border-2 border-indigo-800'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'
        className='w-full p-2 rounded-md border-2 border-indigo-800 text-white font-bold'
       >Register</button>
       <div className='w-full p-2 rounded-md border-2 border-indigo-800 text-white flex justify-center gap-2'>
<p>Already have account?</p>
<Link to={'/login'}
        className='text-indigo-800 font-bold'
        > Login</Link>
       </div>
     


    </form>
    </div>
  );
};

export default Signup;
