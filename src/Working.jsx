import React from "react";

import { MdMail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

import "./global.css";

const RoundedFull = ({ icon }) => {
  return (
    <div className="h-6 w-6 shadow-md  border-[#6a6a6a] border-[1.5px] rounded-full flex items-center justify-center flex-row border-solid text-[10px] ">
      {icon}
    </div>
  );
};

function Working() {
 

  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#0c0d08] h-[97vh] flex-col pb-16  w-screen flex justify-end items-center ">
      <div className="h-[70vh]  w-[85vw]  flex-col items-center justify-center  flex   ">
        <div className="lg:h-[34vh]  flex flex-col lg:gap-6 items-center ">
          <div className=" border-[#4f4e4e]  flex flex-row items-center justify-center  lg:h-[5.4vh] border-solid   border-[2.5px] w-[27vw] lg:w-[10vw] rounded-[5vw] lg:rounded-[2vw]">
            <p className=" dongle-regular text-[27px] lg:text-[30px] text-[#9fe30e] leading-tight">
              Work
            </p>
          </div>

          <div className="  lg:w-[56vw] h-[22vh] mb-8 lg:mb-0 lg:h-[23vh] flex flex-col items-center justify-center">
            <p className="carlito text-[#acaaaa] lg:text-[18px] mt-20  tracking-[1px]  leading-tight font-[600]">
              Need Any Project?
            </p>
            <div className="">
              <h2
                
                className="dongle-regular text-[#eceaea] leading-tight -mt-2 lg:-mt-7 text-[100px] lg:text-[168px]"
              >
                Let's Start
              </h2>
            </div>
          </div>
        </div>
        <div className=" w-full h-[25.5vh] flex items-center justify-center   border-b-[1.5px] border-solid">
          <div className=" relative lg:absolute lg:invisible visible flex flex-col justify-center items-center">
          <div className="lg:w-[13vw] h-[10vh]  flex items-center justify-start ">
              <button className="w-[25vw] h-[10vw] lg:w-[10vw] carlito font-extrabold text-[#0c0d08] hover:text-[#9fe30e]  cursor-pointer hover:border-[1.5px] hover:border-[#9fe30e]    hover:bg-transparent text-[12.4px]  lg:text-[14.4px] lg:h-[8.5vh] bg-[#9fe30e] rounded-lg">
                Get A Quote
              </button>
            </div>
<div className=" flex-row  w-[85vw] justify-between flex">
<div className=" lg:w-[25vw]  flex flex-row items-center pb-1 justify-end gap-1 h-[10vh] ">
              <MdMail className="text-[#eceaea] text-[14px] lg:text-[27px] mt-[0.7px]" />
              <a
                href="mailto:kmaxtaxx@gmail.com?body=Hello"
                aria-label="Email address"
                className="carlito tracking-wider font-thin text-[#eceaea] text-[12px] lg:text-[24px] decoration-[#82827f] underline underline-offset-[9px] hover:no-underline"
              >
                kmaxtaxx@gmail.com
              </a>
            </div>
            <div className="w-[32vw]  flex flex-row items-center pb-1 justify-start gap-1 h-[10vh] ">
              <PiPhoneCallFill className="text-[#eceaea] text-[14px] lg:text-[31px] mt-[0.8px]" />
              <a
                href="tel:+2347025283450"
                className="carlito tracking-wider font-thin text-[#eceaea] text-[12px] lg:text-[24px] decoration-[#82827f] underline underline-offset-[9px] hover:no-underline"
              >
               
                +2347025283450
              </a>
            </div>

</div>
          </div>
          <div className=" invisible lg:visible absolute lg:relative pl-9 w-full h-[17vh] flex flex-row items-center justify-around  ">
            <div className="w-[25vw] flex flex-row items-center pb-1 justify-end gap-2 h-[10vh] ">
              <MdMail className="text-[#eceaea] text-[27px] mt-[0.7px]" />
              <a
                href="mailto:kmaxtaxx@gmail.com?body=Hello"
                aria-label="Email address"
                className="carlito tracking-wider font-thin text-[#eceaea] text-[24px] decoration-[#82827f] underline underline-offset-[9px] hover:no-underline"
              >
                Hello kmaxtaxx@gmail.com
              </a>
            </div>
            <div className="w-[13vw] h-[10vh] flex items-center justify-start ">
              <button className="w-[10vw] carlito font-extrabold text-[#0c0d08] hover:text-[#9fe30e]  cursor-pointer hover:border-[1.5px] hover:border-[#9fe30e]    hover:bg-transparent  text-[14.4px] h-[8.5vh] bg-[#9fe30e] rounded-lg">
                Get A Quote
              </button>
            </div>
            <div className="w-[25vw] flex flex-row items-center pb-1 justify-start gap-2 h-[10vh] ">
              <PiPhoneCallFill className="text-[#eceaea] text-[31px] mt-[0.8px]" />
              <a
                href="tel:+2347025283450"
                className="carlito tracking-wider font-thin text-[#eceaea] text-[24px] decoration-[#82827f] underline underline-offset-[9px] hover:no-underline"
              >
                {" "}
                +2347025283450
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" gap-3 h-20 w-full flex flex-col items-center justify-center">
        <div className=" gap-3 flex h-9 w-full flex-row items-center justify-center">
          <RoundedFull icon={<RiTwitterXFill color="#b6b3b3" />} />
          <RoundedFull icon={<FaLinkedinIn color="#b6b3b3" />} />
          <RoundedFull icon={<FaTelegramPlane color="#b6b3b3" />} />
          <RoundedFull icon={<FaMedium color="#b6b3b3" />} />
        </div>
        <p className="text-[#b6b3b3]">
          Copyright &copy; {currentYear}{" "}
          <span className="pacifico">Emmanuel Godwin</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Working;
