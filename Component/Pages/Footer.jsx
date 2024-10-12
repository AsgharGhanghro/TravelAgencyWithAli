
import { Link } from 'react-router-dom'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInRoundedIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {

  return (
    
    <div className='bg-slate-700 p-4 text-white'>
      <div className='container mx-auto px-4'>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
       <div>
        <h2 className='text-2xl font-bold mb-4 cursor-pointer transition duration-300 hover:text-slate-300'>Travel Agency</h2>
        <p className='mb-4'>Your trusted partner unforgettable travel expriences Explore the with Ali.</p>
        <p className='font-thin'><span className='font-bold  cursor-pointer hover:text-slate-300'>Email : </span>aliasghargh540@gmail.com</p>
        <p className='font-thin'><span className='font-bold cursor-pointer hover:text-slate-300'>Phone No : </span>0320-2376159</p>
       </div>

       <div className='flex flex-col md:items-center'>
        <h2 className='text-2xl font-bold cursor-pointer transition duration-300 hover:text-slate-300'>Quick Links</h2>
        <div className='flex flex-col mt-4 space-y-2'>
         <Link to="/" className=' transition duration-300 font-thin  hover:text-black hover:font-bold'>Home</Link>
         <Link to="/gallery" className=' transition duration-300 font-thin  hover:text-black hover:font-bold'>Gallery</Link>
         <Link to="/serve" className=' transition duration-300 font-thin  hover:text-black hover:font-bold'>Service</Link>
         <Link to="/about" className=' transition duration-300 font-thin  hover:text-black hover:font-bold'>About</Link>
         <Link to="/contact" className=' transition duration-300 font-thin  hover:text-black hover:font-bold'>Contact</Link>
        </div>
       </div>

       <div>
         <h2 className='text-2xl font-bold mb-4 cursor-pointer transition duration-300 hover:text-slate-300'>Follow Us</h2>
         <div className='flex space-x-4 mb-4'>
          <FacebookRoundedIcon size={30} className='text-blue-500 cursor-pointer hover:text-blue-600  transsfrom transition duration-500  hover:scale-150' />
          <InstagramIcon size={30} className='text-pink-500 cursor-pointer hover:text-pink-600  transsfrom transition duration-500 hover:scale-150' />
          <TwitterIcon size={30} className='text-black cursor-pointer hover:text-black  transsfrom transition duration-500 hover:scale-150' />
          <LinkedInRoundedIcon size={30} className='text-blue-700 cursor-pointer hover:text-blue-800  transsfrom transition duration-500  hover:scale-150'  />
         </div>
         <form className='flex justify-center items-center mt-4'>
           <input type ="email" placeholder='Enter your email' className='w-full p-2 rounded-l-lg bg-slate-600 hover:border-none ' />
         <Link to="/login"> <button className='bg-blue-400 text-black font-bold  py-2 px-4 rounded-md transition duration-500 hover:bg-black hover:text-white'>Subscribe</button></Link> 
         </form>
       </div>
      </div>

      <div className='flex justify-between border-t  mt-8  pt-4'>
       <p>@ alright Travel Agency . All right reserved</p>
       <div className='flex space-x-4 mt-4 md:mt-0'>
        <Link to="">Help</Link>
        <Link to="">Terms </Link>
        <Link to="">Privacy </Link>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Footer;
