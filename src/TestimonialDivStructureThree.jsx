import React from "react";
import "./global.css";
import ClientOne from "./assets/PortfolioClientsPIC4.jpg";
import ClientTwo from "./assets/PortfolioClientsPIC1.jpg";
import ClientThree from "./assets/testimonialImg4.jpg";

const TestimonialDivStructureThree = () => {
  return (
    <div className="flex flex-row items-end  justify-between  h-[55vh] w-full">
      <TestimoniesThree
        writeUp="He's a master problem-solver, a brilliant designer, and a dedicated professional who will stop at nothing to deliver exceptional results. His passion for innovation is contagious."
        clientName="Ethan Patel "
        imageSrc={ClientOne}
      />

      <div className="h-full flex items-center  justify-start gap-2 flex-col w-[25vw] ">
        <div className="h-[19.5vh]  w-full">
          <p className="dongle-regular text-[24px] leading-tight text-[#c0bfbf]">
            Emmanuel is a genius! , for the first time my project reached
            massive user engagements and recommendations making impact to our
            sales and active subscribers , I'm glad i choose right.{" "}
          </p>
        </div>
        <div className="gap-3 h-[15vh]  items-end justify-start  pb-1 flex-row flex w-full">
          <img className=" rounded-full w-16 h-16" src={ClientTwo} alt="" />
          <p className="text-[#dddbdb] carlito-bold     text-[18px] leading-tight  mb-6 mt-0 tracking-[0.4px]">Isabella Martin </p>
        </div>
      </div>

      <TestimoniesThree
        writeUp="If you're looking for a frontend developer who will change the way you think about web development, Emmanuel is indeed a great choice, He's knows his work."
        clientName="Brandon Hall"
        imageSrc={ClientThree}
      />
    </div>
  );
};

const TestimoniesThree = ({ writeUp, clientName, imageSrc }) => {
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
        <p className="text-[#dddbdb] carlito-bold   leading-tight  text-[18px] tracking-[0.4px]">{clientName}</p>
      </div>
    </div>
  );
};

export default TestimonialDivStructureThree;
