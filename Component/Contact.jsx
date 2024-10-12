import {Link} from 'react-router-dom'
import Footer from '../Pages/Footer';
import PersonIcon from '@mui/icons-material/Person';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contact = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
     <div className=' flex items-center justify-center h-96 bg-center bg-cover'style={{backgroundImage:"url('/Image/tr3.jpg')"}}>
      <Link to="/" ><button className='text-black bg-transparent shadow-xl px-6 py-3 text-xl font-bold rounded-lg border border-black transition duration-500 hover:scale-110 hover:bg-transparent hover:font-bold'> Contact </button> </Link>
    </div>

       
       <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
        className='grid gap-6 sm:grid-cols-1 lg:grid-cols-1 py-16'>
        <div className='shadow-2xl rounded-md py-10 px-12 backdrop-blur-md  mx-auto '>

          <h2 className='font-bold text-xl text-center pb-8'>Get In Touch</h2>
          <div className='pt-2 pb-3'>
            <input type="text" placeholder='Enter the Name' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 focus:border-blue-400 -z-10' />
            <PersonIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <input type="email" placeholder='Enter the Email' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500' />
            <EmailRoundedIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <input type="password" placeholder='Enter the Password' className='pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500' />
            <LockRoundedIcon className='relative right-7 bottom-1 font-bold cursor-pointer transform transition duration-300 hover:text-blue-500' />
          </div>

          <div className='pt-2 pb-3'>
            <textarea name="message"  placeholder='Write your Message' className='h-12 w-56 pl-2 ml-4 font-thin shadow-xl rounded-md py-1 px-10 bg-slate-100 hover:border-blue-500'/>
          </div>


          <div className='pt-4 pb-3'>
          <Link to="/"><button className='text-black bg-transparent shadow-xl px-4 py-2 mx-14 font-bold rounded-lg border border-black transition duration-500 hover:scale-110  hover:font-bold hover:bg-blue-500'>Send Message </button></Link>
          </div>

       </div>
     </div>
    

    <Footer />
    </>
  )
}

export default Contact;
