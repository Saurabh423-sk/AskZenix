import React, { useEffect, useState } from 'react';
import axios from 'axios'
const WorkCont = ()  => {
const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/WorkContent")
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
      <div className='w-[75%] justify-self-center mt-10'>
       <p className='text-[17px] my-3'>At <strong className=''>Askzenix Technologies</strong>, we take pride in our transparent and collaborative approach to software development. Our mission is to deliver high-quality solutions that not only meet but exceed our clients' expectations. Here's an insight into how we work:</p>
        {data.map((section, index) => (
          <div key={index}>
            <strong className='text-[#022D62] text-lg'>{section.title}</strong>
            {section.content.map((para, i) => (
              <p key={i} className='my-3 text-[17px]'>{para}</p>
            ))}
          </div>
        ))}
        <p className='text-[17px] '>At <strong className='text-[#4C8B81] hover:text-[#022D62] duration-300 cursor-pointer'>Askzenix Technologies</strong>, we're not just a software development company; we're your dedicated technology partner. Our commitment to excellence, transparency, and collaboration sets us apart. Let's embark on a journey to turn your ideas into innovative solutions.</p>
      </div>
    </>
  );
}

export default WorkCont
