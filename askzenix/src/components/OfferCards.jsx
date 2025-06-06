import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router';
import SlideHoverButton from './SlideHoverButton';

const OfferCards = (props) => {
  return (
    <div >
    <div className='m-2 border bg-[#022D62]  text-white p-10'>
    <div className='flex  pb-4 justify-self-center  max-[1000px]:flex-wrap max-[1000px]:p-auto mx-28'>
      <div className=' pl-10'>
        <h2 className='font-semibold text-4xl '>Offering Exceptional Services to Different Industries</h2>
      </div>
      <div className='  px-15'>
        <p className='text-lg'>We have clients across different industrial sectors. Our experts offer customized and innovative solutions as per your business needs. We cater to a multitude of industries</p>
      </div>
    </div>
    <div className='p-8 flex flex-row justify-center  gap-6 flex-wrap'>
      {props.data.map((item,index) => (
        <div key={index} className=" border-b-2 border-[#024D62] p-1 w-65  hover:border-[#a8a9a8] duration-300">
           <ul key={index} className="">
                {item.arra.map((item) => (
                  <li  className="mb-5 ">
                    <Link to={item.path} className='hover:tracking-wide hover:font-semibold hover:text-[#4C8B81] duration-300 group' href="#">{item.label} <BiChevronRight className=' text-2xl inline invisible group-hover:visible '/></Link>
                  </li>
                ))}
              </ul>
        </div>
      ))}
      </div>
      <div className='flex w-[100%] justify-center justify-items-center'>
      <div className='  flex items-center w-[50%] flex-wrap'>
      <p>Get Solutions for Any Industry Right Here- Browse Industries</p>
    
    <Link to="/browse" className='pl-5'>
      <SlideHoverButton text="Browse Industries "/>
      </Link>
      </div>
        </div>
    </div>
    
    </div>
  
  );
};

export default OfferCards
