import { FaChevronUp ,FaChevronDown} from "react-icons/fa";
import './Askme.css'
import { Link ,NavLink} from 'react-router-dom';
import { useState } from "react";
const Navbar = (props) => {
const[open,setOpen]=useState(false)
  return (
    <div>
      <nav className="flex justify-center items-center relative">
        <div className="flex w-8/9 justify-between p-3 items-center">
          <div className="w-28">
            <a href="./Askme">
              <img
                className="w-full"
                src="https://www.askzenixtechnologies.com/images/zenix-logo.webp"
                alt="Askme Technologies Logo"/>
            </a>
          </div>

          <div
            className={` items-center  text-[#022D62] flex tracking-normal max-[991px]:hidden  max-[991px]:w-full max-[991px]:absolute max-[991px]:flex-col max-[991px]:p-5    nav  ${
              open ? "activeMenu" : ""
            }`}
          >
            <NavLink
              className="text-[#4c8B81] px-4 py-3 font-semibold "
              to="/Home"
            >
              Home
            </NavLink>

            <div className="relative group px-4 py-3 cursor-pointer flex flex-wrap">
              <NavLink className="flex items-center gap-1  text-[#022D62] font-semibold flex-row">
                Services
                <FaChevronDown className="pt-0.5 text-[#4C8B81] group-hover:rotate-180 transition duration-500" />
              </NavLink>
              <div className="absolute top-full  z-99 hidden group-hover:block  bg-white shadow-xl transform translate-x-[-100px] rounded-sm   duration-300  ">
              <div  className="  flex flex-col ">
              <div className="flex  gap-1  px-2 ">
                {props.dropmenu?.slice(0,4)?.map((item, index) => (
                  <div key={index} className=" w-58 ">
                    <h2  className=" font-bold pb-2">{item.title}</h2>
                    {item.data?.map((subitem, idx) => (
                      <Link to={subitem.path} key={idx} className="flex font-medium text-sm rounded-sm mb-1 hover:pl-3 hover:text-[#4C8B81] hover:bg-[#f4f6f8] duration-300" >
                        {subitem.label}
                      </Link>
                    ))}
                    </div>
                ))}
                
                 </div>
                 <div className="flex gap-1  justify-between p-2  ">
                {props.dropmenu?.slice(4,8)?.map((item, index) => (
                  <div key={index} className="  w-58 ">
                    <h2  className=" font-bold pb-2">{item.title}</h2>
                    {item.data?.map((subitem, idx) => (
                      <Link to={subitem.path} key={idx} className="flex rounded-sm mb-1 text-sm font-medium hover:pl-3 hover:text-[#4C8B81] hover:bg-[#f4f6f8]  duration-300">
                        {subitem.label }
                      </Link>
                    ))}
                    </div>
                ))}               
                 </div>
              </div>
            </div>
          </div>
        <div className="relative group px-4 py-3 cursor-pointer">
              <NavLink className="flex items-center gap-1 text-[#022D62] font-semibold flex-row ">
                Hire Developers
                <FaChevronDown className="pt-0.5 text-[#4C8B81] group-hover:rotate-180 transition duration-500" />
              </NavLink>
              <div className="absolute top-full  z-100 hidden group-hover:block  bg-white shadow-xl transform translate-x-[-220px] rounded-sm   duration-300  ">
              <div  className="  flex flex-col ">
              <div className="flex  gap-1  px-2 ">
                {props.hire?.slice(0,4)?.map((item, index) => (
                  <div key={index} className=" w-58 ">
                    <h2  className=" font-bold pb-2">{item.title}</h2>
                    {item.data?.map((subitem, idx) => (
                      <Link to={subitem.path} key={idx} className="flex font-medium text-sm rounded-sm mb-1 hover:pl-3 hover:text-[#4C8B81] hover:bg-[#f4f6f8] duration-300" >
                        {subitem.label}
                      </Link>
                    ))}
                    </div>
                ))}
                 </div>
                 <div className="flex gap-1   p-2  ">
                {props.hire?.slice(4,7)?.map((item, index) => (
                  <div key={index} className="  w-58 ">
                    <h2  className=" font-bold pb-2">{item.title}</h2>
                    {item.data?.map((subitem, idx) => (
                      <Link to={subitem.path} key={idx} className="flex rounded-sm mb-1 text-sm font-medium hover:pl-3 hover:text-[#4C8B81] hover:bg-[#f4f6f8]  duration-300">
                        {subitem.label }
                      </Link>
                    ))}
                    </div>
                ))}
                 </div>
              </div>
            </div>
            </div>
            <div className="relative group px-4 py-3 cursor-pointer">
               <NavLink className="flex items-center gap-1 text-[#022D62] font-semibold flex-row ">
                Industries
                <FaChevronDown className="pt-0.5 text-[#4C8B81] group-hover:rotate-180 transition duration-500" />
              </NavLink>
              <div className="absolute top-full  z-99 hidden group-hover:block  bg-white shadow-xl  rounded-sm   duration-300  ">
              <div  className="  flex flex-col ">
              <div className="flex  gap-1  p-2 ">
                {props.Industry?.map((item, index) => (
                  <div key={index} className=" w-50 ">
                    {item.data?.map((subitem, idx) => (
                      <Link to={subitem.path} key={idx} className="flex font-medium text-sm rounded-sm mb-1 hover:pl-3 hover:text-[#4C8B81] hover:bg-[#f4f6f8] duration-300" >
                        {subitem.label}
                      </Link>
                    ))}
                    </div>
                ))}                
                 </div>
              </div>
            </div>
            </div>
            <NavLink
              className="flex gap-1 px-4 py-3 max-[1060px]:px-auto font-semibold"
              to="#">
              Portfolio
            </NavLink>
            <div className="relative group px-4 py-3 cursor-pointer">
              <NavLink className="flex items-center gap-1 text-[#022D62] font-semibold flex-row ">
                Company
                <FaChevronDown className="pt-0.5 text-[#4C8B81] group-hover:rotate-180 transition duration-500" />
              </NavLink>
              <div className="absolute top-full  z-99 hidden group-hover:block  bg-white shadow-xl  rounded-sm   duration-300  ">
              <div  className="  flex flex-col ">
              <div className="flex  gap-1  p-2 ">
                {props.Company?.map((item, index) => (
                  <div key={index} className=" w-50 ">
                    {item.data?.map((subitem, idx) => (
                      <Link to={subitem.path} key={idx} className="flex font-medium text-sm rounded-sm mb-1 hover:pl-3 hover:text-[#4C8B81] hover:bg-[#f4f6f8] duration-300" >
                        {subitem.label}
                      </Link>
                    ))}
                   </div>
                ))}               
                 </div>
              </div>
            </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex w-35 items-center justify-center border-1 font-[500] text-[14px] text-white rounded-md bg-[#4c8B81] hover:bg-[#022D62] duration-200 ease-in py-2 px-5">
              <ul>
                <li><a href="/request">Request Quote</a></li>
              </ul>
            </div>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="border px-1.5  text-2xl hidden max-[991px]:block">
          {open ? (<i className=" fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}
        </button>
      </nav>
    </div>
  );
};
export default Navbar;