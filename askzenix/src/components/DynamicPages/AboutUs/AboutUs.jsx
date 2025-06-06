import { useState } from "react";

import CommonSec from "../CommonSec";
import AboutYear from "./AboutYear";
import Time from "./Time";
import Years from "./Years";

const AboutUs = () => {
  const [open, setOpen] = useState("2024");
  return (
    <>
      <CommonSec
        img="https://dfck301lncdlh.cloudfront.net/resource/img/pages/About-us1702540597.jpg"
        title="About us"
        p="Our Expertise. Know more about what we dos"
      />
      <div className="flex flex-col justify-center items-center text-center py-12 ">
        <div className="p-4 md:p-0  md:w-[75%]">
          <h2 className="text-4xl font-bold mb-5 text-[#022D62]">
            Who are we?
          </h2>
          <p className="leading-7">
            <strong>Askzenix Technologies</strong> is founded in 2024 and since
            then we have provided thousands of web and digital solutions to
            clients around the world. Our numerous awards and honors are a
            reflection of our growing reputation and to our creativity. We
            provide our customers with excellence and professionalism. Our wide
            range of services includes website designing & development, app
            development, Staff augmentation services, digital transformation,
            salesforce consulting & indpendent testing services using the latest
            technologies.
          </p>
        </div>
      </div>

      <div className=" ">
        <div className=" relative border border-[#aaacad] w-[1000px] justify-self-center my-15">
          <div className="absolute left-0 w-[190px] border border-[#4C8B81]"></div>

          <Years Year="2018" value={100} open={open} setOpen={setOpen}/>
          <Years Year="2019" value={215} open={open} setOpen={setOpen}/>
          <Years Year="2020" value={330} open={open} setOpen={setOpen}/>
          <Years Year="2021" value={445} open={open} setOpen={setOpen}/>
          <Years Year="2022" value={560} open={open} setOpen={setOpen}/>
          <Years Year="2023" value={675} open={open} setOpen={setOpen}/>
          <Years Year="2024" value={790} open={open} setOpen={setOpen}/>
        </div>
      </div>
      <div className=" flex  justify-center m-2  ">
        <div className="  md:w-1/2   md:pl-30   ">
        {open === "2024" && (
          <div className=" md:flex ">
            <Time time="2024" />
            <div className=" flex flex-col  ">
              <AboutYear text=" In 2024, to streamline govt. & HR policies we have registered our new venture Askzenix Technologies Pvt. Ltd. We are slowly moving all of our existing and new business from Askme Technologies to new venture Askzenix Technologies Pvt. Ltd. We have successfully delivered multiple Project related to AI & iOT this year and develop our capabilities for AI projects." />
              <AboutYear
                boldtext="Project Title: Agentive AI in Performance Marketing Platform"
                p="Client:"
                a="www.nyx.today"
                text="NYX was born from a vision to simplify marketing and amplify results. In a world overwhelmed by complexity, we empower brands and creators to thrive by blending the art of storytelling with the precision of AI. Inspired by the belief that 'The universe is made of stories, not atoms,' we recognize that at the core of every great marketing campaign lies a compelling story"
              />
              <AboutYear
                boldtext="Project Title: Enhancing data processing efficiency with Agentive AI"
                p="Client:"
                a="www.vinebrookhomes.com"
                text="Askme Technologies developed Agentive AI Solution to address these inefficiencies. The AI system featured:
                  1.  Automated Bill Processing: Analyzing different formats of bills and processing the data through AI. Upload Thousands of Processed Bill through AI automatically in the application.
                  2.  Trend Application: Trained AI application for processing the different format of bills. We have achieved 95% success in processing the bill. We have hardly 5% data that needs manual intervention for processing and suggesting AI to adopt that format gradually.
                  3.  Workflow Optimization: Recommending process improvements based on bills format and company-wide data."
              />

              <AboutYear
                boldtext="Project Title: Agentive AI in email processing, Bank Statement PDF Processing, Invoices processing for CA Firms"
                p="Client:"
                a="www.srgaglobal.com"
                text="Askme Technologies developed Agentive AI Solution to address these inefficiencies. The AI system featured:
                1.  Automated Email Reading: We made AI application to read all emails which have different bank statement pdf & invoices. After processing those pdfs save those pdf at centralized location with client Name.
                2.  Trend Application to read PDF & Excel: Trained AI application to read bank statement PDF & invoice data & export desired data in excel format.
                3.  Workflow Optimization: Upload processed data into Tally automatically on certain interval."
              />
              <AboutYear
                boldtext="Project Title: Hydra-Sense"
                text="Hydra-Sense is an IOT application with main function of tracking water consumption by help of Bluetooth enabled bottle, and help us keep water tracker we need to replenish and water drinking reminder in time. Reminds you to drink water, a great application that take care of your health. Let drink water remind you to drink water if you always forget it. The best healthcare application for you. And it's totally free.If you're too busy to remember having to drink enough and regularly, don't worry, there's 'drink water' to help you solve
                that problem.Drink water reminder is an application with main function is to help us keep water tracker we need to replenish and water drinking reminder in time. Users only need to select a gender and enter a weight number, it will help you calculate how much water should you drink per day. You can also tracker water history, reach your daily goal to open the respective achievements, and many other useful."
              />
            </div>
          </div>)}

      {open === "2023" && (
          <div className=" md:flex   " >
            <Time time="2023" />
            <div className=" flex flex-col">
            <AboutYear head="2023
              In 2023, We have acquired real estate portal 'www.homeonline.com' from Dainik Bhaskar and grown the team size of 50 People." p="Homeonline.com is an online real estate marketplace ideated by the Hol Proptech Private Limited." text="As a company this year was also little bit slow down due to recession and we keep more focussed in our product customization, training & giving our best support to the existing client. We are looking forward to work in iOT, Machine Learnig, Artifical Intelligence, Augemented Reality & Virtual Reality"/>
            </div>
          </div>)}
          {open === "2022" && (
            <div className=" md:flex" >
            <Time time="2022" />
            <div className=" flex flex-col">
            <AboutYear head="In 2022, we keep growing from 32 people to 40 people team. We have developed custom custom ticket managemnet & ATR Software for manfacturing companies." p="We have made ATR Software operational for the client Denso, Manesar and doing digitalizaion for their various department." text="Apart from development, we have entered into resource deployment model and deployed our multiple developers and Test Engineers for the client Expand my Business, Thomsan Digital, Ahom Technologies and other clients."/>
            </div>
          </div>)}
          {open === "2021" && (
<div className=" md:flex ">
            <Time time="2021" />
            <div className=" flex flex-col">
            <AboutYear head="In 2021, we keep growing our team and focussed on implementation of processes and tools across the company for the smooth execution and grown to 25 People." p="Our team is continously working on latest tech stack for Vinebrook Homes and maintaing their corporate maintenance & construciton iOS app, website, Salesforce CRM & digital marketing." text="Apart from giving proper support to Vinebrook Homes, we are more focussed on sales & new client acquistion."/>
            </div>
          </div>)}
          {open === "2020" && (
<div className=" md:flex" >
            <Time time="2020" />
            <div className="flex flex-col">
            <AboutYear head="In 2020, Crona Virus impacted the whole world where we are again profitable and made team of 20 people company." p="We have also launched our new training vertical 'Askme Training' which is awarded as best software testing training company in India." text="We have worked as techchnogy partner for the US based real estate company Vinebrook Homes which is leading provider of single family rental homes in USA."/>
            </div>
          </div>)}
          {open === "2019" && (
<div className=" md:flex">
            <Time time="2019" />
            <div className=" flex flex-col">
            <AboutYear head="In 2019, company lost the major client basket.jo as the company decided to hire all their in-house team and stopped the outsourcing." p="It was huge loss for the company and iniital 2 partner left due to financial crunch." text="But Company main founder assured the remaining client and employees that company is going through bad time and it will be finished very soon. He struggled alone and ensured everyone is aligned with company vision and mission."/>
            </div>
          </div>)}

          {open === "2018" && (
<div className=" md:flex " >
            <Time time="2018" />
            <div className=" flex flex-col">
            <AboutYear head="Askme Technologies is founded as one of the tech startup by 3 enterepreneurs in 2018. We got our first client Basket.jo, Jordan which is Jordan based food grocaary start up." p="Our team has delivered their Website, Android App & iOS App.." text="It was proud moment for us where our work is recognized and this company has got multiple round of VC Funding. our team size is grown from 3 people to 10 people and finally we have shifted in proper office from one room."/>
            </div>
          </div>)}


        </div>
      </div>
    </>
  );
};
export default AboutUs;
