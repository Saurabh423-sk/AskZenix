import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ClientStudy = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Study")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="  ">
        {data.map((item, index) => (
          <div key={index} className="  justify-self-center ">
            {item[props.plateforms]?.map((subi, ids) => (
              <div
                key={ids}
                className=" flex w-[74%] justify-self-center my-25">
                <div className="  p-2 w-1/2 ">
                  <h2 className="text-[40px] font-bold text-[#022D62] mb-4">
                    {subi.title}
                  </h2>
                  <a className="text-xl font-semibold text-[#4C8B81] ">
                    {subi.Url}
                  </a>
                  <p className="text-xl text-[#646464] my-5">{subi.des}</p>
                  <h4 className="text-xl font-bold text-[#022D62] mt-4">
                    Technology Stack
                  </h4>
                  <div className=" flex  gap-5  flex-wrap mr-20 mb-10 mt-4 ">
                    {subi.list.map((listitem, listidx) => (
                      <ul
                        key={listidx}
                        className=" text-[#4C8B81] font-bold text-xs pl-4"
                      >
                        <li className="flex">{listitem}</li>
                      </ul>
                    ))}
                  </div>

                  <a className=" text-white text-lg py-3.5 px-7 rounded-md font-bold bg-[#4C8B81] hover:bg-[#022D62] duration-200">
                    More Details
                  </a>
                </div>
                <div className="  flex  justify-center items-center ml-10 w-1/2">
                  {subi.imgs.length === 2 &&
                    subi.imgs.map((imageObj, idx) => (
                      <div
                        key={idx}
                        className="m-2 w-1/2 bg-[#dededf] h-46 group rounded-md inset-shadow-sm">
                        <img src={imageObj.img} alt="imgs" className="w-25 h-35 my-5 mx-10 group-hover:scale-105 duration-500 overflow-hidden"/>
                        <p className="text-center py-3 bg-[#ebe9e9]">
                          {imageObj.label}
                        </p>
                      </div>
                    ))}
                     {subi.imgs.length === 1 &&
                    subi.imgs.map((imageObj, idx) => (
                      <div key={idx} className="hover:mb-2 duration-200 hover:shadow-xl">
                        <img src={imageObj.img} alt="imgs" className=" group-hover:scale-105 duration-500 "/>
                        <p className="text-center py-4 font-medium rounded-md text-[#4C8B81] shadow-md
">
                          {imageObj.label}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default ClientStudy;
