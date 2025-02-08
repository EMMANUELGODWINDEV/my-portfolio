import React from "react";
import "./global.css";
import ClientSeven from "./assets/angelo.jpg";
import ClientEight  from "./assets/PortfolioClientsPIC3.jpg";
import ClientNine  from "./assets/mabel.jpg";


const TestimonialDivStructure = () => {
  return (
    <div className="flex flex-row items-end  justify-between  h-[55vh] w-full">
      <Testimonies
        writeUp="Emmanuel's technical expertise is impressive, but what really sets him apart is his ability to understand the client's vision and bring it to life. He's a master of his craft."
        clientName="Cameron Santos "
        imageSrc={ClientSeven}
      />

      <div className="h-full flex   items-center justify-start gap-2 flex-col w-[25vw] ">
        <div className="h-[19.5vh]  w-full">
          <p className="dongle-regular text-[24px] leading-tight text-[#c0bfbf]">
            Emmanuel took the time to understand my goals, target audience, and
            brand identity, and then crafted a bespoke solution that exceeded my
            expectationss
          </p>
        </div>
        <div className="gap-3 h-[15vh]  items-end justify-start  pb-1 flex-row flex w-full">
        <img  className=" rounded-full w-16 h-16" src={ClientEight} alt="" />
          <p className="text-[#dddbdb] carlito-bold   leading-tight  text-[18px] mb-6 mt-0 tracking-[0.4px]">      Beckett Reyes 
          </p>
        </div>
      </div>

      <Testimonies
        writeUp="What I appreciate most about Emmanuel is his professionalism, work ethic, and commitment to delivering high-quality results creative problem-solving skills, and dedication to deliver early. "
        clientName="Rohan Sharma"
        imageSrc={ClientNine}
      />
    </div>
  );
};

const Testimonies = ({ writeUp, clientName, imageSrc }) => {
  return (
    <div className="h-[37vh]  flex flex-col items-center gap-5 justify-end w-[25vw] ">
      <div className="h-[19.5vh]   w-full">
        <p className="dongle-regular text-[24px] leading-tight text-[#c0bfbf]">
          {writeUp}
        </p>
      </div>
      <div className="gap-3   h-[15vh] pb-3  items-center justify-start  flex-row flex w-full">
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

export default TestimonialDivStructure;
