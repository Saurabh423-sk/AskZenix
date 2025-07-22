import { BiChevronUp } from "react-icons/bi";
import React, { useEffect, useState } from 'react';
import SlideHoverButton from "../../SlideHoverButton";
import axios from 'axios';

const Bttn = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/CareerBttn")
      .then(response => {
        console.log(response);
        setData(response.data.CareerBttn);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [open, setOpen] = useState(false);

  const handle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handle}  className={`  border flex justify-between cursor-pointer rounded-md py-5 px-3 shadow-[0_2px_8px_rgba(99,99,99,0.4)]  duration-100 ${open ? "bg-[#4C8B81] text-white" : " text-black"}`}>
        <button className="font-semibold text-lg">{props.text}</button>
        <BiChevronUp className={`text-4xl transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>

<div>
  {data?.map((item,index) => (

    <div key={index} className=" border h-5 bg-amber-300">
      {item.SeoExpert?.map((subitem,idx) => (
        <div key={idx} className="border">
        <h3>{subitem.title}</h3>
        </div>
      ))}
      
    </div>
  ))}
</div>



      {/* {open && 
      <div className="border">

        
        
       </div>} */}
    </>
  );
};

export default Bttn;
