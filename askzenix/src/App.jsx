import './App.css'
import { createBrowserRouter,RouterProvider,} from "react-router-dom";
import Header from './components/Header';
import Navbar from './components/Navbar';
import Slide from './components/Slide';
import Cards from './components/Cards';
import OfferCards from './components/OfferCards';
import NewFooter from './components/NewFooter';
import CardSlide from './components/SlideCard/CardSlide';
import Estab from './components/Estab';
import Share from './components/Share';
import Blogs from './components/Blogs';
import ImageCard from './components/ImageCard';
import ProjectPic from './components/ProjectPic';
import Video from './components/Video';
import AboutUs from './components/DynamicPages/AboutUs/AboutUs';
import Carreer from './components/DynamicPages/Career/Carreer';
import How_we_work from './components/DynamicPages/How_work/How_we_work';
import Our_team from './components/DynamicPages/Our_Team/Our_team';
import Mission_Vission from './components/DynamicPages/MissionVission/Mission_Vission';
import Case_Study from './components/DynamicPages/CaseStudy/Case_Study';
import Blogs_d from './components/DynamicPages/Blogs_d/Blogs_d';
import Our_Value from './components/DynamicPages/OurValue/Our_Value';
import Client from './components/Client';

  const dropmenu=[ 

      {title:"Web Development",
      data:[{ label: "PHP", path: "/php" },
    { label: "Laravel", path: "/laravel" },
    { label: "React Js", path: "/react-js" },
    { label: "Node Js", path: "/node-js" },
    { label: "SiCakephp", path: "/sicakephp" },
    { label: "Codeigniter", path: "/codeigniter" },
    { label: "TypeScript", path: "/typescript" },
    { label: "Python", path: "/python" },
    { label: "Mongo DB", path: "/mongodb" }]},

      {title:"Mobile Development",
      data:[
        {label:"Android App",path:"/Android-App"},
        {label:"Ios App",path:"/Ios-App"},
        {label:"Flutter App",path:"Flutter-App"},
        {label:"React Native",path:"React-Native"},
        {label:"Hybrid App",path:"Hybrid-App"},
       { label:"OTT App Development",path:"OTT-App-Development"}
      ]},

      {title:"Ecommerce Development",
      data:[
        {label:"Magento",path:"/Magento"},
        {label:"Shopify",path:"/Shopify"},
        {label:"Prestashop",path:"/Prestashop"},
        {label:"WooCommerce",path:"/WooCommerce"},
        {label:"BigCommerce",path:"/BigCommerce"},
        {label:"Wordpress",path:"/Wordpress"},
        {label:"Custom Ecommerce",path:"Custom-Ecommerce"},
        {label:"Opencart",path:"Opencart"}
      ]},

      {title:"Digital Marketing",
      data:[
        {label:"SEO",path:"/SEO"},
        {label:"SMO",path:"/SMO"},
        {label:"Content Marketing",path:"/Content-Marketing"},
        {label:"Paid Media Marketing",path:"/Paid-Media-Marketing"},
        {label:"Video Marketing",path:"/Video Marketing"},
        {label:"Affiliate Marketing",path:"/Affiliate-Marketing"},
        {label:"Ecommerce Seo",path:"/Ecommerce Seo"}]},

      {title:"Digital Transformation",
      data:[
        {label:"IOT",path:"/IOT"},
        {label:"DevOps",path:"/DevOps"},
        {label:"Data forecasting",path:"/Data-forecasting"},
        {label:"IOT Developers",path:"/AI-And-ML"},
        {label:"Business Intelligence",path:"Business-Intelligence"},
        {label:"Smart Home Automation",path:"/Smart-Home-Automation"},
        {label:"Block Chain",path:"/Block-Chain"},
        {label:"Cloud Engineering",path:"/Cloud-Engineering"},
        {label:"Big Data",path:"/Big-Data"}]},

      {title:"Salesforce Development",
      data:[{label:"Salesforce Consulting",path:"/Salesforce-Consulting"},
        {label:"Salesforce Integration",path:"/Salesforce-Integration"},
        {label:"Salesforce Migration",path:"/Salesforce-Migration"},
        {label:"Salesforce Managed",path:"/Salesforce-Managed"},
        {label:"Salesforce Product Development",path:"/Salesforce-Product-Development"},
        {label:"Salesforce Sales Cloud",path:"/Salesforce-Sales-Cloud"},
        {label:"Salesforce Service Cloud",path:"/Salesforce-Service-Cloud"}]},

      {title:"Independent Testing Services",
      data:[
        {label:"Functional Testing",path:"/Functional-Testing"},
       {label:"Automation Testing",path:"/Automation-Testing"},
       {label: "Mobile Testing",path:"/Mobile-Testing"},
        {label:"Accessibility Testing",path:"/Accessibility-Testing"},
        {label:"Security Testing",path:"/Security-Testing"},
       { label:"DevOps Testing",path:"DevOps-Testing"},
        {label:"Performance Testing",path:"/Performance-Testing"},
        {label:"Api Testing",path:"/Api-Testing"}]},

      {title:"Branding Services",
      data:[
        {label:"UI/UX",path:"/UI-UX"},
        {label:"Logo Designing",path:"/Logo-Designing"},
        {label:"Visual Designing",path:"/Visual-Designing"},
        {label:"Brand Collateral",path:"/Brand-Collateral"}]}
  ];

   const hire=[ 

      {title:"Hire App Developers",
      data:[{ label: "IOS", path: "/IOS" },
    { label: "Android", path: "/Android" },
    { label: "Swift", path: "/Swift" },
    { label: "Node Js", path: "/node-js" },
    { label: "React Native", path: "/React-Native" },
    { label: "Flutter", path: "/Flutter" },
   ]},

      {title:"Hire QA Developers",
      data:[
        {label:"Functional QA Engi``neers",path:"/Functional-QA-Engineers"},
        {label:"Automation QA Engineer",path:"/Automation-QA-Engineer"},
        {label:"Performance QA Engineer",path:"/Performance-QA-Engineer"},
        {label:"Salesforce QA Engineer",path:"/Salesforce-QA-Engineer"},
      ]},

      {title:"Hire Js Developers",
      data:[
        {label:"Node Js",path:"/Node-Js"},
        {label:"React Js",path:"/React-Js"},
        {label:"Angular Js",path:"/Angular-Js"},
        {label:"JavaScript Developer",path:"/Javascript-developer"},
      ]},

      {title:"Hire Web Developers",
      data:[
        {label:"Shopify",path:"/Shopify"},
        {label:"Magento",path:"/Magento"},
        {label:"WordPress",path:"/WordPress"},
        {label:"Prestashop",path:"/Prestashop"},
        {label:"Drupal",path:"/Drupal"},
        {label:"Python",path:"/Python"},
        {label:"Php",path:"/Php"},
        {label:"UI/UX Designers",path:"/UI-UX-Designers"},
        {label:"Web Developer",path:"/Web-Developer"},
      ]},

      {title:"Digital Transformation",
      data:[
        {label:"DevOps Developer",path:"/DevOps-Developer"},
        {label:"ML Developers",path:"/ML-Developers"},
        {label:"Data Scientists",path:"/Data-Scientists"},
        {label:"IOT Developers",path:"/IOT-Developers"},
       ]},

      {title:"Hire Full Stack Developers",
      data:[
        {label:"MEAN",path:"/MEAN"},
        {label:"MERN",path:"/MERN"},
        {label:"Full Stack",path:"/Full-Stack"}]},

      {title:"Salesforce",
      data:[
        {label:"Salesforce Developers",path:"/Salesforce-Developers"},
       ]},
  ];

