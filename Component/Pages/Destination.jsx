import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const destination = [
    {
        image: '/Image/pic4.avif',
        title: 'France , Italy',
        descrption: 'France, located in Western Europe, is known for its rich history, culture, cuisine, and landmarks like the Eiffel Tower. Its famous for art, fashion, wine, and beautiful landscapes.'
    },
    {
        image:'/Image/pic5.avif',
        title: 'Rome , Paris',
        descrption: 'Paris, the capital of France, is known for its iconic landmarks like the Eiffel Tower, rich history, art, fashion, and vibrant culture. Its a top global tourist destination.'
    },
    {
        image: '/Image/pic3.avif',
        title: 'Pakistan , Lahore',
        descrption: 'Kashmir is a region in South Asia, known for its stunning landscapes and geopolitical significance. Its disputed between India, Pakistan, and China, leading to ongoing tensions and conflicts.'
    },
    
    
]
const Destination = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='py-12 bg-gray-100 '>
      <div className='container mx-auto '>
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110'>Future Destinations</h3>
       <div className='grid gap-6 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 '>
        {
        destination.map((items,index)=>(

           <div  data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="2000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false" key={index} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
        
            <img src={items.image} alt={items.title} className='w-full h-48 object-cover
              tranform transition duration-300 hover:scale-110'/>
            <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{items.title}</h3>
                <p className='text-grey-600'>{items.descrption}</p>
            </div>
           </div>
        
        ))
        }
          </div>
      </div>
    </div>
  )
}

export default Destination;
