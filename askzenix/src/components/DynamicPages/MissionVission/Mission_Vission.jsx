import Client from "../../Client"
import CareerAndMissin from "../CareerAndMissin"
import CommonSec from "../CommonSec"
import OurMission from "../OurMission"
const Mission_Vission = () => {
  return (
    <>
      <CommonSec img="https://dfck301lncdlh.cloudfront.net/resource/img/pages/a13271042220f41ac4bb394ef7e023ee-659fd2bca5751.webp" title="Mission and vision" p="Our Expertise. Know more about what we do"/>
      <div className="flex flex-col justify-center items-center text-center py-12 ">
        <div className="p-4 md:p-0  md:w-[75%]">
          <h2 className="text-4xl font-bold mb-5 text-[#022D62] py-5">
            Askzenix Technologies empower steady venture change at speed and scale
          </h2>
          <p className="leading-7">
           Askzenix are an inventive organization, who works with energy and love. We offer the best types of assistance you want. We assist you with improving, We invest heavily in assisting our clients with conveying brilliant outcomes with regards to their tasks. From information to execution, we take care of you. Askzenix offers a total arrangement of site development, site designing, and customized programming developments Solution. we have been serving our clients in India and abroad for a long time and have taken care of every one of our tasks with an elevated degree of impressive skill clubbed with quality help.
          </p>
        </div>
        </div>
      <Client/>
      <CareerAndMissin/>
      <div className="w-[74%] justify-self-center  mb-20">
      <OurMission/>
      </div>
    </>
  )
}

export default Mission_Vission
