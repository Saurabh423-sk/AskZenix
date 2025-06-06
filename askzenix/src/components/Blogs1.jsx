import React from 'react'
import { Link } from 'react-router'

const Blogs1 = (props) => {
  return (
    <>
      <div className=" w-110 md:w-90">
                <img
                  className="rounded-lg"
                  src={props.img}
                ></img>
              </div>
              <div className=" flex flex-col gap-2">
                <div className=" flex justify-between px-5">
                  <div className=" font-medium text-sm flex items-center justify-center w-1/4 rounded-2xl bg-[#f6f6f6]">
                    <Link className="text-[#4c8B81] cursor-pointer">{props.p}</Link>
                  </div>
                  <div>
                    <a className="text-[#676C71] cursor-pointer">
                     {props.date}
                    </a>
                  </div>
                </div>
                <h5 className="text-[#022D62] pl-4 text-xl pr-5 font-semibold pb-5  ">
                  <a className="cursor-pointer hover:text-[#4c8B81] duration-400">
                    {props.des}
                  </a>
                </h5>
              </div>
    </>
  )
}

export default Blogs1
