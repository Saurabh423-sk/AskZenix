import React, { useEffect, useState } from "react";
import "./Askme.css";
import { Link, NavLink } from "react-router-dom";
const Askme = () => {
  const [showData, setshowData] = useState("e1");

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

    <div className=" h-80  shadow-2xl" key="testimonial-1">
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
      <div className=" w-2/3 mx-auto">
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
    <div className="p-0 m-0">
 

      {/* <section className=" w-full flex justify-center relative   ">
        <div style={{ bottom: "-20px" }}  className="w-3/4 bg-[#022D62] flex absolute rounded-lg  h-[120px] gap-[10px]">
          <div className="w-1/5 flex justify-center items-center bg-[#4c8B81] rounded-lg text-white text-xl font-[600]">
            <h2>Our Clients</h2>
          </div>
          <div className="w-[10%] flex justify-center items-center p-4">
            <img
              className="hover:scale-[1.1] duration-500"
              src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/vinebrookhomes.png"
              alt="img1"
            />
          </div>
          <div className="w-[10%] flex justify-center items-center p-4">
            <img
              className="hover:scale-[1.1] duration-500"
              src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/oklus.png"
              alt="img2"
            />
          </div>
          <div className="w-[10%] flex justify-center items-center p-4">
            <img
              className="hover:scale-[1.1] duration-500"
              src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/HomeOnlineLogo.png"
              alt="img3"
            />
          </div>
          <div className="w-[10%] flex justify-center items-center p-4">
            <img
              className="hover:scale-[1.1] duration-500"
              src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/ntiu.png"
              alt="img4"
            />
          </div>
          <div className="w-[10%] flex justify-center items-center p-4">
            <img
              className="hover:scale-[1.1] duration-500 ease-in-out"
              src="https://dfck301lncdlh.cloudfront.net/images/client-logo/light/touchpointtrans.png"
              alt="img5"
            />
          </div>
          <div className="w-1/4 px-10  flex text-white items-center ">
             <div className=" h-12  justify-self-center ">
          <div className="absolute h-12 w-16 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-45 ">
            <div className="w-45 transition-[width] duration-2000  flex items-center justify-center  h-12">
              <h3 className="text-white  font-semibold">
                Case Studies
                <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
              </h3>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="flex items-center justify-center mt-10">
          <div>
            <h1 className="text-[70px] text-[#022D62] font-semibold">
              Service that help you grow
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-lg pb-5">
            <p>
              Fortune 100 companies and established brands trust our enterprise
              software development.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10 flex-wrap seticons cursor-pointer">
          <div className="flex w-[205px] h-full flex-col items-center gap-4 p-2.5 rounded-[5px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] hover:bg-[#022D62] hover:text-white hover:scale-[1.04] duration-300">
            <i className="text-[45px] mt-5 fa-solid fa-desktop"></i>
            <h3 className="text-xl font-semibold ">Web Development</h3>
            <ul className=" m-2  leading-9 ">
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                E-commerce Solutions
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Bespoke services
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Full Stack services
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Business Intelligence
              </li>
            </ul>
          </div>
          <div
            className="flex w-[212px] h-full flex-col items-center gap-4 p-2.5 rounded-[5px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
        hover:bg-[#022D62] hover:text-white hover:scale-[1.04] duration-300"
          >
            <i className="text-[45px] mt-5 fa-solid fa-mobile"></i>
            <h3 className="text-xl font-semibold ">Mobile Development</h3>
            <ul className=" m-2  leading-9">
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Android
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Ios
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Hybrid
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Enterprise
              </li>
            </ul>
          </div>
          <div
            className="flex w-[205px] h-full flex-col items-center gap-4 p-2.5 rounded-[5px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
        hover:bg-[#022D62] hover:text-white hover:scale-[1.04] duration-300"
          >
            <i className="text-[45px] mt-5 fa-solid fa-desktop"></i>
            <h3 className="text-xl font-semibold ">Branding Services</h3>
            <ul className=" m-2  leading-9">
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Logo Designig
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                UI/UX
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Visual Designig
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Brand Collateral
              </li>
            </ul>
          </div>
          <div
            className="flex w-[205px] h-full flex-col items-center gap-4 p-2.5 rounded-[5px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
        hover:bg-[#022D62] hover:text-white hover:scale-[1.04] duration-300"
          >
            <i className="text-[45px] mt-5 fa-solid fa-bullhorn"></i>
            <h3 className="text-xl font-semibold ">Digital Marketing</h3>
            <ul className=" m-2  leading-9">
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                SEO
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                SMO
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                PPC
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Affiliate Marketing
              </li>
            </ul>
          </div>
          <div
            className="flex w-[205px] h-full flex-col items-center gap-4 p-2.5 rounded-[5px] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]
        hover:bg-[#022D62] hover:text-white hover:scale-[1.04] duration-300"
          >
            <i className="text-[45px] mt-5 fa-brands fa-react"></i>
            <h3 className="text-xl font-semibold ">Software Testing</h3>
            <ul className=" m-2  leading-9">
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Function Testing
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Automation Testing
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                Performance Testing
              </li>
              <li className="flex justify-center hover:scale-x-[1.15] duration-300">
                DevOps Testing
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="border-1 w-full flex flex-col  items-center  h-[470px] mt-10 bg-[#022D62] text-white">
            <h2 className="py-5 text-[36px] font-semibold ">
              What's next? Our latest client stories
            </h2>
            <p className="text-lg">
              We love what we do. Our clients tell us the same thing.
            </p>
            <div className="flex justify-center  w-full gap-5 mt-8">
              <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group">
                <img
                  className="rounded-lg p-1 "
                  src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/3a106c9abb39bec70d755a7a5e5d0224-66265d04eb740.webp"
                  alt="home"
                ></img>
                <div className="relative text-[#676c71] flex justify-center ">
                  <div className="absolute bottom-0 w-8/9 bg-white rounded-sm h-[190px] gap-[10px] opacity-0 invisible translate-y-8 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all ease-in-out duration-300 group-hover:bottom-[20px]">
                    <div className="p-6 leading-7">
                      <a
                        className="text-[18px] font-semibold text-[#022D62]"
                        href="#"
                      >
                        Vinebrookhomes
                      </a>
                      <p>
                        If success is a process with a number of defined steps,
                        then it is just like any other process.
                      </p>
                      <div className="p-2 mt-3 w-10 h-10 flex justify-center items-center border-1 bg-[#4c8B81] rounded-[50%]">
                        <i className="text-white fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group ">
                  <img
                    className="rounded-lg p-1"
                    src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/c6a3ef3e3c20e4b28ad0ed54b4f4287d-66265cd6234aa.jpg"
                    alt="Denso"
                  ></img>
                  <div className="relative text-[#676c71] flex justify-center ">
                    <div className="absolute bottom-0 w-8/9 bg-white rounded-sm h-[170px] gap-[10px] opacity-0 invisible translate-y-8 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all ease-in-out duration-300 group-hover:bottom-[20px]">
                      <div className="p-4 leading-7">
                        <a
                          className="text-[18px] text-[#022D62] font-semibold"
                          href="#"
                        >
                          Denso
                        </a>
                        <p>
                          You will drift aimlessly until you arrive back at the
                          original dock
                        </p>
                        <div className="p-2 mt-3 w-10 h-10 flex justify-center items-center  bg-[#4c8B81] rounded-[50%]">
                          <i className="text-white fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group">
                  <img
                    className="rounded-lg p-1"
                    src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/be5205fcfbc86d10e8a10f41bb715f23-6626598c149a5.png"
                    alt="Bascket"
                  ></img>
                  <div className="relative text-[#676c71] flex justify-center ">
                    <div className="absolute bottom-0 w-8/9 bg-white rounded-sm h-[150px] gap-[10px] opacity-0 invisible translate-y-8 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all ease-in-out duration-300 group-hover:bottom-[20px]">
                      <div className="p-4 leading-7">
                        <a
                          className="text-[18px] text-[#022D62] font-semibold"
                          href="#"
                        >
                          Basket
                        </a>
                        <p>Whatever you want from local store....</p>
                        <div className="p-2 mt-3 w-10 h-10 flex justify-center items-center  bg-[#4c8B81] rounded-[50%]">
                          <i className="text-white fa-solid fa-chevron-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group">
                <img
                  className="rounded-lg p-1"
                  src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/556d5ba2fb5f98c9201743ba942bdd41-659e48e0f0d79.webp"
                  alt="Touch point"
                ></img>
                <div className="relative text-[#676C71] flex justify-center ">
                  <div className="absolute bottom-0 w-8/9 bg-white rounded-sm h-[190px] gap-[10px] opacity-0 invisible translate-y-8 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all ease-in-out duration-300 group-hover:bottom-[20px]">
                    <div className="p-4 leading-7">
                      <a
                        className="text-[18px] font-semibold text-[#022D62]"
                        href="#"
                      >
                        Touchpoint365
                      </a>
                      <p>
                        We all carry a lot of baggage, thanks to our
                        upbringing...
                      </p>
                      <div className="p-2 mt-3 w-10 h-10 flex justify-center items-center bg-[#4c8B81] rounded-[50%]">
                        <i className=" text-white fa-solid fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-self-center  mt-73">
            
            <div className=" h-12 ">
          <div className="absolute h-12 w-16 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-55 ">
            <div className="w-55 transition-[width] duration-2000  flex items-center justify-center  h-12">
              <h3 className="text-[#022D62]  font-bold">
                View All Case Study
                <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
              </h3>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section> */}

      {/* <section className=" flex flex-col ">
        <div className="mt-8 flex justify-center  pb-14">
          <div className=" flex gap-3 w-2/3 ">
            <div>
              <p className="text-[#676C71]">Established in</p>
              <h3 className="text-[#4c8B81] text-[72px] font-bold leading-none">
                2024
              </h3>
            </div>
            <div className="flex items-center justify-center pl-8">
              <h2 className="text-[#022D62] text-[40px] font-bold  leading-12">
                Askzenix technologies empower steady venture change at speed and
                scale
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex w-4/5 gap-2 ">
            <div className=" w-[25%] flex justify-center  items-center pb-20 ">
              <div className=" flex  flex-col p-15 leading-15 text-[#022D62] font-semibold text-[19px]">
                <a className="cursor-pointer" onClick={() => setshowData("e1")}>
                  Mission And Vision
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e2")}>
                  Group Companies
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e3")}>
                  Technelogy Partners
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e4")}>
                  Meet Our Team
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e5")}>
                  Career With us
                </a>
              </div>
            </div>
            <div
              className={`flex  p-2 w-[75%] gap-10 flex-col ${
                !showData ? "hidden" : ""
              }`}
            >
              {showData === "e1" && (
                <div className=" p-2 w-full gap-2 flex ">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/Mission&Vision.jpg"
                      alt="img1"
                    ></img>
                  </div>
                  <div className=" w-[60%] p-10 py-20">
                    <div>
                      <h4 className="mb-4 text-[#022D62] text-2xl font-semibold">
                        <i className="fa-solid fa-bullseye me-2 text-[#4c8B81]"></i>
                        Our Mission
                      </h4>
                      <p className="mb-4 text-[#676C71] leading-7">
                        Our mission statement says, “helping our clients create
                        their future”.
                      </p>
                      <h4 className="mb-4 text-[#022D62] text-2xl font-semibold">
                        <i className="fa-solid fa-eye me-2 text-[#4c8B81]"></i>{" "}
                        Our Vision
                      </h4>
                      <p className="mb-4 text-[#676C71] leading-7">
                        Our Vision statement says, "Delivering Next Level
                        Technology".
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {showData === "e2" && (
                <div className=" p-2 w-full gap-2 flex ">
                  <div className=" w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/challenges.jpg"
                    ></img>
                  </div>
                  <div className=" w-[60%] p-10">
                    <div>
                      <h3 className="mb-4 text-[#022D62] text-2xl font-semibold">
                        Group Companies
                      </h3>
                      <p className="mb-4 text-[#676C71] leading-7">
                        Established in 2024, Askzenix Technologies is a global
                        consulting and IT services company with more than 50+
                        employees.
                      </p>
                      <div className="flex justify-between mt-7 items-center mb-10">
                        <div className=" w-[30%] cursor-pointer">
                          <img src="https://dfck301lncdlh.cloudfront.net/images/forEstablished/askmetraining.png"></img>
                        </div>
                        <div className="w-[30%] cursor-pointer">
                          <img src="https://dfck301lncdlh.cloudfront.net/images/forEstablished/HomeOnline.png"></img>
                        </div>
                        <div className="w-[25%] cursor-pointer">
                          <img src="https://dfck301lncdlh.cloudfront.net/images/forEstablished/askmetech.svg"></img>
                        </div>
                      </div>
                      <div className="h-12 relative">
                        <div className="absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-47">
                          <div className="w-47 transition-[width] duration-2000  flex items-center justify-center h-12">
                            <h3 className="text-[#022D62] font-semibold">
                              Become a Partner
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showData === "e3" && (
                <div className="  p-2 w-full gap-2 flex">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/TechnologyPartner.jpg"
                    ></img>
                  </div>
                  <div className=" w-[60%] p-10">
                    <div>
                      <h3 className="mb-4 text-[#022D62] text-2xl font-semibold">
                        Our Technology Partners
                      </h3>
                      <p className="mb-4 text-[#676C71] leading-7">
                        We work with leading technology companies to help our
                        clients deliver exceptional personalized experiences to
                        their customers
                      </p>
                      <div className="flex  justify-around mt-7 items-center mb-10">
                        <div className=" w-[23%] cursor-pointer">
                          <img src="https://dfck301lncdlh.cloudfront.net/images/client-logo/denso.png"></img>
                        </div>
                        <div className="w-[30%] cursor-pointer">
                          <img src="https://dfck301lncdlh.cloudfront.net/images/client-logo/touchpointtrans.png"></img>
                        </div>
                        <div className="w-[23%] cursor-pointer">
                          <img src="https://dfck301lncdlh.cloudfront.net/images/client-logo/vinebrookhomes.png"></img>
                        </div>
                      </div>
                      <div className="h-12 relative">
                        <div className="absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-47">
                          <div className="w-47 transition-[width] duration-2000  flex items-center justify-center h-12">
                            <h3 className="text-[#022D62] font-semibold">
                              {" "}
                              Become a Partner
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showData === "e4" && (
                <div className=" w-full gap-2 flex p-2">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/Team.jpg"
                    ></img>
                  </div>
                  <div className="w-[60%] pl-10  ">
                    <div>
                      <h3 className="mb-3 text-[#022D62] text-2xl font-semibold">
                        Meet Our Leaders
                      </h3>
                      <p className="mb-3 text-[#676C71]">
                        Meet our leaders and the hard-working personalities who
                        deliver innovative concepts to corporations like yours.
                      </p>
                      <div className=" flex justify-around  items-center mb-6">
                        <div className=" w-[27%] cursor-pointer ">
                          <img
                            className="rounded-sm "
                            src="https://dfck301lncdlh.cloudfront.net/images/team/ashok.jpg"
                          ></img>
                          <a>
                            <h3 className="text-center mt-3 font-semibold text-[#022D62]">
                              Ashok Kumar
                            </h3>
                          </a>
                          <p className="text-center text-[#676C71]">
                            Founder & CEO
                          </p>
                        </div>
                        <div className="w-[28.7%] cursor-pointer ">
                          <img
                            className="rounded-sm"
                            src="https://dfck301lncdlh.cloudfront.net/images/team/hemendra.jpg"
                          ></img>
                          <a>
                            <h3 className="text-center mt-3 font-semibold text-[#022D62]">
                              Hemendra Singh
                            </h3>
                          </a>
                          <p className="text-center text-[#676C71]">
                            Technical Architect
                          </p>
                        </div>
                        <div className="w-[29%] cursor-pointer mt-7">
                          <img
                            className="rounded-sm"
                            src="https://dfck301lncdlh.cloudfront.net/images/team/Gautam.png"
                          ></img>
                          <a>
                            <h3 className="text-center mt-2 font-semibold text-[#022D62]">
                              Gautam Gupta
                            </h3>
                          </a>
                          <p className="text-center text-[#676C71]">
                            Chief Technologies Officer
                          </p>
                        </div>
                      </div>
                      <div className=" h-12 relative">
                        <div className="absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-43">
                          <div className="w-43 transition-[width] duration-2000  flex items-center justify-center  h-12">
                            <h3 className="text-[#022D62] font-semibold">
                              View Our Team
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showData === "e5" && (
                <div className="p-2 w-full gap-2 flex">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/Career.jpg"
                    ></img>
                  </div>
                  <div className=" w-[60%] pl-10 ">
                    <div>
                      <h3 className="mb-1 text-[#022D62] text-2xl font-semibold">
                        Are you the best?
                      </h3>
                      <p className="mb-2 text-[#676C71]">
                        Become a part of a technology revolution working with
                        us. We are a customer-oriented digital solutions
                        provider. Ever since our inception, we have grown by
                        leaps and bounds with the notable efforts of our
                        workforce.
                      </p>
                      <h4 className="mb-4 text-[#022D62] text-xl font-semibold">
                        Why work with us?
                      </h4>
                      <div className=" flex  justify-between mb-6">
                        <div className="pl-5 w-1/2 leading-8 ">
                          <ul>
                            <li>Flexible Working Hours</li>
                            <li>Company Activities</li>
                            <li>Awesome Co-Workers</li>
                            <li>Transparency From Top To Bottom</li>
                          </ul>
                        </div>
                        <div className="pr-11 leading-8">
                          <ul>
                            <li>Competitive Salaries</li>
                            <li>Growth Opportunity</li>
                            <li>Health, Dental, And Vision</li>
                            <li>Collaborative environment</li>
                          </ul>
                        </div>
                      </div>
                      <div className="  h-12 relative">
                        <div className="absolute h-12 w-15 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-60">
                          <div className="w-60 transition-[width] duration-2000  flex items-center justify-center h-12">
                            <h3 className="text-[#022D62] font-semibold">
                              View Available Positions
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="  bg-[#022D62] ">
        <div className="flex w-[80%] justify-self-center py-10 flex-wrap ">
          <div className="w-4/3">
            <h2 className="text-white text-4xl font-bold pr-10 leading-14 text-wrap">
              Offering Exceptional Services to Different Industries
            </h2>
          </div>
          <div className="">
            <p className="text-white text-2xl text-wrap">
              We have clients across different industrial sectors. Our experts
              offer customized and innovative solutions as per your business
              needs. We cater to a multitude of industries
            </p>
          </div>
        </div>

        <div className=" flex w-[80%] justify-self-center justify-between gap-3 ">
          <div className=" text-white p-5 leading-10  w-1/4 group ">
            <ul>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Automotive
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Retail
                </a>
              </li>
              <li className="border mt-5 text-[#676C71] group-hover:text-amber-50 duration-500"></li>
            </ul>
          </div>
          <div className=" text-white p-5 leading-10 w-1/4 group">
            <ul>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Publishing
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  FMCG
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Travel and Tourism
                </a>
              </li>
              <li className="border mt-5  text-[#676C71] group-hover:text-amber-50 duration-500"></li>
            </ul>
          </div>
          <div className=" text-white p-5 leading-10 w-1/4 group">
            <ul>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Media and Entertainment
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  e-commerce
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Health Care
                </a>
              </li>
              <li className="border mt-5 text-[#676C71] group-hover:text-amber-50 duration-500"></li>
            </ul>
          </div>
          <div className=" text-white p-5 leading-10 w-1/4 group">
            <ul>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Real Estate
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Hospitality
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:tracking-wider hover:text-[#4c8B81] hover:font-semibold duration-300
                  "
                >
                  Industrial and Manufacturing
                </a>
              </li>
              <li className="border mt-5 text-[#676C71] group-hover:text-amber-50 duration-500"></li>
            </ul>
          </div>
        </div>

        <div className=" w-1/2 flex justify-self-center  p-7">
          <p className="text-white flex items-center">
            Get Solutions for Any Industry Right Here- Browse Industries
          </p>
          <div className=" h-12 relative pl-10">
            <div className="absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-50">
              <div className="w-50 transition-[width] duration-2000  flex items-center justify-center  h-12">
                <h3 className="text-white font-semibold">
                  Brouse industries
                  <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="  px-50 py-10 bg-[#f8f8f8] ">
        <div className="  flex gap-2 rrrr">
          <div className="  w-1/3">
            <h3 className="py-5 text-3xl text-[#022D62] font-bold leading-12">
              Take A Look at Our Range of Services
            </h3>
            <p className="text-xl pb-10">
              We offer complete digital transformation services for the fortune
              500 client acroos the globe.
            </p>
            <div className=" h-12 relative ">
              <div className="absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-50">
                <div className="w-50 transition-[width] duration-2000  flex items-center justify-center  h-12">
                  <h3 className="text-[#022D62] font-semibold">
                    Continue With us
                    <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-2/3 h-[670px] p-2 overflow-y-scroll scrollbar flex gap-6">
            <div className=" w-1/2 flex flex-col gap-10">
              <div className=" px-6 py-8 bg-[#ffffff] rounded-lg text-[#4c8B81] hover:bg-[#022D62] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:text-white duration-300">
                <i className=" text-5xl fa-solid fa-cloud"></i>
                <h5 className=" text-xl font-bold py-4">
                  Web Development Services
                </h5>
                <p className=" leading-8 font-medium pb-3">
                  We craft captivating and user-centric websites that turn
                  visitors into loyal customers. So make a remarkable online
                  impact by choosing our web development services
                </p>
              </div>
              <div className="">
                <div className=" px-6 py-8 bg-[#ffffff] rounded-lg text-[#4c8B81] hover:bg-[#022D62] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:text-white duration-300 ">
                  <i className="  text-5xl fa-solid fa-bullhorn"></i>
                  <h5 className=" text-xl font-bold py-4">
                    Mobile App Development Services
                  </h5>
                  <p className=" leading-8 font-medium">
                    Boost your brand's mobile presence with our mobile app
                    development services. We make apps that are easy to use and
                    work on different devices, so your customers have a great
                    experience
                  </p>
                </div>
              </div>
              <div>
                <div className=" px-6 py-10 bg-[#ffffff] rounded-lg text-[#4c8B81] hover:bg-[#022D62] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:text-white duration-300">
                  <i className="  text-5xl fa-solid fa-computer"></i>
                  <h5 className=" text-xl font-bold py-4">Branding Services</h5>
                  <p className=" leading-8 font-medium">
                    We craft memorable brand identities that tell your unique
                    story. Our work, from amazing logos to well-matched web
                    design, makes sure your brand stands out
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-1/2 flex flex-col gap-10 pt-20">
              <div>
                <div className=" px-6 py-8 bg-[#ffffff] rounded-lg text-[#4c8B81] hover:bg-[#022D62] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:text-white duration-300">
                  <i className="  text-5xl fa-solid fa-book-bookmark"></i>
                  <h5 className=" text-xl font-bold py-4">
                    Search Engine Optimization (SEO)
                  </h5>
                  <p className=" leading-8 font-medium">
                    Boost your online visibility with our SEO expertise. We will
                    optimize your website to rank higher in search engines and
                    attract more organic traffic.
                  </p>
                </div>
              </div>
              <div>
                <div className=" px-6 py-10 bg-[#ffffff] rounded-lg text-[#4c8B81] hover:bg-[#022D62] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:text-white duration-300">
                  <i className=" text-5xl fa-brands fa-searchengin"></i>
                  <h5 className=" text-xl font-bold py-4">
                    Pay-Per-Click Advertising (PPC):
                  </h5>
                  <p className=" leading-8 font-medium">
                    Maximize your ROI with our PPC campaigns. We shall create
                    targeted ads that drive immediate traffic and conversions
                  </p>
                </div>
              </div>
              <div>
                <div className=" px-6 py-10 bg-[#ffffff] rounded-lg text-[#4c8B81] hover:bg-[#022D62] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)] hover:text-white duration-300">
                  <i className="  text-5xl fa-solid fa-bullhorn"></i>
                  <h5 className=" text-xl font-bold py-4">
                    Social Media Marketing
                  </h5>
                  <p className=" leading-8 font-medium">
                    Engage and expand your audience on social platforms. Our
                    social media strategies will elevate your brand, drive
                    engagement, and increase leads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="">
        <div className=" w-3/4 flex justify-self-center gap-1 p-1">
          <div className=" w-2/3 flex flex-col  ">
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
              <div className=" h-12 relative ">
                <div className="  absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-57">
                  <div className="w-57 transition-[width] duration-2000  flex items-center justify-center  h-12">
                    <h3 className="text-[#022D62] font-semibold ">
                      Client Success Stories
                      <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
                    </h3>
                  </div>
                </div>
              </div>
              <div className=" mt-10 border-b text-[#cbcbcb] "></div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border  bg-[#022D62] py-12 flex justify-center items-center gap-20 mt-5 ">
        <div className="flex gap-3">
          <div>
            <i className="text-7xl pr-2 text-[#4c8B81] fa-regular fa-face-smile"></i>
          </div>
          <div className="text-white flex flex-col justify-center  ">
            <h2 className="font-bold text-3xl pb-2">100+</h2>
            <p className="text-lg">Happy Clients</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <i className="text-7xl pr-2 text-[#4c8B81] fa-solid fa-trophy"></i>
          </div>
          <div className="text-white flex flex-col justify-center  ">
            <h2 className="font-bold text-3xl pb-2">50+</h2>
            <p className="text-lg">50+ Skilled Experts</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <i className="text-7xl pr-2 text-[#4c8B81] fa-solid fa-thumbs-up"></i>
          </div>
          <div className="text-white flex flex-col justify-center  ">
            <h2 className="font-bold text-3xl pb-2">97+</h2>
            <p className="text-lg">Finished Projects</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <i className="text-7xl pr-2 text-[#4c8B81] fa-solid fa-bullhorn"></i>
          </div>
          <div className="text-white flex flex-col justify-center  ">
            <h2 className="font-bold text-3xl pb-2">1090+</h2>
            <p className="text-lg">Media Posts</p>
          </div>
        </div>
      </section> */}

      {/* <section className="  pt-6">
        <div className=" w-1/2 flex flex-col justify-self-center ">
          <h2 className="text-[#022D62] text-4xl font-bold text-center px-5 py-5">
            Blogs, Articles, Announcements, and More
          </h2>
          <p className="text-center text-xl font-sm px-5 pb-5">
            Add to your knowledge bank by reading our blogs and articles right
            here right now
          </p>
        </div>
        <div className="border-b border-[#676C71] flex mt-5 w-3/4 justify-self-center gap-2 pb-10 ">
          <div className="w-2/3 flex flex-col gap-2 ">
            <div className="">
              <img
                className="rounded-lg h-94 w-"
                src="https://dfck301lncdlh.cloudfront.net/resource/blogs/abdc01f85803b4f29a24f5728381d53f-678908b43562b.png"
              ></img>
            </div>
            <div className="">
              <div className="flex justify-between px-10">
                <div className=" font-medium text-sm flex items-center justify-center  rounded-2xl bg-[#f6f6f6]">
                  <a className="text-[#4c8B81] cursor-pointer">Technical</a>
                </div>
                <div className="">
                  <a className="text-[#676C71] cursor-pointer">16 Jan, 2024</a>
                </div>
              </div>
              <h3 className="text-[#022D62] text-xl font-semibold px-7 py-5">
                What's New in React for 2025? A Look at Features and Updates
              </h3>
              <p className="text-[#676C71] leading-8 px-7">
                As we enter 2025, React continues to be one of the most popular
                front-end libraries for building dynamic, interactive web
                applications. With the React ecosystem constantly evolving,
                keeping up with the latest features and updates is crucial for
                developers. We’ll explore the key features, updates, and
                improvements in React that are shaping the development landscape
                in 2025.
              </p>
            </div>
          </div>
          <div className=" w-1/3 flex flex-col ">
            <div className="  flex flex-col gap-1">
              <div className="">
                <img
                  className="rounded-lg"
                  src="https://dfck301lncdlh.cloudfront.net/resource/blogs/655013d4b95b0207ed4de00402258737-66f25c0db7901.png"
                ></img>
              </div>
              <div className="flex flex-col gap-2">
                <div className=" flex justify-between px-5">
                  <div className=" font-medium text-sm flex items-center justify-center w-1/4 rounded-2xl bg-[#f6f6f6]">
                    <a className="text-[#4c8B81] cursor-pointer">Technical</a>
                  </div>
                  <div>
                    <a className="text-[#676C71] cursor-pointer">
                      24 Sep, 2024
                    </a>
                  </div>
                </div>
                <h5 className="text-[#022D62] pl-4 text-xl pr-5 font-semibold">
                  <a className="cursor-pointer hover:text-[#4c8B81] duration-400">
                    Asynchronous Programming in Node.js: Promises and Callbacks
                  </a>
                </h5>
              </div>

              <div className=" pt-6">
                <img
                  className="rounded-lg"
                  src="https://dfck301lncdlh.cloudfront.net/resource/blogs/df80ffdb9e559ac55189d2075a849283-66e7fb4c4b635.png"
                ></img>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex justify-between px-5">
                  <div className=" font-medium text-sm flex items-center justify-center w-1/4 rounded-2xl bg-[#f6f6f6]">
                    <a className="text-[#4c8B81] cursor-pointer">Technical</a>
                  </div>
                  <div>
                    <a className="text-[#676C71] cursor-pointer">
                      16 Sep, 2024
                    </a>
                  </div>
                </div>
                <h5 className="text-[#022D62] pl-4 text-xl pr-5 font-semibold ">
                  <a className="cursor-pointer hover:text-[#4c8B81] duration-400">
                    Introduction to Node.js: Event-Driven Programming in
                    JavaScript
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/2 flex  justify-self-center justify-center  items-center  p-10">
          <p className="text-[#676C71] pr-8   ">
            We have articles on a range of topics
          </p>
          <div className=" h-12 relative ">
            <div className="absolute h-12 w-14 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-44">
              <div className="w-44 transition-[width] duration-2000  flex items-center justify-center  h-12">
                <h3 className="text-[#022D62]  font-semibold">
                  View All Blogs
                  <i className="fa-solid fa-chevron-right  pl-3 text-lg"></i>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="border bg-[#022D62] pb-4">
        <h2 className="text-center text-white text-4xl font-semibold py-5">
          Share your vision and we will make it our mission
        </h2>
        <p className="text-center text-white text-xl pb-5 pt-2">
          For efficient and customized digital marketing solutions connect with
          us now
        </p>
        <div className=" h-12  pr-30 justify-self-center ">
          <div className="absolute h-12 w-16 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-48 ">
            <div className="w-48 transition-[width] duration-2000  flex items-center justify-center  h-12">
              <h3 className="text-white  font-semibold">
                Let’s Get Started
                <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
              </h3>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
};


export default Askme;
