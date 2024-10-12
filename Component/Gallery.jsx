import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Pages/Footer';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const gallery = [
  {
      image: '/Image/tr1.avif',
      title: 'Tour with Us',
      descrption: 'Embarking on a tour with unknown people can be an exciting adventure. It offers a chance to meet new faces, share unique experiences, and learn about different cultures.'
  },
  {
      image:'/Image/tr2.jpg',
      title: 'Tour with Family',
      descrption: 'A family tour is a wonderful experience filled with adventure, bonding, and exploration. Traveling together creates unforgettable memories, relationships in discovering new places.'
  },
  {
      image: '/Image/tr3.jpg',
      title: 'Tour with Friends',
      descrption: 'Exploring new places, sharing laughs, trying delicious foods, and capturing memories together. Its all about adventure, bonding, and creating unforgettable moments!'
  },
  {
    image: '/Image/tr4.jpg',
    title: 'Tour with Yourself',
    descrption: 'Exploring a new city alone allows for self-discovery, independence, and flexibility. It’s an opportunity to immerse yourself fully and create personal memories.'
}, 
 ]
const Gallery = () => {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <>
    <div className=' flex items-center justify-center h-96 bg-center bg-cover'style={{backgroundImage:"url('/Image/pic11.avif')"}}>
      <Link to="/"><button className='text-black bg-transparent shadow-xl px-6 py-3 text-xl font-bold rounded-lg border border-black transition duration-500 hover:scale-110 hover:bg-transparent hover:font-bold'> Galley </button></Link>
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
        {/* <h3 className='text-3xl font-bold text-center mb-8 cursor-pointer transform transition duration-300 hover:scale-110'>Our Gallery</h3> */}
       <div className='grid gap-6 sm:grid-cols-1  lg:grid-cols-2 '>
        {
        gallery.map((items,index)=>(

           <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer sm:flex sm:flex-row
            tranform transition duration-300 hover:-translate-y-4 hover:shadow-gray-500'>
        
            <img src={items.image} alt={items.title} className=' lg:w-60 lg:h-full object-cover 
              tranform transition duration-500 hover:scale-110'/>
            <div className='p-4'>
                <h3 className='text-xl font-bold mb-2 pt-4'>{items.title}</h3>
                <p className='text-grey-600 pb-4'>{items.descrption}</p>
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

export default Gallery;