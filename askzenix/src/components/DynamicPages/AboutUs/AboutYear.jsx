const AboutYear = (props) => {
  return (
    <>
      <>
       
       <strong>{props.boldtext}</strong>
       <h5 className="text-[#022D62] pb-3"> {props.head}</h5>
       <p >{props.p}   <a  className=" text-[#022D62]">{props.a}</a></p>
       
       <p style={{ whiteSpace: "pre-line" }} className="py-3"> {props.text}</p>
       
      </>
    </>
  )
}
export default AboutYear