
import FlightIcon from '@mui/icons-material/Flight';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const service = [
    {
        icon: <FlightIcon className=''/>,
        title: 'Flight Booking',
        descrption: 'We provide easy and quick flight booking service to make your travel hassle free.'
    },
    {
        icon: <LocationCityIcon />,
        title: 'Hotel Booking',
        descrption: 'Book Hotels at the best prices with our exclusive deals and discounts.'
    },
    {
         icon: <BeachAccessIcon />,
        title: 'Beach Tours',
        descrption: 'Enjoy relaxing beach tour with all-inclusive package and guide tours.'
    },
    
]
const Services = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='py-16 bg-gray-100'>
      <div data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false" className='container mx-auto px-4 '>
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110'>Our Services</h3>
       <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
        service.map((items,index)=>(
           <div  key={index} className='bg-white rounded-lg shadow-md flex flex-col  items-center px-6 p-14 cursor-pointer
            tranform transition duration-300 hover:scale-110 hover:shadow-slate-800'>
        
            <div className='mb-8 text-4xl'>{items.icon}</div>
                <h3 className='text-xl font-bold mb-2'>{items.title}</h3>
                <p className='text-grey-600'>{items.descrption}</p>
           </div>
        
        ))
        }
          </div>
      </div>
    </div>
  )
}

export default Services;
