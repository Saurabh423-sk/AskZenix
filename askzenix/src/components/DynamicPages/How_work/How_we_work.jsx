import CommonSec from "../CommonSec"
import OurMission from "../OurMission"
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import SlideHoverButton from "../../SlideHoverButton";
import PlanCard from "./PlanCard";
import WorkCont from "./WorkCont";
import Quality from "./Quality";
const How_we_work = () => {
 const [data, setData] = useState([]);
useEffect(() => {
       {
        axios.get("http://localhost:3000/HowToWork")
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
       <CommonSec img="https://dfck301lncdlh.cloudfront.net/resource/img/pages/About-us1702540597.jpg" title="How We Work" p="Our Expertise. Know more about what we do"/>
        <WorkCont/>


        <Quality/>
       <div className=" m-2 flex flex-col justify-center ">
       <div className="text-center py-10">
        <h2 className="text-4xl font-bold text-[#022D62] mb-4">Choose the SEO Plan that works for you</h2>
        <p className="text-lg font-medium">Our pricing works for enterprises of all sizes. Starting at just $149 per month</p>
       </div>
       <div className="flex justify-center flex-wrap ">
        <PlanCard new="basic" textColour="text-[#022D62]"/>
        <PlanCard new="Standard" color="bg-[#022D62] " textcol="text-white" textColour="text-[#4C8B81]"/>
        <PlanCard new="Premium" textColour="text-[#022D62]" />
        </div>
        </div>
       <div className="w-[75%] justify-self-center my-10">
       <OurMission/>
       </div>
    </>
  )
}

export default How_we_work
