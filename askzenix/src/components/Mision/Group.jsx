const Group = (props) => {
  return (
    <div>
      <div>
        <h3 className="mb-4 text-[#022D62] text-2xl font-semibold">
          {props.title}
        </h3>
        <p className="mb-4 text-[#676C71] leading-7">{props.des}</p>
        <div className="flex justify-between mt-7 items-center mb-10">
          <div className=" w-[30%] cursor-pointer">
            <img src={props.img1}></img>
          </div>
          <div className="w-[30%] cursor-pointer">
            <img src={props.img2}></img>
          </div>
          <div className="w-[25%] cursor-pointer">
            <img src={props.img3}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group;
