import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SlideHoverButton from '../SlideHoverButton';
import { Link } from 'react-router';
const OurMission = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/Ourmission")
        .then(response=>{
        console.log(response)
        setData(response.data)
        })
       .catch (error=>{
       console.error('Error fetching data:', error);
       }) 
      }
  }, [])
  return (
    <>
     <div className='md:flex gap-6  justify-self-center flex-wrap'>
   
      {data.map((item,index) => (
        <div key={index} className=' p-10  w-85 my-1 rounded-md bg-[#e1e2e2] hover:bg-[#022D62] md:h-55 overflow-hidden group '>
        <div className='group-hover:-mt-15 duration-300 group-hover:text-white'>
        <h2 className='text-2xl font-semibold text-[#022D62] pb-4 '>{item.title}</h2>
        <p className='leading-7 '>{item.des}</p>
        <div className='mt-8 '>
        <Link to={item.path} className=' invisible group-hover:visible' >
        <SlideHoverButton  text={item.text} />
        </Link>
        </div>
        </div>
        </div>
        
      ))}
      

     </div> 
    </>
  )
}

export default OurMission
