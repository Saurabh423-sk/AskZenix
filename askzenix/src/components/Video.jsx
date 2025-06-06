import React, { useEffect, useState } from "react";
import SlideHoverButton from "./SlideHoverButton";

const Video = () => {
const video = [
    <div className="  shadow-2xl" key="video-1">
      <div>
        <video
          className=" h-80 w-180"
          controls
          src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/407db144092223894a1cb2869a892cbc-65a61d3e67242.mp4"
        ></video>
        <h5 className="text-center pt-4 text-[#022D62]">Gary Sikes</h5>
        <p className="text-center text-[#676C71] pb-8">
          Atlanta, U.S. global Resource Services, LLC
        </p>
      </div>
    </div>,

    <div className=" h-80 w-180 shadow-2xl" key="testimonial-1">
      <div className="w-2/3 mx-auto">
        <img
          className="mx-auto py-2"
          src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/Mudasser-Hameed1702641282.png"
        />
        <p className="italic text-center pt-2 font-medium leading-7">
          I found this company very professional with friendly environment and
          talented staff with extraordinary skills. I will definitely recommend
          Askzenix technologies.
        </p>
        <h5 className="text-center pt-4 text-[#022D62]">Mudasser Hameed</h5>
        <p className="text-center text-[#676C71]">
          Director, Macpro (Netherlands)
        </p>
      </div>
    </div>,

    <div className="  h-80 p-5 shadow-2xl" key="testimonial-2">
      <div className=" w-2/3 mx-auto ">
        <img
          className="mx-auto py-2"
          src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/Mudasser-Hameed1702641282.png"
        />
        <p className="italic text-center pt-3 font-medium leading-7">
          Firstly, I will like to say I completely admire your work and
          creativity on this introduction video.
        </p>
        <h5 className="text-center pt-10 text-[#022D62]">Bolaji Abdul</h5>
        <p className="text-center text-[#676C71]">Owner, Goldenseedslearning</p>
      </div>
    </div>,
  ];
  const [currIndex, setCurrIndex] = useState(0);
  
    const handleNext = () => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % video.length);
    };
  
    const handlePre = () => {
      setCurrIndex((prevIndex) =>
        prevIndex === 0 ? video.length - 1 : prevIndex - 1
      );
    };  



  return (
    <>
      <section className="">
        <div className=" w-3/4 flex justify-self-center gap-1 p-1 flex-wrap">
          <div className="  flex flex-col  ">
            <div className="">
              <h2 className="text-center text-[#022D62] text-4xl font-semibold pt-4">
                Testimonial
              </h2>
              <p className="text-center pb-6 text-[#676C71]">
                Hear what our clients say about us...
              </p>
            </div>

            <div className="flex justify-center ">
              <div className="text-center">
                <div>{video[currIndex]}</div>
                <div className="">
                  <div className="flex justify-center relative bottom-1.5   ">
                    <button
                      className=" w-11 py-1 px-5  bg-white"
                      onClick={handlePre}
                    >
                      &#10094;
                    </button>
                    <button className=" w-11 bg-white" onClick={handleNext}>
                      &#10095;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex items-center pl-5">
            <div className="">
              <h3 className="text-3xl font-bold text-[#022D62] pb-10 ">
                Our client testimonials speak volumes about our efficient work
              </h3>
              <SlideHoverButton text=" Client Success Stories" textColor="text-[#022D62]"/>
              <div className=" mt-10 border-b text-[#cbcbcb] "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video
