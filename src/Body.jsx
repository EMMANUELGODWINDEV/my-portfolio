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
      <div className="  brightness-125 flex bg-[#0c0d08] items-center justify-center pb-4 h-[120vh] w-screen">
        <div className="h-[inherit] w-[85vw]  flex-col justify-center  flex   ">
          <div className=" h-[80vh] w-[inherit]   flex flex-row justify-between   ">
            <div className=" h-[inherit] pt-3  bg-[#0c0d08] w-[45vw]  flex flex-col justify-start items-start border-[0px] border-solid  ">
              <div className="flex flex-col   h-[24vh]  w-[inherit]">
                <div className="  border-solid border-b-[1.5px] pt-1 flex flex-row items-start justify-center  border-[#dddbdb] text-[#ababab] h-[15vh] flex-wrap w-[17.4vw]">
                  <p className=" dongle-regular leading-9 text-[25px] font-[600]">
                    Currently Available For Freelance Worldwide
                  </p>{" "}
                  <button className=" animate-color absolute mr-9 mt-[5vh] hover:border-[1px] hover:duration-[2s] hover:border-[#9fe30e] border-solid border-[#3c3b3b] flex flex-row items-center bg-transparent cursor-pointer justify-center rounded-[50%] border-[0.1px] h-[6vh] w-[2.7vw]">
                    <ImArrowUpRight2 className="text-[#9fe30e] hover:text-white" />
                  </button>
                </div>
                <div className="flex items-center h-[10vh] pt-9 gap-1 justify-start">
                  <p className="dongle-regular   text-[white] text-[37px]">
                    Hello,
                  </p>
                  <IoMdHand className="text-[21px] text-[#9fe30e] mb-2" />{" "}
                  <p className=" dongle-regular text-[white] text-[37px]">
                    I'm Emmanuel Godwin
                  </p>{" "}
                </div>
              </div>

              <div className="  flex flex-col items-start justify-start    h-[54vh] w-[inherit]">
                <div className="flex flex-col gap-[-20px]    ">
                  <p className=" dongle-bold text-[98px] font-bold text-[#9ee309] leading-tight">
                    An Innovative
                  </p>
                  <p className=" tourney-heading text-[54px] font-bold text-[#b3b3b3] leading-tight">
                    FRONTEND DEVELOPER
                  </p>
                </div>

                <div className=" h-[16vh]  flex flex-row   items-center gap-3  w-[inherit]">
                  <div className=" justify-start items-center flex  h-[inherit] w-[12.4vw]">
                    <button className=" bg-[#9fe30e] hover:bg-transparent hover:text-[#9fe30e] hover:border-[2px] hover:border-solid hover:border-[#9fe30e]  hover:duration-[1s]   drop-shadow-[#9fe30e] cursor-pointer  flex w-[12vw] rounded-lg h-[8vh]  items-center gap-2 justify-center">
                      <p className="text-[18px] carlito-bold font-[900]">
                        {" "}
                        Resume
                      </p>{" "}
                      <div className="mb-[0.2vh]">
                        <FaDownload className="text-[14px] " />
                      </div>
                    </button>
                  </div>

                  
                  <div className="flex  flex-row  pl-6  h-[inherit] w-[24vw]  gap-1 items-center justify-start  ">
  
      
        <img src={ClientOne} className="w-12 h-12 rounded-full -ml-5 z-10 relative" alt="" />
     
    
      <img src={ClientTwo} className="w-12 h-12 rounded-full  -ml-5 z-10 relative" />
     
      <img src={ClientThree} className="w-12 h-12 rounded-full -ml-5 z-10 relative" />
     <div className="w-12 h-12 flex items-center justify-center rounded-full  bg-[#68381e] -ml-5 z-40 relative"><img src={ClientFour} className="w-7 h-12 rounded-full   relative"/></div> 

      <div className="flex flex-wrap items-center pt-1 h-[13vh]  w-[12vw]">
      <p className=" dongle-regular leading-5 text-[25px] text-[#ababab] font-[600]">3k+ Worldwide Customers</p>
      </div>
    </div>
                </div>
              </div>
            </div>

            <div className=" h-[inherit] w-[37vw] border-solid border-[0px] flex flex-row  border-[blue]">
              <img src={PictureOne} className="pictureOne" />
            </div>
          </div>

          <div className="w-[85vw] shadow-md flex flex-row items-center justify-around border-[1px] bg-[#171715] border-[#87bd12e3] border-dotted h-[18vh] rounded-lg ">
            <div className="flex h-[15vh] gap-3 w-[16vw] items-center">
              <div className="h-[11vh] flex items-end justify-center w-[3vw]  gap-3 ">
                {" "}
                <FaLinkedinIn className="text-[54px]  text-[#9e9d9d]" />{" "}
              </div>
              <div className="flex-col h-[11vh] flex items-start justify-center pt-1   w-[10vw] ">
                <p className="text-[#4f4e4e]  text-[20px] tracking-[1px] font-[700]">
                  LinkedIn
                </p>{" "}
                <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[16px] font-[700]">
                  See My Work
                </p>
              </div>
            </div>
            <div className="flex h-[15vh] gap-3 w-[16vw] items-center">
              <div className="h-[11vh] flex items-end justify-center w-[3vw]  gap-3 ">
                {" "}
                <SiUpwork className="text-[54px] text-[#9e9d9d]" />{" "}
              </div>
              <div className="flex-col h-[11vh] flex items-start justify-center pt-1   w-[10vw] ">
                <p className="text-[#4f4e4e]  text-[20px] tracking-[1px] font-[700]">
                  Upwork
                </p>{" "}
                <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[16px] font-[700]">
                  Request service
                </p>
              </div>
            </div>

            <a href="https://github.com/EMMANUELGODWINDEV" target="_blank">
              <button className=" cursor-pointer flex h-[15vh] gap-3 w-[16vw] items-center">
                <div className="h-[11vh] flex items-end justify-center w-[3vw]  gap-3 ">
                  {" "}
                  <PiGithubLogoFill className=" text-[58px] text-[#9e9d9d]" />{" "}
                </div>
                <div className="flex-col h-[11vh] flex items-start justify-center pt-1   w-[10vw] ">
                  <p className="text-[#4f4e4e]  text-[20px] tracking-[1px] font-[700]">
                    Github
                  </p>{" "}
                  <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[16px] font-[700]">
                    See My Work
                  </p>
                </div>
              </button>{" "}
            </a>

            <a href="https://" target="_blank">
              <button className=" cursor-pointer flex h-[15vh] gap-3 w-[16vw] items-center">
                <div className="h-[11vh] flex items-end justify-center w-[3vw]  gap-3 ">
                  {" "}
                  <TbBrandFiverr className="text-[53px] text-[#9e9d9d]" />{" "}
                </div>
                <div className="flex-col h-[11vh] flex items-start justify-center pt-1   w-[10vw] ">
                  <p className="text-[#4f4e4e]  text-[20px] tracking-[1px] font-[700]">
                    Fiverr
                  </p>{" "}
                  <p className="text-[#4f4e4e]  carlito-regular tracking-[1px] text-[16px] font-[700]">
                    Request service
                  </p>
                </div>
              </button>{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
