import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SlideHoverButton from '../SlideHoverButton';
const CareerAndMissin = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/carrerImg")
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
    <div className='bg-[#022D62]  pb-5'>
    <div className='flex w-[75%]  justify-self-center gap-5 justify-between py-10 flex-wrap'>
    <div className='w-1/2'>
        <h2 className=' text-4xl text-white font-bold'>Four reasons why you should choose Askzenix Technologies</h2></div>
        <div className=' w-53 flex items-center'>
        <SlideHoverButton text="Let’s Get Started"/></div>
      </div>
      <div className=' m-2 p-2 flex  gap-6 justify-center flex-wrap'>
        {data.map((item ,index) => (
          <div key={index} className=' relative border-b-2 w-66 border-[#51736d]  group'> 
          <div className='absolute border-b-2 border-white w-0 -bottom-0.5 left-0 right-0 top-0 group-hover:w-full duration-300'></div>
          <img src={item.img} className='rounded-md'></img>
          <div className=' flex gap-5  items-center py-6'>
            <p className='text-5xl text-[#4C8B81] opacity-25 font-bold group-hover:opacity-80 duration-300'>{item.num}</p>
            <h5 className='text-white font-bold text-[17px]'>{item.des}</h5>
          </div>
           </div>
        ))} 
      </div>
      </div>
    </>
  )
}

export default CareerAndMissin
