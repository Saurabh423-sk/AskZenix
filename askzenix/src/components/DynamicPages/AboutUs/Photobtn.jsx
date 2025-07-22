const Photobtn = ({ text, eventImg, setEventImg }) => {
  const handle = () => {
    setEventImg(text);
  };

  const isActive = eventImg === text;

  return (
    <div
      onClick={handle}
      className={`border w-36 my-4 rounded-md flex justify-center items-center cursor-pointer font-semibold py-1 transition duration-200
        ${isActive ? "bg-[#022D62] text-white" : "text-[#022D62] hover:bg-[#022D62] hover:text-white"}`}
    >
      <h2>{text}</h2>
    </div>
  );
};

export default Photobtn;
