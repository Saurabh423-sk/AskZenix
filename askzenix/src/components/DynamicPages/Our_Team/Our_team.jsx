import CommonSec from "../CommonSec"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from "../../Video";
import Projectcard from "../Projectcard";

const Our_team = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/OurHero")
      .then(response => {
        console.log(response);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <CommonSec img="https://dfck301lncdlh.cloudfront.net/resource/img/pages/cd22737381f74a2c9195da281b14b759-659fd2382903d.webp" title="Our Team" p="Our Expertise. Know more about what we do"/>

      <div className=" flex w-[80%] gap-4 justify-self-center mt-15">
        {data.map((ite,i) => (
          <div key={i} className="">
            {ite.text?.map((subtext,ind) => (
              <div key={ind} className="">
                 <h2 className="text-3xl text-[#022D62] font-bold px-10 ">{subtext.title}</h2>
                 {subtext.paragraph?.map((para,indess) => (
                  <p key={indess} className="text-lg pt-5 font-medium px-10">{para}</p>
                 ))}
              </div>
            ))}
            
            <div className=" flex ">
            <div className=" flex flex-col gap-7 item-center mt-10">
            {ite?.images?.slice(0,2).map((imgs,im) => (
              <div key={im} className="w-65 ">
                <img src={imgs.img} className="rounded-md" ></img>
              </div>
            ))}
            </div>
            <div className="">
            {ite?.images?.slice(2).map((imgs,im) => (
              <div key={im} className="w-65 ml-4 ">
                <img src={imgs.img} className="rounded-md mb-4"></img>
                <Projectcard/>
              </div>
            ))}
            </div>
            </div>
          </div>

          
        ))}
        
      </div>





      <div className=" my-10">
  <div className=" text-center my-6 ">
    <h2 className="text-[#022D62] text-4xl font-bold">Meet our heroes</h2>
    <p className="text-lg py-4">Our team is friendly, talkative, and fully reliable.</p>
  </div>
      <div className=" flex gap-5 p-2 justify-center">
        {data.map((item,index) => (
          <div key={index} className=" text-center">
            <img src={item.img} className="h-85 rounded-md pb-3"></img>
            <a className="text-[#022D62] font-bold  hover:text-[#4C8B81] duration-300 cursor-pointer">{item.name}</a>
            <p>{item.deg}</p>
          </div>
        ))}
      </div>
      </div>

    <Video/>
    </>
  )
}

export default Our_team
