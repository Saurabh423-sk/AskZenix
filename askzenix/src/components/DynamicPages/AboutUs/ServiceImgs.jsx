import { useState , useEffect } from "react";
import axios from 'axios'
const ServiceImgs = () => {

  const [data, setData] = useState([]);

 
useEffect(() => {
       {
        axios.get("http://localhost:3000/ServiceImg")
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

      <div>
      <div className="w-1/2 justify-self-center my-12">
   <h2 className="text-4xl text-[#022D62] text-center font-bold ">Our offerings encompass a diverse range of services.</h2>
   <p className="text-center text-xl font-meduim py-5">We offer web development services, digital solutions, and testing services.</p>
   </div>
      <div className=" flex justify-center flex-wrap mx-1">
     {data.map((item, index) => (
  <div key={index} className='p-3 relative'>
    <div className="group relative overflow-hidden">
      <img src={item.img} alt={item.title || "service image"} className="block w-full" />
      <div className="h-60 absolute inset-0 z-10 bg-[rgba(2,45,98,0.74)] m-0.2 text-sm
                      transform -translate-x-full opacity-0
                      group-hover:translate-x-0 group-hover:opacity-100
                      transition-all duration-500 ease-in-out flex flex-col overflow-auto p-3">
        
          {item.brand?.map((subItem, idx) => (
            <ul key={idx} className="text-white text-sm  leading-6 ">
              <li className="cursor-pointer">{'\u2022'}  &nbsp;   {subItem}</li>
            </ul>
          ))}
        
      </div>
    </div>
    <h2 className="bg-[#022D62] py-2.5 text-lg text-center text-white">{item.title}</h2>
  </div>
))}

     </div>
    </div>
    </>
  )
}

export default ServiceImgs
