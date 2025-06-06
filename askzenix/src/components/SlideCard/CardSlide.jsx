import "../Askme.css";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SlideHoverButton from '../SlideHoverButton';
import Bttn from './Bttn';
import { Link } from 'react-router';


const CardSlide = () => {
 const [Datass, setItems] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/Cards")
        .then(response=>{
        console.log(response)
        setItems(response.data)
        })
       .catch (error=>{
       console.error('Error fetching data:', error);
       }) 
      }
  }, [])

  return (
    <>
      <div className=' p-2 flex gap-2 bg-[#e5e4e4] mb-5 flex-wrap'>
       <div className='  w-1/3 flex justify-end '>
       <div className=' w-2/3  '>
       <h2 className='text-3xl  font-semibold text-[#022D62] pb-2`'>Take A Look at Our Range of Services</h2>
       <p className='text-lg font-medium py-4'>We offer complete digital transformation services for the fortune 500 client acroos the globe.</p>
       <Link to={"/happy"}>
      <SlideHoverButton text="Connect With Us" textColor="text-[#022D62]"/></Link>
       </div>
       </div>
        <div className='flex p-2 gap-2  h-[655px] overflow-auto flex-wrap scrollbar '>
        <div className=' p-2  flex flex-col gap-8 '>
        {Datass.slice(0,3).map((item, index) => (
          <div key={index} className='flex p-8 w-90 bg-white rounded-md hover:bg-[#022D62] group duration-300 '>
        <div  className='  text-[#027373] p-1 h-80 group-hover:text-white duration-200'>
         <i className={`${item.icon}  text-5xl `}></i>
        <h2 className='text-xl font-bold py-3' >{item.title}</h2>
        <p className='leading-7'> {item.des}</p>
        <div className='hidden mt-8 group-hover:block transition all group-hover:-translate-y-2  duration-300 '>
          <Link to={item.link}>
        <Bttn/></Link>
        </div>
        </div>
       </div>
      ))}
      </div>
      <div className=' p-2  flex flex-col gap-8 mt-13'>
        {Datass.slice(3,6).map((item, index) => (
          <div key={index} className='  flex   p-8  w-90 bg-white rounded-sm hover:bg-[#022D62] group duration-300 '>
        <div  className='  text-[#027373] p-1 h-80 group-hover:text-white duration-200'>
         <i className={`${item.icon}  text-5xl `}></i>
        <h2 className='text-xl font-bold py-3' >{item.title}</h2>
        <p className='leading-7'> {item.des}</p>
        <div className='hidden mt-8 group-hover:block transition all group-hover:-translate-y-2  duration-300 '>
        
          <Link to={item.link}>
        <Bttn/></Link>
        </div>
        </div>
       </div>
      ))}
   
      
      </div>
    
      </div>
      
      </div>

    
      
    </>
  )
}

export default CardSlide
