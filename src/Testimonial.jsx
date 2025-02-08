import React, { useState, useEffect } from 'react';
import TestimonialDivStructure from './TestimonialDivStructure.jsx';
import TestimonialDivStructureTwo from "./TestimonialDivStructureTwo.jsx"
import TestimonialDivStructureThree from "./TestimonialDivStructureThree.jsx"
import "./global.css"

function Testimonial() {
  const Slides = [
    <TestimonialDivStructure key="slide-1" />,
    <TestimonialDivStructureTwo key="slide-2" />,
    <TestimonialDivStructureThree key="slide-3" />,
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Slides.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [Slides.length]);

  return (
    <div className="bg-[#1a1a1a] h-[115vh]  w-screen flex justify-center items-center ">
      <div className="h-[93vh]  w-[85vw] gap-3  flex-col items-center justify-center  flex   ">
        <div className="flex flex-col   h-[19vh] w-[68vw]">
          <div className="flex flex-col items-center   h-[19vh] gap-8 w-full">
            <div className=" border-[#4f4e4e] flex flex-row items-center justify-center  h-[5.4vh] border-solid   border-[2.5px] w-[10vw] rounded-[2vw]">
              {" "}
              <p className=" dongle-regular text-[30px] text-[#9fe30e] leading-tight">
                Testimonial
              </p>
            </div>
            <div className=" flex flex-row  items-center justify-center  w-[40vw] leading-tight h-[7vh]  ">
              <h2 className="dongle-regular text-[#dddbdb] text-[58px]">
                What Some Of my Clients Say
              </h2>
            </div>
          </div>
        </div>
        <div className="h-[60vh] mt-3  w-full  bg-cover bg-center duration-500">
          {Slides[currentIndex]}
        </div>
        <div className="flex items-center justify-between   space-x-2 h-[6vh] w-[6vw]">
  {Slides.map((_, index) => (
    <button key={index} onClick={() => setCurrentIndex(index)} className="cursor-pointer">
      <div
        className={`h-[2vh] w-[2vh] border-[silver] border-solid border-2 rounded-full ${
          currentIndex === index ? 'bg-[#9fe30e] scale-125 border-none'  : 'bg-[#1a1a1a]'
        }`}
      ></div>
    </button>
  ))}
</div>
      </div>
    </div>
  );
}

export default Testimonial;