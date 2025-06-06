import { Link } from "react-router"
const Left = (props) => {
  return (
    <>
      <div className="pr-6 ">
            <Link to={"/mail"} className="cursor-pointer hover:text-[#4C8B81] duration-200 ">
              <i className={`${props.icon} me-2 `}></i>
               {props.text}
            </Link>
          </div>
    </>
  )
}
export default Left