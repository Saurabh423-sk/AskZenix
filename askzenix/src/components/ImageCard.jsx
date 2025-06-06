
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SlideHoverButton from './SlideHoverButton';
import { Link } from 'react-router';
const ImageCard = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/imageCards" )
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
    <div className=' flex flex-wrap'>
    <div className=' relative  bottom-22 flex justify-center w-full  flex-wrap '>
    <div className='flex w-[78%] bg-[#022D62] rounded-md  flex-wrap  '>
    <div className='flex items-center bg-[#4C8B81] px-7 rounded-md'>
      <h2 className='text-2xl text-white'>Our Clients</h2>
    </div>
    <div className='flex flex-wrap'>
        {data.map((item,idx) => (
          <div key={idx} className=' w-30  py-10 px-6 flex justify-center items-center'>
           <img src={item.img} className='hover:scale-x-120 duration-400'></img>
          </div>
          
        ))}
        </div>
        <Link  to="/Case-Stidies" className='flex justify-center items-center'>
        <SlideHoverButton text="Case Studies"/></Link>
        
        </div>
        </div>
        </div>
    </>
  )
}

export default ImageCard
