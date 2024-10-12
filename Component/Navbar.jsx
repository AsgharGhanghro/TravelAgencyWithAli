
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
const[Open , setOpen] = useState(false)

useEffect(()=>{
  AOS.init()
},[])

  return (
    
    <nav data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" 
     className=' fixed m-4 top-0 left-0 right-0 bg-white shadow-xl rounded-sm z-50'>

    <div data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"  className='container px-4 flex justify-between items-center h-16'>
        <h2 className='text-2xl  font-bold  hover:bg-slate-600 px-6 py-2 rounded-md cursor-pointer  hover:shadow-xl hover:text-white'>Travel</h2>

        <div className='hidden md:flex items-center  font-bold text-sm space-x-4'>
        
            <Link  to="/" className='text-black no-underline px-6 py-2  rounded-md  hover:bg-slate-600 hover:shadow-xl hover:text-white'> Home</Link>   
            <Link to="/gallery" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>Gallery</Link>
            <Link to="/serve" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>Service</Link>
            <Link to="/about" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>About</Link>
            <Link to="/contact" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>Contact</Link>
           <button><Link to="/login" className=' px-6 py-2 shadow-xl  rounded-md bg-slate-600  text-black font-bold  hover:bg-transparent'>Login</Link></button> 
        </div>
        <div className='md:hidden'>
          <button onClick={() => setOpen(!Open)}>
            {Open ? <ClearIcon /> :<MenuIcon />}
          </button>
        </div>
    </div>
    {Open && (
       <div className=' md:hidden flex items-center  font-bold text-sm space-y-6 py-4 flex-col'>
        
       <Link  to="/" className='text-black no-underline px-6 py-2  rounded-md  hover:bg-slate-600 hover:shadow-xl hover:text-white'> Home</Link>   
       <Link to="/gallery" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>Gallery</Link>
       <Link to="/serve" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>Service</Link>
       <Link to="/about" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>About</Link>
       <Link to="/contact" className='text-black no-underline px-6 py-2  rounded-md hover:bg-slate-600 hover:text-white'>Contact</Link>
      <button><Link to="/login" className=' px-6 py-2 shadow-xl  rounded-md bg-slate-600  text-black font-bold  hover:bg-transparent'>Login</Link></button> 
   </div>
    )}
    </nav>
  )
}

export default Navbar;
