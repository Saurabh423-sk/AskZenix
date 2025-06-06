import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios'
const NewFooter = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/FooterData" )
        .then(response=>{
        console.log(response)
        setData(response.data)
        })
       .catch (error=>{
       console.error('Error fetching data:', error);
       }) 
      }
  }, [])
   const contact = [
    {title:"Contact",
          data:[
            {label:"Address:",p:"Plot No. A-25, Suite No. 102, Sector - 63, Noida, U.P.",path:"/Address"},
            {label:"Phone:",p:"+91-9999385943 +91-9999568773",path:"/Phone"},
            {label:"Office:",p:"+0120-3295306",path:"/Office"},
            {label:"US Mobile:",p:"+1 317 608 0373",path:"/US-Mobile"},
            
            
          ]}]    
          const Media = [
            {
              list: [
                {icon:<i class="fi fi-brands-instagram"></i> , path: "/Instagram" },
                {icon: <i class="fi fi-brands-facebook"></i>, path: "/Facebook" },
                {icon: <i class="fi fi-brands-twitter"></i>, path: "/Twiter" },
                {icon: <i class="fi fi-brands-linkedin"></i>,path: "/linkedin",},
              ],},];
  return (
    <div>
    <div className='border-b-2 border-[#c6cbc0] flex w-3/4 justify-self-center justify-between pb-10 mb-5 mt-5'>
      <div className='w-50'> <img src='https://www.askzenixtechnologies.com/images/zenix-logo.webp'/></div>
      <div className=' flex items-center gap-5'>
        {Media[0].list.map((item,index) => (
          <div key={index} className='text-4xl text-[#022D62]'>
          <Link to={item.path}>
            {item.icon}</Link>
          </div>
        ))}
      </div>
    </div>
    <div className=' flex flex-wrap justify-center gap-20 m-2'>
      {data.map((item, index) => (
        <div key={index} className=''>
          <h2 className='text-2xl font-semibold py-4 text-[#4C8B81]'>{item.title}</h2>
            {item.data.map((sec, idx) => (
              <Link to={sec.path} key={idx} className=' text-md flex hover:text-[#4C8B81] duration-300 mb-4 font-medium'>{sec.label} </Link>
            ))}          
        </div>
      ))}
      <div className=' '>
      {contact.map((item, index) => (       
        <div key={index} className=''>
          <h2 className='text-2xl font-semibold pt-4 pb-2 text-[#4C8B81]'>{item.title}</h2>
            {item.data.map((sec, idx) => (               
              <div key={idx} className='flex py-1 mb-3' >
              <div className=' text-md flex  font-medium  w-27'>{sec.label} </div>
              <div className='w-39 font-medium '> <Link to={sec.path}> {sec.p} </Link> </div> </div>  
            ))}                 
        </div>       
      ))}
      <div className='  flex flex-col gap-3'>
         <div className="flex pt-2 mb-3 "> 
      <label className="pr-8 mr-5 text-[#022D62] font-medium">Email:</label>
      <Link to={"/Email"} className="cursor-pointer text-[#314763] ">info@askmetechnologies</Link>
      </div>
     <div className="flex pb-2"> 
      <label className=" mr-5 text-[#0369e5] font-medium">Newsletter:</label>
      <input className="shadow-[0_1px_3px_0_rgba(0,0,0,0.02),_0_0_0_1px_rgba(27,31,35,0.15)] w-1/2 p-1" type="text" name="email" placeholder="Enter email" required></input>
      <button className="px-6  bg-[#4C8B81] hover:bg-[#022D62] duration-150" ><i class="text-white fa-solid fa-chevron-right"></i></button>
      </div></div></div></div> 
      <div className="py-10">
        <p className="text-center text-[#676C71]">©Copyright 2025 Askzenix-Technologies All Rights Reserved</p></div>
    </div>
  )
}
export default NewFooter