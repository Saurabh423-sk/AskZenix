import Blogs1 from "./Blogs1"
import SlideHoverButton from "./SlideHoverButton"

const Blogs = (props) => {
  return (
    <>
      <section className="  pt-6">
        <div className=" w-1/2 flex flex-col justify-self-center ">
          <h2 className="text-[#022D62] text-4xl font-bold text-center px-5 py-5">
            Blogs, Articles, Announcements, and More
          </h2>
          <p className="text-center text-xl font-sm px-5 pb-5">
            Add to your knowledge bank by reading our blogs and articles right
            here right now
          </p>
        </div>
        <div className="border-b-2 border-[#c7c8c8] flex flex-col md:flex-row mt-5 w-3/4 justify-self-center gap-5 pb-10 ">
          <div className="w-2/3 flex flex-col gap-2  ">
            <div className="">
              <img
                className="rounded-lg h-94 w-"
                src="https://dfck301lncdlh.cloudfront.net/resource/blogs/abdc01f85803b4f29a24f5728381d53f-678908b43562b.png"
              ></img>
            </div>
            <div className="">
              <div className="flex justify-between px-10">
                <div className=" font-medium text-sm flex items-center justify-center  rounded-2xl bg-[#f6f6f6]">
                  <a className="text-[#4c8B81] cursor-pointer">Technical</a>
                </div>
                <div className="">
                  <a className="text-[#676C71] cursor-pointer">16 Jan, 2024</a>
                </div>
              </div>
              <h3 className="text-[#022D62] text-xl font-semibold px-7 py-5">
                What's New in React for 2025? A Look at Features and Updates
              </h3>
              <p className="text-[#676C71] leading-8 px-7">
                As we enter 2025, React continues to be one of the most popular
                front-end libraries for building dynamic, interactive web
                applications. With the React ecosystem constantly evolving,
                keeping up with the latest features and updates is crucial for
                developers. We’ll explore the key features, updates, and
                improvements in React that are shaping the development landscape
                in 2025.
              </p>
            </div>
          </div>
          <div className=" w-1/3 flex flex-col  ">
            <div className="  flex flex-col gap-1">
             <Blogs1 img="https://dfck301lncdlh.cloudfront.net/resource/blogs/655013d4b95b0207ed4de00402258737-66f25c0db7901.png" p="Technical" date=" 24 Sep, 2024" des="Asynchronous Programming in Node.js: Promises and Callbacks"/>
              <Blogs1 img="https://dfck301lncdlh.cloudfront.net/resource/blogs/df80ffdb9e559ac55189d2075a849283-66e7fb4c4b635.png" p="Technical" date=" 16 Sep, 2024" des="Introduction to Node.js: Event-Driven Programming in
                    JavaScript"/>
            </div>
          </div>
        </div>

        <div className="flex  justify-self-center justify-center  items-center  p-10">
          <p className="text-[#676C71] pr-8 ">
            We have articles on a range of topics
          </p>
          <SlideHoverButton text="View All Blogs" textColor="text-[#022D62]"/>
        </div>
      </section>
    </>
  )
}

export default Blogs
