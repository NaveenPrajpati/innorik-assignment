// LoginForm.js
import React, { useContext, useState } from 'react';
import axios from 'axios';
import { login } from '../services/userService';
import { Context } from '../Context/Mycontext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const  {user,setUser}=useContext(Context)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

 login({email,password})
 .then(res=>{
  toast.success(res.data.message)
  setUser({isLogin:true,userData:res.data.user})
  localStorage.setItem('userData',JSON.stringify(res.data.user))
  navigate('/dashboard')
})
.catch(err=>{
  console.log(err)
  return err
})
  };

  return (
    <div className='bg-indigo-200 h-[100vh] p-20'>
    <form onSubmit={handleLogin} className='w-[400px] mx-auto p-10 flex flex-col gap-5 justify-center items-center bg-indigo-300'>
    
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        className='w-full p-2 rounded-md border-2 border-indigo-800'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        className='w-full p-2 rounded-md border-2 border-indigo-800'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button 
      type='submit'
        className='w-full p-2 rounded-md border-2 border-indigo-800 text-white font-bold'
      >Login</button>
       <div className='w-full p-2 rounded-md border-2 border-indigo-800 text-white flex justify-center gap-2'>
<p>Don't have account?</p>
<Link to={'/signup'}
        className='text-indigo-800 font-bold'
        >Signup</Link>
       </div>
  
      </form>
    </div>
  );
};

export default LoginForm;