const Industry=[{
  data:[
        {label:"Real Estate",path:"/Real-Estate"},
        {label:"Manufacturing",path:"/Manufacturing"},
        {label:"E-Commerce",path:"/E-Commerce"},
        {label:"Education",path:"/Education"},
        {label:"Finance",path:"/Finance"},
      ]}
]

const Company=[{
  data:[
        {label:"About Us",path:"/About-Us"},
        {label:"Careers",path:"/Careers"},
        {label:"How We Work",path:"/How-We-Work"},
        {label:"Our Team",path:"/Our-Team"},
        {label:"Mission Vission",path:"/Mission-Vission"},
        {label:"Our Value",path:"/Our-Value"},
        {label:"Case Study",path:"/Case-Study"},
        {label:"Blogs",path:"/Blogs"}
      ]}
]

const sau = [
  {
    icon:<i className="fi fi-tr-display-code"></i>,
    head: "Web Development",
    arr: [
      {label:"E-commerce",path:"/E-commerce"}, 
      {label:"Bespoke Services",path:"/Bespoke-Services"}, 
      {label:"Full Services",path:"/Full-Services"},
      {label:"Business Intelligence",path:"/Business-Intelligence"}
    ]
  },
  {
    icon: <i className="fi fi-ts-mobile-button"></i>,
    head: "Mobile Development",
    arr: [
      {label:"Android",path:"/Android"},
       {label:"IOS",path:"/IOS"}, 
       {label:"Hybrid",path:"/Hybrid"},
       {label:"Enterprise",path:"/Enterprise"}
      ]
  },
  
  {
    icon:<i className="fi fi-ts-bullhorn"></i>,
    head: "Digitl Marketing",
    arr: [
      {label:"SEO",path:"/SEO"}, 
      {label:"SMO",path:"/SMO"}, 
      {label:"PPC",path:"/PPC"},
      {label:"Affiliate Marketing",path:"/Affiliate-Marketing"}]
  },
  {
    icon: <i className="fi fi-ts-display-chart-up"></i>,
    head: "Branding Service",
    arr: [
      {label:"Logo Designing",path:"/Logo-Designing"}, 
      {label:"UI/UX",path:"/UI-UX"}, 
      {label:"Visual Designing",path:"/Visual-Designing"},
      {label:"Brand Colleteral",path:"/Brand-Colleteral"}
    ]
  },
  {
    icon:  <i className="fi fi-tr-react"></i>,
    head: "Software Testing",
    arr: [
      {label:"Functional",path:"/Functional"}, 
      {label:"Automation",path:"/Automation"}, 
      {label:"Performance Testing",path:"/Performance-Testing"},
      {label:"DevOps Testing",path:"/DevOps Testing"}
    ]
  },
  // {
  //   icon: <i className="fi fi-tr-react"></i>,
  //   head: "Digital Transformation",
  //   arr: [
  //     {label:"IOT",path:"/IOT"}, 
  //     {label:"AI&ML",path:"/AI&ML"},
  //     {label:"DevOps",path:"/DevOps"},
  //     {label:"Blockchain",path:"/Blockchain"}]
  // },
];

