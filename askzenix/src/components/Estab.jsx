import { Link } from "react-router";
import { useState } from "react";
import SlideHoverButton from "./SlideHoverButton";
import Mission from "./Mision/Mission";
import Group from "./Mision/Group";

const Estab = () => {
  const [showData, setshowData] = useState("e1");

  return (
    <>
      <section className=" flex flex-col mt-70 ">
        <div className="mt-8 flex justify-center  pb-14">
          <div className="gap-3 w-2/3 flex flex-col md:flex-row items-center mt-0">
            <div>
              <p className="text-[#676C71]">Established in</p>
              <h3 className="text-[#4c8B81] text-[72px] font-bold leading-none">
                2024
              </h3>
            </div>
            <div className="flex items-center justify-center pl-8">
              <h2 className="text-[#022D62] text-[40px] font-bold  leading-12">
                Askzenix technologies empower steady venture change at speed and
                scale
              </h2>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="flex-col w-4/5 gap-2 md:flex md:flex-row">
            <div className=" flex justify-center  items-center pb-20 ">
              <div className=" flex  flex-col md:p-15 w-80 leading-15 text-[#022D62] font-semibold text-[19px]">
                <a className="cursor-pointer" onClick={() => setshowData("e1")}>
                  Mission And Vision
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e2")}>
                  Group Companies
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e3")}>
                  Technelogy Partners
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e4")}>
                  Meet Our Team
                </a>
                <a className="cursor-pointer" onClick={() => setshowData("e5")}>
                  Career With us
                </a>
              </div>
            </div>
            <div
              className={`flex  p-2 w-[75%] gap-10  ${
                !showData ? "hidden" : ""
              }`}
            >
              {showData === "e1" && (
                <div className=" p-2 w-full gap-2 flex-col sm:flex sm:flex-row ">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/Mission&Vision.jpg"
                      alt="img1"
                    ></img>
                  </div>
                  <div className=" w-[60%] p-10 py-20">
                    <div>
                      <Mission
                        title="Our Mission"
                        des="Our mission statement says, “helping our clients create their future”."
                        icon="fa-solid fa-bullseye"
                      />
                      <Mission
                        title="Our Vision"
                        des="Our Vision statement says, “Delivering Next LevelTechnology”."
                        icon="fa-solid fa-eye"
                      />
                    </div>
                  </div>
                </div>
              )}
              {showData === "e2" && (
                <div className=" p-2 w-full gap-2 flex ">
                  <div className=" w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/challenges.jpg"
                    ></img>
                  </div>
                  <div className=" w-[60%] p-10">
                    <Group
                      title="Group Companies"
                      des="Established in 2024, Askzenix Technologies is a global consulting and IT services company with more than 50+ employees."
                      img1="https://dfck301lncdlh.cloudfront.net/images/forEstablished/askmetraining.png"
                      img2="https://dfck301lncdlh.cloudfront.net/images/forEstablished/HomeOnline.png"
                      img3="https://dfck301lncdlh.cloudfront.net/images/forEstablished/askmetech.svg"
                    />
                    <Link to="/Contact">
                      <SlideHoverButton
                        text="Become a Pertner"
                        textColor="text-[#022D62]"
                      />
                    </Link>
                  </div>
                </div>
              )}
              {showData === "e3" && (
                <div className="  p-2 w-full gap-2 flex">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/TechnologyPartner.jpg"
                    ></img>
                  </div>
                  <div className=" w-[60%] p-10">
                    <Group
                      title="Our Technology Partners"
                      des="We work with leading technology companies to help our clients deliver exceptional personalized experiences to their customers"
                      img1="https://dfck301lncdlh.cloudfront.net/images/client-logo/denso.png"
                      img2="https://dfck301lncdlh.cloudfront.net/images/client-logo/touchpointtrans.png"
                      img3="https://dfck301lncdlh.cloudfront.net/images/client-logo/vinebrookhomes.png"
                    />
                    <Link to="/Contact">
                      <SlideHoverButton
                        text="Become a Pertner"
                        textColor="text-[#022D62]"
                      />
                    </Link>
                  </div>
                </div>
              )}
              {showData === "e4" && (
                <div className=" w-full gap-2 flex p-2">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/Team.jpg"
                    ></img>
                  </div>
                  <div className="w-[60%] pl-10  ">
                    <div>
                      <h3 className="mb-3 text-[#022D62] text-2xl font-semibold">
                        Meet Our Leaders
                      </h3>
                      <p className="mb-3 text-[#676C71]">
                        Meet our leaders and the hard-working personalities who
                        deliver innovative concepts to corporations like yours.
                      </p>
                      <div className=" flex justify-around  items-center mb-6">
                        <div className=" w-[27%] cursor-pointer ">
                          <img
                            className="rounded-sm "
                            src="https://dfck301lncdlh.cloudfront.net/images/team/ashok.jpg"
                          ></img>
                          <a>
                            <h3 className="text-center mt-3 font-semibold text-[#022D62]">
                              Ashok Kumar
                            </h3>
                          </a>
                          <p className="text-center text-[#676C71]">
                            Founder & CEO
                          </p>
                        </div>
                        <div className="w-[28.7%] cursor-pointer ">
                          <img
                            className="rounded-sm"
                            src="https://dfck301lncdlh.cloudfront.net/images/team/hemendra.jpg"
                          ></img>
                          <a>
                            <h3 className="text-center mt-3 font-semibold text-[#022D62]">
                              Hemendra Singh
                            </h3>
                          </a>
                          <p className="text-center text-[#676C71]">
                            Technical Architect
                          </p>
                        </div>
                        <div className="w-[29%] cursor-pointer mt-7">
                          <img
                            className="rounded-sm"
                            src="https://dfck301lncdlh.cloudfront.net/images/team/Gautam.png"
                          ></img>
                          <a>
                            <h3 className="text-center mt-2 font-semibold text-[#022D62]">
                              Gautam Gupta
                            </h3>
                          </a>
                          <p className="text-center text-[#676C71]">
                            Chief Technologies Officer
                          </p>
                        </div>
                      </div>
                      <Link to="/Contact">
                        <SlideHoverButton
                          text="View Our Team"
                          textColor="text-[#022D62]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              {showData === "e5" && (
                <div className="p-2 w-full gap-2 flex">
                  <div className="  w-[40%]">
                    <img
                      className="w-full rounded-lg"
                      src="https://dfck301lncdlh.cloudfront.net/images/Career.jpg"
                    ></img>
                  </div>
                  <div className=" w-[60%] pl-10 ">
                    <div>
                      <h3 className="mb-1 text-[#022D62] text-2xl font-semibold">
                        Are you the best?
                      </h3>
                      <p className="mb-2 text-[#676C71]">
                        Become a part of a technology revolution working with
                        us. We are a customer-oriented digital solutions
                        provider. Ever since our inception, we have grown by
                        leaps and bounds with the notable efforts of our
                        workforce.
                      </p>
                      <h4 className="mb-4 text-[#022D62] text-xl font-semibold">
                        Why work with us?
                      </h4>
                      <div className=" flex  justify-between mb-6">
                        <div className="pl-5 w-1/2 leading-8 ">
                          <ul>
                            <li>Flexible Working Hours</li>
                            <li>Company Activities</li>
                            <li>Awesome Co-Workers</li>
                            <li>Transparency From Top To Bottom</li>
                          </ul>
                        </div>
                        <div className="pr-11 leading-8">
                          <ul>
                            <li>Competitive Salaries</li>
                            <li>Growth Opportunity</li>
                            <li>Health, Dental, And Vision</li>
                            <li>Collaborative environment</li>
                          </ul>
                        </div>
                      </div>
                      <Link to="/Contact">
                        <SlideHoverButton
                          text="View Available Position"
                          textColor="text-[#022D62]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Estab;
