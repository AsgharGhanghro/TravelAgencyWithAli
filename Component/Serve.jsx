import { Link } from 'react-router-dom';
import Footer from '../Pages/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const servives = [
  {
     
      title: 'Hotel Booking',
      descrption: 'Booking a hotel involves choosing a suitable location, comparing prices, and reading reviews. It’s essential to consider amenities, cancellation policies, and proximity to attractions for a comfortable stay.'
  },
  {
    
      title: 'Ship Party',
      descrption: 'A ship party offers a unique experience with ocean views, lively music, dancing, and a vibrant atmosphere. It’s perfect for socializing, enjoying the sea breeze, and creating unforgettable moments.'
  },
  {
   
      title: 'Sunday Night Picnic',
      descrption: 'A Sunday night picnic is a perfect way to unwind before the week starts. Enjoying good food, the company of friends or family, and the calm evening atmosphere makes it special.'
  },
  {
   
    title: 'Flight Booking',
    descrption: 'Flight booking involves choosing a destination, comparing prices, and selecting a suitable airline and schedule. Its important to consider baggage policies, layovers, and potential fees to ensure a smooth journey.'
}, 

 ]
const Serve = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
    <div className=' flex items-center justify-center h-96 bg-center bg-cover'style={{backgroundImage:"url('/Image/tr10.jpg')"}}>
      <Link to="/"><button className='text-black bg-transparent shadow-xl px-6 py-3 text-xl font-bold rounded-lg border border-black transition duration-500 hover:scale-110 hover:bg-transparent hover:font-bold'> Service </button></Link>
    </div>
     
    <div data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
     className='py-12 bg-gray-100 '>
      <div className='container mx-auto '>
       <div className='grid gap-6 sm:grid-cols-1   lg:grid-cols-2 '>
        {
        servives.map((items,index)=>(

           <div key={index} className='bg-white  rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer lg:hover:scale-110 
            tranform transition duration-300 hover:-translate-y-4 hover:shadow-gray-500 '>
        
        <div className='mb-8 text-4xl w-30'>{items.icon}</div>
            <div className='p-4'>
                <h3 className='text-xl font-bold mb-2 pt-4 pl-10'>{items.title}</h3>
                <p className='text-grey-600 pb-4 pl-10'>{items.descrption}</p>
            </div>
           </div>
        
        ))
        }
          </div>
      </div>
    </div>

   <Footer />
    </>
  )
}

export default Serve;