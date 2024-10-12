import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const cleints = [
    {
        image: '/Image/mal1.png',
        name: 'Jone wick',
        title: 'New York',
        descrption: 'This travel agency provided excellent service and helped us plan the perfect vacation. Highly recomended.'
    },
    {
         image: '/Image/mal3.png',
         name: 'Ahmed Ali',
        title: 'Islamabad',
        descrption: 'Amazing exprience. This tour guides were knowledgeable and the destinations were braeth taking.'
    },
    {
         image: '/Image/mal5.png',
         name: 'Soo Zac',
        title: 'London',
        descrption: 'Great customer service and fantastic travel packages. Will definately book again.'
    },
    
]
const Cleints = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div className='py-12 bg-gray-100'>
      <div  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false" className='container mx-auto px-4 ' >
        <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110'>What our Clients are saying?</h3>
       <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {
        cleints.map((items,index)=>(
           <div key={index} className='bg-white rounded-lg shadow-md text-center  cursor-pointer p-4
            tranform transition duration-300 hover:-translate-y-3.5 hover:shadow-slate-700'>
        
              <img src={items.image} alt=""  className='w-32 h-32 rounded-full mb-2 mx-auto'/>
              <h2 className='text-xl font-bold mb-2'>{items.name}</h2>
                <h3 className='text-grey-600 text-sm mb-2'>{items.title}</h3>
                <p className='text-grey-600 italic'>{items.descrption}</p>
           </div>
        
        ))
        }
          </div>
      </div>
    </div>
  )
}

export default Cleints;
