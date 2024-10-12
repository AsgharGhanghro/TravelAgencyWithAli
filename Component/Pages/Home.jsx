import React, { useEffect } from 'react'
import Destination from './Destination';
import Services from './Services';
import Cleints from './Cleints';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
    <div className='relative  bg-center bg-cover overflow-hidden' style={{backgroundImage:"url('Image/pic2.avif')"}}>
       <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
     className='flex justify-center items-center flex-col h-screen' >

        <h1 className='text-white md:text-5xl font-bold 'data-aos="zoom-out-up">Explore the world with Us</h1>
        <p className='text-white font-serif texr-2xl mt-3'>Discover the amazing places at exclusive deals</p>
       <Link to="/contact"><button className='text-white font-bold text-xl border p-2 bg-transparent rounded-lg shadow-xl hover:bg-black  tranform transition duration-300 hover:scale-110 hover:transition mt-3'>Get in Touch</button></Link> 
       </div>
    </div>
    <Destination />
    <Services />
    <Cleints />
    <Footer />
    </>
  )
}

export default Home;
