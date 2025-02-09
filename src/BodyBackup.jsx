import React from "react";
import { FaDownload } from "react-icons/fa6";
import { ImArrowUpRight2 } from "react-icons/im";
import { IoMdHand } from "react-icons/io";
import PictureOne from "./assets/MyPicture.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbBrandFiverr } from "react-icons/tb";
import ClientOne from "./assets/PortfolioClientsPIC1.jpg"
import ClientTwo from "./assets/PortfolioClientsPIC4.jpg"
import ClientThree from "./assets/mabel.jpg"
import ClientFour from "./assets/young.avif"
import "./global.css";

function Body() {
  return (
    <>
      <div className="  brightness-125 flex bg-[#0c0d08] items-center justify-center pb-4   h-[143vh] lg:h-[120vh] w-screen">
        <div className=" h-full  lg:h-[inherit] w-[85vw]  flex-col justify-center  flex   ">
          <div className=" h-[120vh] lg:h-[80vh] w-[inherit]  flex-col flex lg:flex-row justify-between      ">
            <div className=" h-[70vh] lg:h-[inherit]   lg:pt-3  bg-[#0c0d08] lg:w-[45vw]  flex flex-col justify-start items-start  ">
              <div className="flex flex-col   lg:h-[24vh]  w-[inherit]">
                <div className="  border-solid border-b-[1.5px] pt-1 flex flex-row items-start justify-center   border-[#dddbdb] text-[#ababab] h-[13vh] lg:h-[15vh] flex-wrap w-[50vw] lg:w-[17.4vw]">
                  <p className=" dongle-regular leading-9 text-[20px] lg:text-[25px] font-[600]">
                    Currently Available For Freelance Worldwide
                  </p>{" "}
                  <button className=" animate-color absolute mr-7 lg:mr-9 mt-[5vh] hover:border-[1px] hover:duration-[2s] hover:border-[#9fe30e] border-solid border-[#3c3b3b] flex flex-row items-center bg-transparent cursor-pointer justify-center rounded-[50%] border-[0.1px] h-8 w-8 lg:h-[6vh] lg:w-[2.7vw]">
                    <ImArrowUpRight2 className="text-[#9fe30e] hover:text-white" />
                  </button>
                </div>
                <div className="flex lg:items-center pt-4  items-center   h-[11vh] lg:h-[10vh]  lg:pt-9 gap-1 lg:justify-start">
                  <p className="dongle-regular   text-[white] lg:text-[37px] text-[23px]">
                    Hello,
                  </p>
                  <IoMdHand className="text-[21px] text-[#9fe30e] mb-2" />{" "}
                  <p className=" dongle-regular text-[white] lg:text-[37px] text-[23px]">
                    I'm Emmanuel Godwin
                  </p>{" "}
                </div>
              </div>

              <div className="  flex flex-col items-start justify-start    h-[54vh] w-[inherit]">
                <div className="flex flex-col gap-[-20px]    ">
                  <p className=" dongle-bold lg:text-[98px] text-[58px] font-bold text-[#9ee309] leading-tight">
                    An Innovative
                  </p>
                  <p className=" tourney-heading  text-[29px] lg:text-[54px] font-bold text-[#b3b3b3] leading-tight">
                    FRONTEND DEVELOPER
                  </p>
                </div>

                <div className=" h-22vh lg:h-[16vh]   flex  flex-col lg:flex-row  gap-5  lg:items-center lg:gap-3 w-[85vw] lg:w-[inherit]">
                  <div className="  lg-pt-0 justify-start  items-end lg:items-center flex  h-[13vh] lg:h-[inherit] lg:w-[12.4vw] w-[59vw]">
                    <button className=" bg-[#9fe30e] hover:bg-transparent hover:text-[#9fe30e] hover:border-[2px] hover:border-solid hover:border-[#9fe30e]  hover:duration-[1s]   drop-shadow-[#9fe30e] cursor-pointer  flex  w-[40vw] lg:w-[12vw] rounded-lg h-[7.5vh] lg:h-[8vh]  items-center gap-2 justify-center">
                      <p className="text-[18px] carlito-bold font-[900]">
                        {" "}
                        Resume
                      </p>{" "}
                      <div className="mb-[0.2vh]">
                        <FaDownload className="text-[14px] " />
                      </div>
                    </button>
                  </div>

                  
                  <div className="flex  flex-row  pl-6 h-[10vh]  lg:h-[inherit] lg:w-[24vw] w-[inherit] gap-2 lg:gap-1 items-center justify-start  ">
  
      
        <img src={ClientOne} className=" lg:w-12 w-10 h-10 lg:h-12 rounded-full -ml-5 z-10 relative" alt="" />
     
    
      <img src={ClientTwo} className="lg:w-12 w-10 h-10 lg:h-12 rounded-full  -ml-5 z-10 relative" />
     
      <img src={ClientThree} className="lg:w-12 w-10 h-10 lg:h-12 rounded-full -ml-5 z-10 relative" />
     <div className="lg:w-12 w-10 h-10 lg:h-12 flex items-center justify-center z-[2] rounded-full  bg-[#68381e] -ml-5 z-40 relative">
      <img src={ClientFour} className="lg:w-7 w-5 h-10 lg:h-12 rounded-full z-[10]   relative"/></div> 

      <div className="flex flex-wrap items-center pt-1 lg:h-[13vh]  lg:w-[12vw]">
      <p className=" dongle-regular leading-5 text-[22px] lg:text-[25px] text-[#ababab] font-[600]">3k+ Worldwide Customers</p>
      </div>
    </div>
                </div>
              </div>
            </div>

            <div className=" h-[50vh] w-[85vw] pl-4 lg:pl-0 lg:h-[inherit] lg:w-[37vw] flex  lg:flex-row  ">
              <img src={PictureOne} className="pictureOne" />
            </div>
          </div>

          <div className="w-[85vw] shadow-md flex flex-row items-center justify-around border-[1px] bg-[#171715] border-[#87bd12e3] border-dotted h-[18vh] rounded-lg ">
            <div className="flex-col h-[12vh] lg:flex pt-2 gap-1 lg:pt-0  w-[14vw] lg:flex-row lg:h-[15vh] lg:gap-3 lg:w-[16vw] lg:items-center ">
              <div className="lg:h-[11vh] h-[4vh] w-[14vw]  flex items-end  justify-center lg:w-[3vw]  lg:gap-3 ">
                {" "}
                <FaLinkedinIn className="lg:text-[54px] text-[20px]  text-[#9e9d9d]" />
              </div>
              <div className="flex-col lg:h-[11vh]  flex lg:items-start pl-2 lg:justify-center pt-1   w-[14vw] lg:w-[10vw] ">
                <p className="text-[#4f4e4e] absolute lg:relative invisible lg:visible text-[20px] tracking-[1px] font-[700]">
                  LinkedIn
                </p>{" "}
                <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[10px] lg:text-[16px] font-[700]">
                    See My Work
                  </p>
              </div>
            </div>
            <div className="lg:flex-row flex justify-end flex-col h-[12vh] lg:h-[15vh] lg:gap-3 w-[16vw] lg:items-center ">
              <div className="lg:h-[11vh] h-[4vh]  flex items-end justify-center lg:w-[3vw]  gap-3 ">
                {" "}
                <SiUpwork className="lg:text-[54px] text-[20px] text-[#9e9d9d]" />{" "}
              </div>
              <div className="h-[6.3vh] flex-col lg:h-[11vh] flex items-start pl-2 lg:pl-0 justify-center pt-1   lg:w-[10vw] ">
                <p className="text-[#4f4e4e] absolute lg:relative invisible lg:visible  text-[20px] tracking-[1px] font-[700]">
                  Upwork
                </p>{" "}
                <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[10px] lg:text-[16px] font-[700]">
                  Request service
                </p>
              </div>
            </div>

            <a href="https://github.com/EMMANUELGODWINDEV" target="_blank">
              <button className="  pt-3 h-[12vh] cursor-pointer flex lg:flex-row flex-col   lg:h-[15vh] lg:gap-3 w-[16vw]  items-center">
                <div className="lg:h-[11vh] flex items-end justify-center w-[15vw] lg:w-[3vw]  lg:gap-3 ">
                 
                  <PiGithubLogoFill className=" lg:text-[58px] text-[20px] text-[#9e9d9d]" />
                </div>
                <div className="h-[6vh] flex-col lg:h-[11vh] flex items-start justify-center pt-1  lg:w-[10vw] ">
                  <p className="text-[#4f4e4e]  absolute lg:relative invisible lg:visible text-[20px] tracking-[1px] font-[700]">
                    Github
                  </p>
                  <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[10px] lg:text-[16px] font-[700]">
                    See My Work
                  </p>
                </div>
              </button>{" "}
            </a>

            <a href="https://" target="_blank">
              <button className=" h-[12vh] cursor-pointer flex lg:flex-row flex-col  pt-3 lg:pt-0 lg:h-[15vh] lg:gap-3 w-[16vw] items-center ">
                <div className="w-[15vw]  lg:h-[11vh] flex items-end justify-center lg:w-[3vw]  gap-3 ">
                  {" "}
                  <TbBrandFiverr className="lg:text-[53px] text-[20px] text-[#9e9d9d]" />{" "}
                </div>
                <div className="flex-col lg:h-[11vh] flex items-start justify-center pt-1   lg:w-[10vw] ">
                  <p className="text-[#4f4e4e] absolute lg:relative invisible lg:visible text-[20px] tracking-[1px] font-[700]">
                    Fiverr
                  </p>
                  <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[10px] lg:text-[16px] font-[700]">
                    Request service
                  </p>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
