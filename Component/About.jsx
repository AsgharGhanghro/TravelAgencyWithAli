import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../Pages/Footer';
import {Link} from 'react-router-dom'
const About = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
       <div className=' flex items-center justify-center h-96 bg-center bg-cover'style={{backgroundImage:"url('/Image/tr3.jpg')"}}>
     <Link to="/"><button className='text-black bg-transparent shadow-xl px-6 py-3 text-xl font-bold rounded-lg border border-black transition duration-500 hover:scale-110 hover:bg-transparent hover:font-bold'> About Us </button></Link>
    </div>

    <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
     className='container mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <img src="/Image/pic2.avif" alt="" className='overflow-hidden  rounded-lg border border-blue-200 cursor-pointer shadow-2xl transform transition duration-500
          hover:scale-110 '/>
        </div>
        <div className='h-full w-full rounded-xl bg-gray-100  border border-slate-100  cursor-pointer p-5 shadow-2xl transform transition duration-500
          hover:scale-110'>
          <h2 className='font-bold text-2xl  transform transition duration-300'>Who We Are</h2>
          <p className='pt-4 font-thin gap-1 '>We Are passionate travel agency commited to providing the best expriencs for our clients.
            Our team are dedicated proffesional works tirelesly to ensure your tripps are seamless and unforgetable.
          </p>

          <h2 className='pt-6 font-bold text-2xl  transform transition duration-500'>Our Mission</h2>
          <p className='pt-4 font-thin gap-1'>Our Mission is to create amazing exprinces that inpires and enrich the lives of our clients.
          We blieve in personalised service, attention to detail and providing exceptional values.</p>
        </div>
      </div>
    </div>

    <Footer />
    </>
  )
}

export default About;
