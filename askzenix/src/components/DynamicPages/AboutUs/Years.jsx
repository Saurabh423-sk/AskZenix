const Years = (props) => {
  const isSelected = props.Year === props.open;

  const bgColor = isSelected ? "bg-[#4C8B81]" : "bg-white";
  const borderColor = isSelected ? "border-[#4C8B81]" : "border-[#aaacad]";

  const handle = () => {
    props.setOpen(props.Year);
   
  };

  return (
    <div
      onClick={handle}
      className="cursor-pointer absolute flex flex-col right-0 -top-9.5 justify-center items-center list-none"
      style={{ right: props.value }}>
      <li>
        <a className="font-semibold">{props.Year}</a>
      </li>
      <a className={`border-2 ${borderColor} rounded-full p-1 mt-2 ${bgColor}`}></a>
    </div>
  );
};

export default Years;
