import React, { useEffect, useState } from 'react';
import axios from 'axios'
const BlogsImg = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/Blogs")
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
       <div className='flex flex-wrap gap-7  my-7 justify-center'>
        {data.map((item, index) => (
           <div key={index} className=' w-91 '>
              <img src={item.img} className='w-full h-44 rounded-md' ></img>
              <div className=' flex justify-evenly my-2'>
                <a className='cursor-pointer text-[#4C8B81] font-semibold'>{item.tec}</a>
                <a className='cursor-pointer text-[#022D6280]'>{item.date}</a>
                <div className='bg-[#022D62] w-7 h-7 p-2 cursor-pointer flex items-center justify-center rounded-full hover:rotate-360 duration-400'>
               <i class="fi fi-rr-share text-white text-xs "></i> </div>
              </div>
              <h2 className='font-bold  px-8 text-lg text-[#022D62] hover:text-[#4C8B81] duration-400 cursor-pointer'>{item.title}</h2>
           </div>
        ))}
       </div>

    </>
  )
}

export default BlogsImg
