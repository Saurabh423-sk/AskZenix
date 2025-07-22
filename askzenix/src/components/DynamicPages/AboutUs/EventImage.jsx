import React, { useEffect, useState } from 'react';
import axios from 'axios'
const EventImage = ({ eventImg })  => {


 const [data, setData] = useState([]);

 
useEffect(() => {
       {
        axios.get("http://localhost:3000/Events")
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
    { eventImg === "Tech Events" && (
      <div className="  flex justify-center flex-wrap ">
      {data.slice(0,4).map((item,index) => (
          <div key={index} className=''>
           <img src={item.img} className='w-75 p-3 '></img>
          </div>
      ))}
    </div>)}

     { eventImg === "Diwali Events" && (
     <div className="  flex justify-center flex-wrap ">
      {data.slice(4,8).map((item,index) => (
          <div key={index} className=''>
           <img src={item.img} className='w-75 p-3'></img>
          </div>
      ))}
    </div>)}
    </>
  )
}

export default EventImage
