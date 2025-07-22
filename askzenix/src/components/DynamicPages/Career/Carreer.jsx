import CommonSec from "../CommonSec"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Projectcard from "../Projectcard";
import CareerAndMissin from "../CareerAndMissin";
import { BiChevronUp } from "react-icons/bi";
import Bttn from "./Bttn";
const Carreer = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/Careerimg")
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
       <CommonSec img="https://dfck301lncdlh.cloudfront.net/resource/img/pages/293ea58f747e65917505ed2bc474dbb7-659fd032bf66a.webp" title="Careers" p="Our Expertise. Know more about what we do"/>
      
   <div className=" flex justify-center py-10">
    <div className=" md:w-[75%] md:flex  md:gap-10 flex-wrap">
    <div>
      {data.map((item,index) =>(
        <div key={index} className=" p-2 md:flex gap-2   ">
          <img  style={{ width: index === 0 ? '350px' : '' }}  src={item.img} className="rounded-md "></img>
          {index === 0 &&   <div className=" md:mt-11"> <Projectcard/></div> }
        </div> 
      ))}
    </div>
    <div className=" w-1/2">
    {data.map((subitem,idx) => (
      <div key={idx} className="">
      
        <h3 className="text-4xl text-[#022D62] font-bold pr-10">{subitem.title}</h3>
        <p className="py-5 leading-7 text-[17px]">{subitem.des}</p>
        {subitem.list?.map((listItem,ids) => (
          <div className="">
            <ul key={ids}>
              <li className="leading-10 text-lg  flex items-center"> <i class="fi fi-br-arrow-small-right text-2xl text-[#022D62]  flex mr-2"></i> {listItem} </li>
            </ul>
          </div>
        ))}
      </div>
    ))}
    </div>
    </div>
</div>
<CareerAndMissin/>
<div className=" p-2 ">
  <div className=" text-center w-2/3 justify-self-center py-5">
    <h2 className="text-2xl md:text-4xl font-bold text-[#022D62] md:px-20 pb-5">Current career opportunities at Askzenixtechnologies</h2>
    <p className="text-lg">Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones.</p>
  </div>

   <div className=" w-2/3 justify-self-center flex flex-col gap-8 p-2 my-10">
   
   <Bttn text="SEO Expert"/>
   <Bttn text="Automation Test Engineer"/>
   <Bttn text="Education Counsellor"/>
   

   </div>


</div>

    </>
  )
}

export default Carreer
