import { Link } from 'react-router'
const Right = (props) => {
  return (
    <>
      <li className="pr-5">
              <Link to={"/phone"} className="cursor-pointer hover:text-[#4C8B81] duration-200 ">
                <i className={`${props.icon} me-2 `}></i> {props.text}
              </Link>
            </li>
    </>
  )
}
export default Right