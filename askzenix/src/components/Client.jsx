import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Client = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/client ")
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
    <div className=" bg-[#022D62]  flex justify-center flex-wrap ">
      {data.map((item,index) => (
          <div key={index} className=' flex p-15 gap-3'>
         <div className='flex items-center '>
         <i className={`${item.icon}  text-6xl text-[#027373]`}></i></div>
         <div className='text-white'>
          <h2 className='text-4xl pb-1 font-semibold' >{item.title}</h2>
          <p className='text-lg'>{item.des}</p>
          </div>
          </div>
      ))}
    </div>
    </>
  )
}
export default Client 