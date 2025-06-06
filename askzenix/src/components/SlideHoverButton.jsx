import React from 'react'

const SlideHoverButton = (props) => {
  return (
    <div>
         <div className=" w-1/4  flex text-white items-center ">
             <div className=" h-12  justify-self-center ">
          <div className="absolute h-12 w-16 rounded-full  bg-[#4c8B81] transition-[width] duration-500 hover:w-52 ">
            <div className=" w-52 transition-[width] duration-2000  flex items-center justify-center  h-12">
              <h3 className={` ${props.textColor} font-semibold `}>
                {props.text}
                <i className="fa-solid fa-chevron-right  pl-3 text-md"></i>
              </h3>
            </div>
          </div>
        </div>
          </div>
    </div>
  )
}

export default SlideHoverButton
