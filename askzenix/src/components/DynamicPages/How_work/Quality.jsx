import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SlideHoverButton from '../../SlideHoverButton';

  const Quality = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Quality")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className='bg-[#022D62] flex justify-center pt-18 pb-5 mt-10'>
        <div className='flex w-[75%] text-white'>
          {/* Left Text Section */}
          <div className='w-1/2'>
            <h2 className='text-4xl font-bold'>Smart strategy & excellent performance</h2>
            <p className='text-lg pt-5 pb-8'>
              Process that guarantees high productivity and profitability for your solution.
            </p>
            <SlideHoverButton text="Let's Start Project" />
          </div>

          {/* WRAPPER with scroll that contains both vertical line + content */}
          <div className='flex ml-10 h-[700px] overflow-y-auto gap-5 scrollbar'>

        
            <div className='w-[2px] bg-white mt-8 relative left-15 h-310'></div>

            
            <div className='flex flex-col gap-5 w-[500px] pt-3'>
              {data.map((item, index) => (
                <div key={index} className='flex group'>
                  <div className='p-2 relative '>
                    <span className='relative px-4.5 py-4 bg-white text-[#022D62] font-bold text-2xl rounded-full group-hover:bg-[#4C8B81] duration-200'>
                      {item.num}
                    </span>
                    <span className='absolute p-2 right-1.5 bg-white mt-2 rotate-45  group-hover:bg-[#4C8B81] duration-200'></span>
                  </div>
                  <div className='p-1 pb-28 pt-2'>
                    <h2 className='text-2xl font-semibold pb-3'>{item.title}</h2>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Quality;
