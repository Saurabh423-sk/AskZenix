
import { Link } from "react-router"
import SlideHoverButton from "./SlideHoverButton"


const Share = (props) => {
  return (
    <>
      <div className="bg-[#022D62] mt-5 text-white text-center">
        <h2 className="text-4xl font-bold py-8">{props.title}</h2>
        <p className="text-lg">{props.p}</p>
        <div className="flex justify-center  py-5 ">
        <Link to="/Lets-start" className=" w-53 ">
         <SlideHoverButton text="Let’s Get Started"/>
        </Link>
        </div>
      </div>
    </>
  )
}

export default Share
