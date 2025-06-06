import React, { useEffect, useState } from "react";
import axios from "axios";
import Lets from "./Lets";
import { Link } from "react-router";

const Slide = ({ autoSlide = false, autoSlideInterval = 4000 }) => {
  const [items, setItems] = useState([]);
  const [curr, setCurr] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Slide")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (curr >= items.length) {
      setCurr(0);
    }
  }, [items, curr]);

  const slides = items.map((item,index) => ({
    image: item.img,
    text: (
      <div key={index} className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          {item.title}
        </h2>
        <p className="text-white py-2 sm:py-3 md:py-4 text-base sm:text-lg">
          {item.paragraph}  
        </p>
       <Link to={item.path}><Lets/></Link>
      </div>
    ),
  }));



  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides.length]);
  if (slides.length === 0) {
    return null;
  }

  return (
    <div className="overflow-hidden relative">
      <div>
        <div
          className="flex transition-transform ease-out duration-2000"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="relative w-full flex-shrink-0">
              <img src={s.image} className="w-full" />
              {s.text}
            </div>
          ))}
        </div>
        <div className="flex justify-between absolute items-center inset-0 px-4">
          <button
            onClick={prev}
            className="py-2.5 px-4 ml-30 rounded-full shadow bg-[#4C8B81] text-white"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            onClick={next}
            className="py-2.5 px-4 mr-30 rounded-full shadow bg-[#4C8B81] text-white"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>




      
    </div>
  );
};

export default Slide;
