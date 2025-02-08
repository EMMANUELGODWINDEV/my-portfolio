import React from "react";
import "./global.css";
import ClientFour from "./assets/testimonialImg7.jpg"
import ClientFive from "./assets/testimonialImg1.jpg"
import ClientSix from "./assets/testimonialImg5.jpg"


const TestimonialDivStructureTwo = () => {
  return (
    <div className="flex flex-row  items-end justify-between  h-[55vh] w-full">
      <TestimoniesTwo
        writeUp="I had the pleasure of working with Emmanuel on my recent web development project, and I must say, I'm blown away by his exceptional skills and professionalism!"
        clientName="Kai Jenkins"
        imageSrc={ClientFour}
      />

      <div className="h-full  flex items-center justify-start gap-2 flex-col w-[25vw] ">
        <div className="h-[19.5vh]  w-full">
        <p className="dongle-regular text-[24px] leading-tight text-[#c0bfbf]"> Emmanuel demonstrated a deep understanding of my modern web technologies and best practices. He brought my vision to life with his meticulous attention to detail.</p>
        </div>
        <div className="gap-3 h-[15vh]  items-end justify-start  pb-1 flex-row flex w-full">
        <img className=" rounded-full w-16 h-16" src={ClientFive} alt="" />
                 <p className="text-[#dddbdb] carlito-bold   leading-tight  text-[18px]   mb-6 mt-0 tracking-[0.4px]">Charlotte Davis  </p>
               </div>
      </div>

      <TestimoniesTwo
        writeUp="What impressed me most about Emmanuel was his excellent communication skills, responsiveness, and willingness to go above and beyond to ensure my satisfaction."
        clientName="Elijah Moreno "
        imageSrc={ClientSix}
      />
    </div>
  );
};

const TestimoniesTwo = ({ writeUp, clientName, imageSrc }) => {
  return (
    <div className="h-[37vh] flex flex-col items-center gap-5 justify-end w-[25vw] ">
    <div className="h-[19.5vh]  w-full">
      <p className="dongle-regular text-[24px] leading-tight text-[#c0bfbf]">
        {writeUp}
      </p>
    </div>
    <div className="gap-3 h-[15vh] pb-3  items-center justify-start  flex-row flex w-full">
      <img
           className=" rounded-full w-16 h-16"
        src={imageSrc}
        alt={clientName}
      />
      <p className="text-[#dddbdb]  carlito-bold leading-tight  text-[18px] tracking-[0.4px]">{clientName}</p>
    </div>
  </div>
  );
};

export default TestimonialDivStructureTwo;
