const Mission = (props) => {
  return (
    <>
      <h4 className="mb-4 text-[#022D62] text-2xl font-semibold">
        <i className={`${props.icon} me-2 text-[#4c8B81]`}></i>
        {props.title}
      </h4>
      <p className="mb-4 text-[#676C71] leading-7">
        {props.des}
      </p>
    </>
  );
}

export default Mission
