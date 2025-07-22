import React, { useEffect, useState } from 'react';
import SlideHoverButton from "../../SlideHoverButton";
import axios from 'axios';

const PlanCard = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/HowToWork")
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className=" ">
      {data.map((item, index) => (
        <div key={index} className={`shadow-[0_2px_8px_rgba(99,99,99,0.8)] m-3  text-center rounded-md ${props.color} ${props.textcol}`}>
          {item[props.new]?.map((subi, ids) => (
            <div key={ids} className={` m-2 md:w-85 p-5 `}>
              <h2 className='font-semibold text-2xl py-5'>{subi.title}</h2>
              <p className='font-medium leading-7'>{subi.des}</p>
            
              <p className="py-6 ">   <sup className=" text-xl font-bold me-2 ">$</sup>
                <strong className={`text-5xl  ${props.textColour}`}>{subi.Rs}</strong>/month
              </p>
              {subi.list.map((listitem, listidx) => (
                <ul key={listidx} >
                  <li className='mb-4 font-medium'>{listitem}</li>
                </ul>
              ))}
              
              <div className="flex justify-center w-20 py-4">
                <SlideHoverButton text="Select Plan" textColor="text-black" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlanCard;
