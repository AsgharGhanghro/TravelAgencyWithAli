import React, { useEffect } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const login = () =>{
    localStorage.setItem('login',true);
    navigate('/');
  }
  const navigate = useNavigate(); 
  useEffect(()=>{
    let login = localStorage.getItem('login');
    if(login){
      navigate('/login');
    }
});

  return (
    <>
    <div className='flex justify-center items-center h-screen bg-center bg-cover' style={{backgroundImage:"url('/Image/tr2.jpg')"}}>
       <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-1'>
        <div className='shadow-2xl rounded-md py-10 px-12 backdrop-blur-md  mx-auto '>

          <h2 className='font-bold text-xl text-center pb-8'>Login Form</h2>
          <div className='pt-2 pb-3'>
            <input type="text" placeholder='Enter the Name' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 focus:border-blue-400 -z-10' />
            <PersonIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500 hidden' />
          </div>

          <div className='pt-2 pb-3'>
            <input type="email" placeholder='Enter the Email' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500' />
            <EmailRoundedIcon className='relative right-7 hidden bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <input type="password" placeholder='Enter the Password' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500' />
            <LockRoundedIcon className='relative right-7  hidden bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-4 pb-3'>
          <button className='text-black bg-transparent cursor-pointer shadow-xl px-4 py-2 mx-14 font-bold rounded-lg border border-black transition duration-500 hover:scale-110 hover:font-bold hover:bg-blue-500 'onClick={login}>Upload Message</button>
          </div>

       </div>
     </div>
    </div>

    </>
  )
}

export default Login;
