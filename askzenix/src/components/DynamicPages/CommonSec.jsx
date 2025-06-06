const CommonSec = (props) => {
  return (
    <>
      <div className="relative ">
     <img
    className="w-full h-60 md:h-85 "
    src={props.img}/>
    <div className="absolute inset-0 flex  flex-col items-center justify-center text-white ">
    <h1 className="text-4xl md:text-6xl pb-5 ">{props.title}</h1>
    <p className=" md:text-xl text-center">{props.p}</p>
  </div>
</div>
    </>
  )
}

export default CommonSec
