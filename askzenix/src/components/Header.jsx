import Left from "./Header/Left";
import Right from "./Header/Right";
const Header = () => {
  return (
    <div className="border-b border-[#dbd9d9] flex py-4 justify-center flex-wrap">
      <div className=" flex  w-8/9 justify-between p-1 items-center flex-wrap">
        <div className="flex gap-2 text-[13px] font-medium text-[#022D62]">
          <Left text="info@askzenixtechnologies.com" icon="fa-solid fa-envelope"/>
          <Left text="Plot No.A-25,Suite No.102,Sector-63,Noida,U.P" icon="fa-solid fa-location-dot"/>
        </div>
        <div>
          <ul className="flex gap-2 text-[13px] font-medium text-[#022D62]">
            <Right text="+91-9999385943" icon="fa-brands fa-square-whatsapp"/>
            <Right text="Contact with" icon="fa-solid fa-address-book"/>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;