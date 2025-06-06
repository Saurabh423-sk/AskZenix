import React from 'react'
import { Link } from 'react-router'

const ClientDetails = (props) => {
  return (
    <>
     <div className="relative text-[#676c71] flex justify-center ">
                  <div className="absolute bottom-0 w-8/9 bg-white rounded-sm h-[190px] gap-[10px] opacity-0 invisible translate-y-8 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all ease-in-out duration-300 group-hover:bottom-[20px]">
                    <div className="p-6 leading-7">
                      <a className="text-[18px] font-semibold text-[#022D62]"
                        href="#"> {props.text} </a>
                      <p>
                       {props.para}
                      </p>
                      <div className="p-2 mt-3 w-10 h-10 flex justify-center items-center border-1 bg-[#4c8B81] rounded-[50%]">
                      <Link to={props.path}>
                        <i className="text-white fa-solid fa-chevron-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default ClientDetails
