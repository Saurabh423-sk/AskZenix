import ClientDetails from "./ClientDetails"

const ProjectPic = () => {
  return (
    <>
    <div className="">
      <div className="border-1 w-full flex flex-col  items-center  h-[470px] mt-10 bg-[#022D62] text-white ">
            <h2 className="py-5 text-[36px] font-semibold ">
              What's next? Our latest client stories
            </h2>
            <p className="text-lg">
              We love what we do. Our clients tell us the same thing.
            </p>
            <div className="flex justify-center  w-full gap-5 mt-8 ">
              <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group">
                <img
                  className="rounded-lg p-1 "
                  src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/3a106c9abb39bec70d755a7a5e5d0224-66265d04eb740.webp"
                  alt="home"
                ></img>
                <ClientDetails text="Vinebrookhomes" para=" If success is a process with a number of defined steps,
                        then it is just like any other process." path="/Vinebrookhomes-Details"/>
              </div>
              <div className="flex flex-col gap-8">
                <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group ">
                  <img
                    className="rounded-lg p-1"
                    src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/c6a3ef3e3c20e4b28ad0ed54b4f4287d-66265cd6234aa.jpg"
                    alt="Denso"
                  ></img>
                  <ClientDetails text="Denso" para=" You will drift aimlessly until you arrive back at the
                          original dock" path="/Denso-Details"/>
                </div>
                <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group">
                  <img
                    className="rounded-lg p-1"
                    src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/be5205fcfbc86d10e8a10f41bb715f23-6626598c149a5.png"
                    alt="Bascket"
                  ></img>
                  <ClientDetails text="Basket" para="Whatever you want from local store...." path="/Basket-Details"/>
                </div>
              </div>
              <div className=" border-1 border-[#676C71] rounded-sm shadow-[0px_3px_8px_rgba(0,0,0,0.24)] group">
                <img
                  className="rounded-lg p-1"
                  src="https://dfck301lncdlh.cloudfront.net/resource/img/widget/556d5ba2fb5f98c9201743ba942bdd41-659e48e0f0d79.webp"
                  alt="Touch point"
                ></img>
                <ClientDetails text="Touchpoint365" para=" We all carry a lot of baggage, thanks to our
                        upbringing..." path="/Touchpoint365-Details"/>
              </div>
            </div>
          </div>
          </div>
    </>
  )
}
export default ProjectPic