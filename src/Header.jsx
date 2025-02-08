import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
// import "./header.css"
import "./global.css";

function Header() {

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.pageYOffset || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);
  const styles = scrollTop > 0 ? { 
    position: "fixed", 
    top: 0, 
    height : "16vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(12, 13, 8, 0)'   ,
    backdropFilter: "blur(10px)", 
    zIndex: 1000 
  } : {};

  const stylesTwo = scrollTop > 0 ? { 
    
    top: 0, 
    height : "12vh",
    width: "90vw",
    paddingLeft: "2.3vw",
    borderRadius : "3vw",
    background: "rgba(12, 13, 8, 0.5)", 
    backdropFilter: "blur(13px)", 
    zIndex: 1000 
  } : {};



  return (
    <>
      <div className="">
        <div style={styles} className="   bg-[#0c0d08] brightness-125 z-[1000]  flex h-[15vh] w-[100vw] items-center justify-center ">
          <div  style={stylesTwo}  className="z-[1000] bg-[#0c0d08] flex h-[15vh]  w-[85vw] items-center  justify-between  ">
            <div className=" text-[#cccccc] w-[15vw]  h-[15vh] flex items-center ">
              <h1 className="pacifico-regular text-[23px] lg:text-[30px]">
                Por<span className="text-[#9fe30e]">tf</span>olio
              </h1>
            </div>

            <div className=" lg:visible invisible lg:relative absolute  w-[60vw] h-[inherit] flex items-center">
              <div className=" text-[#cccccc]  flex  gap-12 items-center border-solid  h-[inherit]  border-[0px] border-[red] w-[50vw]">
              <div className=" hover:border-b-[2px]  hover:border-solid hover:text-[#9fe30e]">
                  <a href="" className="  dongle-regular  ">
                    HOME
                  </a>
                </div>
                <div className=" hover:border-b-[2px] hover:border-solid hover:text-[#9fe30e]">
           
                  <a href="" className="  dongle-regular">
                    ABOUT
                  </a>
                </div>
                <div className=" hover:border-b-[2px] hover:border-solid hover:text-[#9fe30e]">
                  <a href="" className="  dongle-regular">
                    WORK
                  </a>
                </div>
                <div className=" hover:border-b-[2px] hover:border-solid hover:text-[#9fe30e]">
             
                  <a href="" className="  dongle-regular">
                    SERVICES
                  </a>
                </div>
                <div className=" hover:border-b-[2px] hover:border-solid hover:text-[#9fe30e]">
               
                  <a href="" className="  dongle-regular">
                    TESTIMONIALS
                  </a>
                </div>
                   <div className=" hover:border-b-[2px] hover:border-solid hover:text-[#9fe30e]">
               
                  <a href="" className="  dongle-regular">
                    CONTACT
                  </a>
                </div>
              </div>

              <div className="border-solid border-[red] border-[0px] h-[inherit] flex items-center justify-center w-[15vw]">
                <button className=" drop-shadow-[#9fe30e] text-[#cccccc] cursor-pointer flex w-[8vw] rounded-lg hover:h-[7.1vh] hover:w-[8.2vw] h-[7vh] border-solid border-[#9fe30e] border-[2px] items-center gap-2 justify-center hover:bg-[#9fe30e] hover:text-[black] hover:duration-[1s]  ">
                  <IoRocketSharp /> let's Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



export default Header;
