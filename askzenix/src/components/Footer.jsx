import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="">
      <div className="border-b-2 border-[#676C71] flex w-3/4 justify-self-center justify-between ">
     <img className="py-5 w-50 mb-8  " src="https://askmetechnologies.com/images/logo.svg"></img>
     <div className=" flex items-center gap-4 text-[#022D62] text-3xl">
     <a className="cursor-pointer" href="#"><i class="fa-brands fa-square-instagram"></i></a>
     <a  className="cursor-pointer" href="#"><i class="fa-brands fa-square-facebook"></i></a>
     <a className="cursor-pointer" href="#"><i class="fa-brands fa-square-twitter"></i></a>
     <a className="cursor-pointer" href="#"><i class="fa-brands fa-linkedin"></i></a>
     </div>
     </div>
      <div  className=" flex gap-2 w-3/4 justify-self-center  justify-between">
      
      <div className="">
      <h5 className="text-[#4C8B81] py-5 font-semibold text-2xl ">Our Services</h5>
      <div className="text-[#1a2837] leading-9 font-medium">
      <ul className="cursor-pointer ">
      <li className="hover:text-[#4C8B81] duration-200"><a>Web Development</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Mobile App Development</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Ecommerce Development</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Digital Marketing</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Digital Transformation</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Salesforce Development</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Independent Testing Services</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Branding Services</a></li>
      </ul>
      </div>
      </div>
      <div className="">
      <h5 className="text-[#4C8B81] py-5 font-semibold text-2xl ">Company</h5>
      <div className="text-[#1a2837] leading-9 font-medium">
      <ul className="cursor-pointer ">
      <li className="hover:text-[#4C8B81] duration-200"><a>Contact Us</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>About Us</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Careers</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>How We Work</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Our Team</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Mission vission</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Our Value</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Blogs</a></li>
      </ul>
      </div>
      </div>
      <div className="">
      <h5 className="text-[#4C8B81] py-5 font-semibold text-2xl ">Support</h5>
      <div className="text-[#1a2837] leading-9 font-medium">
      <ul className="cursor-pointer ">
      <li className="hover:text-[#4C8B81] duration-200"><a>Sitemap</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Cookies policy</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Privacy policy</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>Terms of Servivices</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>All Services</a></li>
      <li className="hover:text-[#4C8B81] duration-200"><a>All Hiring </a></li>
      </ul>
      </div>
      </div>
      <div className=" w-1/3 px-5 ">
      <h5 className="text-[#4C8B81] pt-5 pb-2 font-semibold text-2xl ">Contact</h5>
      <div className="text-[#1a2837] leading-9 font-medium flex flex-col gap-1 ">
      <div className="flex"> 
      <label className="pr-8 text-[#022D62]">Address:</label>
      <p><a className="cursor-pointer">Plot No. A-25, Suite No. 102, Sector - 63, Noida, U.P.</a></p>
      </div>
      <div className="flex "> 
      <label className="pr-8 text-[#022D62]">Phone:</label>
      <p><a className="cursor-pointer" href="#">+91-9999385943 <br/>+91-9999568773</a></p>
      </div>
    <div className="flex"> 
      <label className="pr-9 text-[#022D62]">Office:</label>
      <p><a className="cursor-pointer">+0120-3295306</a></p>
      </div>
        <div className="flex "> 
      <label className="pr-3 text-[#022D62]">US Mobile:</label>
      <p><a className="cursor-pointer">+1 317 608 0373</a></p>
      </div>
        <div className="flex"> 
      <label className="pr-8 mr-5 text-[#022D62]">Email:</label>
      <p><a className="cursor-pointer text-[#314763] ">info@askmetechnologies</a></p>
      </div>
     <div className="flex pb-2"> 
      <label className=" mr-5 text-[#0369e5]">Newsletter:</label>
      <input className="shadow-[0_1px_3px_0_rgba(0,0,0,0.02),_0_0_0_1px_rgba(27,31,35,0.15)] w-1/2 p-1" type="text" name="email" placeholder="Enter email" required></input>
      <button className="px-6  bg-[#4C8B81] hover:bg-[#022D62] duration-150" ><i class="text-white fa-solid fa-chevron-right"></i></button>
      </div>
      </div>
      </div>
      </div>
  
        <div className="py-12">
        <p className="text-center text-[#676C71]">©Copyright 2025 Askzenix-Technologies All Rights Reserved</p></div>


      </footer>
    </div>
  )
}

export default Footer
