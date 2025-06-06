import { Link } from "react-router";

const Cards = (props) => {
 
  return (
    <div>
      <div className="flex flex-col justify-center text-center ">
      <div className="pb-14">
        <h2 className="text-6xl font-semibold text-[#022D62]">Services that help you grow.</h2>
        <p className="text-lg mt-5">Fortune 100 companies and established brands trust our enterprise software development.</p>
      </div>
        <div className="  p-2  flex gap-5 flex-wrap justify-center ">
          {props.sau.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  gap-2 w-51 rounded-md hover:bg-[#022D62]  duration-300 group hover:scale-103 shadow-xl">            
              <div className=" flex flex-col items-center  font-semibold text-lg text-[#022D62] group-hover:text-white ">
                <i className="p-3 text-6xl">{item.icon}</i>
                <h2 className="my-2">{item.head}</h2>
              </div>
              <ul className="  list-none group-hover:text-white ">
                {item.arr.map((item, index) => (
                  <li key={index} className="mb-4.5 ">
                    <Link className=" hover:tracking-widest duration-400 hover:text-semibold" to={item.path} >{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Cards
