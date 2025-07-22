import CommonSec from "../CommonSec"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import OurMission from "../OurMission";
const Our_Value = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/OurValue_Content")
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
      <CommonSec img="https://dfck301lncdlh.cloudfront.net/resource/img/pages/9189cd92b927faeca985cc250f849ab9-659fd30048e1f.webp" title="Our Values" p="Our Expertise. Know more about what we do"/>

      <div className="flex flex-col justify-center items-center text-center py-12 ">
        <div className="p-4 md:p-0  md:w-[73%]">
          <h2 className="text-4xl font-bold mb-5 text-[#022D62] py-5">
           Our values mold the way we work with our clients, delivering excellent user experience supported by cutting-edge technologies
          </h2>
          <p className="leading-7">
          At Askzenix Technologies, innovation is our driving force, inspiring us to craft high-quality solutions that exceed expectations. Rooted in collaboration, integrity, and a commitment to continuous learning, we empower our diverse team to embrace change and deliver customer-centric, sustainable excellence
          </p>
        </div>
        </div>

        <div className="  flex justify-center my-10">
        <div className=" w-[79%] flex flex-wrap gap-7 md:ml-10 ">
        {data.map((item,index) => (
          <div key={index} className="  w-68 ">
          <div className=" group">
            <div className=" relative border-b-2 border-[#d1d0d0] flex items-center gap-5 py-5 ">
            <div className='absolute border-b-3 border-[#022D62] w-0 -bottom-0.5 left-0 right-0 top-0 group-hover:w-full duration-300'></div>
              <p className="text-6xl font-bold text-[#4C8B81] opacity-25 group-hover:opacity-60 duration-300">{item.num}</p>
              <h5 className="text-lg font-semibold  text-[#022D62]">{item.title}</h5>
            </div>
            <div className=" py-5 leading-7  font- ">
            <p>{item.des}</p>
            </div>
            </div>
          </div>
        ))}
        </div>
        
        </div>
        <div className="w-[73%] justify-self-center mb-15">
          <OurMission/>
        </div>

    </>
  )
}

export default Our_Value