const data = [
  {
  arra:[
    {label:"Automotive",path:"/Automotive"},
    {label:"Education",path:"/Education"},
    {label:"Retail",path:"/Retail"}
  ],
  },
   {
  arra:[
    {label:"Publishing",path:"/Publishing"},
    {label:"FMCG",path:"/FMCG"},
    {label:"Travel and Tourism",path:"/Travel-and-Tourism"}
  ],
  },
   {
  arra:[
    {label:"Media and Entertainment",path:"Media--and-Entertainment"},
    {label:"e-commerce",path:"e-commerce"},
    {label:"Health Care",path:"Health-Care"}],
  },
   {
  arra:[
    {label:"Real Estate",path:"/Real-Estate"},
    {label:"Hospitality",path:"/Hospitality"},
    {label:"Industrial and Manufacturing",path:"/Industrial and Manufacturing"}
  ],
  }
]

 
const router = createBrowserRouter([
  {
    path: "",
    element: (
      <div>
      <Header/>
        <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Slide autoSlide={true}/>
        <ImageCard/>
        <Cards sau={sau} />
        <ProjectPic/> 
         <Estab/>
        <OfferCards data={data}/> 
          <CardSlide/>
          <Video/>
          <Client/>
          <Blogs/>
          <Share title="Share your vision and we will make it our mission" p="For efficient and customized digital marketing solutions connect with us now"/>
        <NewFooter/>
        
      </div>
    ),
  },
  {
    path: "/Web-Development",
    element: (
      <div>
        <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <NewFooter />
      </div>
    ),
  },
{
  path:"/About-Us",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
         <AboutUs/>
        <Client/>
         <Video/>
         <Share title="Tell us about your idea, and we’ll make it happen." p="Have a brand problem that needs to be solved? We’d love to hear about it!"/>
        <NewFooter />
        
    </>
  ),
},

{
  path:"/Careers",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Carreer/>
        <NewFooter />
    </>
  ),
},
{
  path:"/How-We-Work",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <How_we_work/>
        <NewFooter />
    </>
  ),
},

{
  path:"/Our-Team",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Our_team/>
        <NewFooter />
    </>
  ),
},

{
  path:"/Mission-Vission",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Mission_Vission/>
        <NewFooter />
    </>
  ),
},


{
  path:"/Our-Value",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Our_Value/>
        <NewFooter />
    </>
  ),
},

{
  path:"/Case-Study",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Case_Study/>
         <Share title="Tell us about your idea, and we’ll make it happen." p="Have a brand problem that needs to be solved? We’d love to hear about it!"/>
        <NewFooter />
    </>
  ),
},

{
  path:"/Blogs",
  element:(
    <>
      <Header />
           <div className=" sticky top-0 z-50 bg-white shadow-[0px_1px_5px_0px_rgba(99,99,99,0.2)]">
          <Navbar dropmenu ={dropmenu} hire={hire} Industry={Industry} Company={Company}/>
        </div>
        <Blogs_d/>
        <NewFooter />
    </>
  ),
},

]);
function App() {
  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}
export default App


