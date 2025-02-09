import React from "react";
import { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { PiMediumLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import NeonLaptop  from "./assets/Lemonlaptop.png"
import TrophyNeon from "./assets/Trophy.jpg"
import CodeSymbolNeon from "./assets/codeSymbol.jpeg"

function AboutBackUp() {

  const [AboutButton, setAboutButton] = useState("current")

const [ExperienceButton, setExperienceButton] = useState("previous")
const [SkillsButton, setSkillsButton] = useState("previous")
const [AboutSections, setAboutSections] = useState("Active")

const [ExperienceSections, setExperienceSection] = useState("Off")
const [SkillsSections, setSkillsSections] = useState("Off")

const  AboutToggling = () => {
  setAboutSections ((curr) => (curr === "Off" ? "Active" : "Active"));
  setAboutButton((prr) => (prr === "previous" ? "current" : "current"));

 
  setExperienceButton("previous")
  setSkillsButton("previous")


  
  setExperienceSection("Off")
  setSkillsSections("Off")
};


const ExperienceToggling  = () => {
setExperienceSection ((curr) => (curr === "Off" ? "Active" : "Active"));
setExperienceButton((prr) => (prr === "previous" ? "current" : "current"));


setSkillsButton("previous")
setAboutButton("previous")



  setAboutSections ("Off")
  
  setSkillsSections("Off")
}
const SkillsToggling  = () => {
  setSkillsSections ((curr) => (curr === "Off" ? "Active" : "Active"));
  setSkillsButton((prr) => (prr === "previous" ? "current" : "current"));



 
  setExperienceButton("previous")
  setAboutButton("previous")





setAboutSections ("Off")

setExperienceSection("Off")

}




  return (
    <>
      <div className="  brightness-125 flex bg-[#1a1a1a] items-center justify-center border-solid border  h-[282vh] lg:h-[196vh] w-screen ">
        <div className=" h-[260vh] lg:h-[174vh] border-solid border-[11px] border-[red] w-[85vw] lg:gap-4 gap-7  flex-col items-center   flex   ">
          <div className="flex flex-col  border-solid border w-[85vw] lg:h-[55vh] lg:w-[68vw]">
            <div className="flex flex-col border-solid border items-center   h-[14vh] lg:h-[19vh] lg:gap-8 gap-4 lg:w-full">
              <div className=" border-[#4f4e4e] flex flex-row  items-center justify-center  lg:h-[5.4vh] border-solid   border-[2.5px] w-[27vw] lg:w-[10vw] rounded-[5vw] lg:rounded-[2vw]">
                
                <p className=" dongle-regular text-[27px] lg:text-[30px] text-[#9fe30e] leading-tight">
                  About me
                </p>
              </div>
              <div className="  flex flex-row  items-center justify-center  lg:w-[40vw] leading-tight lg:h-[7vh]  ">
                <h2 className="dongle-regular text-[#dddbdb] text-[35px] lg:text-[58px]">
                  Explore The Innovation & More
                </h2>
              </div>
            </div>

            <div className=" flex-wrap pr-1 lg:pr-0 lg:pl-2 w-full       lg:h-[32vh]   lg:w-full">
              <div className="container mx-auto p-[2px] md:p-2 lg:p-[3px] flex gap-0 flex-col pt-0 items-center">
                <p className="dongle-regular text-[20px] lg:text-[30px] font-bold  text-center leading-[1.08] lg:leading-tight text-[#bebbbb]">
                  Welcome to my digital space! I'm{" "}
                  <span className="text-[#9fe30e]">Emmanuel Godwin</span>,
                  Frontend Developer driven by innovation
                </p>
                <p className="dongle-regular text-[20px] lg:text-[30px] text-center leading-[1.08] lg:leading-tight text-[#bebbbb] ">
                  in the Software Industry, crafting high-quality software
                  applications that simplify lives
                </p>
                <p className="dongle-regular  text-[20px] lg:text-[30px] text-center leading-[1.08] lg:leading-tight text-[#bebbbb]">
                  and drive business success. I'm always open to new
                  opportunities
                </p>
                <p className="dongle-regular text-[20px] lg:text-[30px] text-center leading-[1.08] lg:leading-tight text-[#bebbbb]">
                  If you have a project or startup in mind, feel free to share
                </p>
                <p className="dongle-regular text-[20px] lg:text-[30px] leading-[1.08] lg:leading-tight text-[#bebbbb]">
                  let's create something extraordinary together!
                </p>
              </div>
            </div>
          </div>

          <div className=" lg:h-[9.5vh] h-[12vh] border border-solid  rounded-lg bg-[#121212] flex flex-row  items-center justify-center w-[69.3vw] lg:w-[26.8vw]">
            <div className="w-[67.1vw] lg:w-[25vw] flex flex-row h-[7vh] lg:h-[7.3vh]  gap-1 lg:gap-0  items-center justify-between">
              <button id={AboutButton} onClick={AboutToggling} className="cursor-pointer rounded-lg flex items-center justify-center h-full w-[20vw] lg:w-[8.9vw] ">
                {" "}
                <p className="carlito    font-[600] ">
                  About
                </p>
              </button>
              
              <button  id={ExperienceButton} onClick={ExperienceToggling} className="cursor-pointer rounded-lg flex items-center justify-center w-[25vw] h-full lg:w-[8.9vw] ">
                {" "}
                <p className="carlito  font-[600] ">
                  Experience
                </p>
              </button>
              <button id={SkillsButton} onClick={SkillsToggling} className="  cursor-pointer rounded-lg flex items-center justify-center h-full w-[20vw]  lg:w-[8.8vw] ">
                {" "}
                <p className="carlito  font-[600] ">
                  Skills
                </p>
              </button>
            </div>
          </div>

          {/* The innerDiv is the main visibleHolder  the firstParentDiv is just for gap reasons */}
          <div className=" h-[210vh] lg:h-[102vh]  w-full  flex flex-col justify-end lg:flex-row lg:items-end lg:justify-center ">
            <div  id= {AboutSections} className="  h-[200vh] border-[10px] border-[blue]  border-solid  lg:flex-row flex-col lg:h-[94vh] w-full    bg-[#212121]  p-3  rounded-lg  flex lg:items-center lg:justify-around justify-around">
              <div className=" h-[50vh] lg:h-[79vh] lg:w-[30vw] ">
                <img src={NeonLaptop} className="h-full w-full  brightness-60" />
              </div>
              <div className="lg:h-[79vh] h-[120vh] border  border-solid  lg:w-[43vw]  gap-6  flex flex-col">
                <div className="">
                  <div className="     h-[10vh] flex items-center ">
                    <p className=" dongle-regular leading-[1] text-[38px] lg:text-[50px] text-[#d0cfcf] ">Personal Info</p>
                  </div>
                  <div className="  lg:w-[41.6vw]  lg:h-[22vh]">
                    <p className="carlito text-[#b4b0b0] text-[14px] lg:text-[17px] font-[500]">
                      Seasoned professional with a proven track record as a
                      frontend developer, I'm a creative problem-solver with a
                      passion for building innovative solutions that make a real
                      impact. When I'm not coding, you can find me exploring new
                      technologies, attending industry events, or mentoring
                      junior developers. <br  className=" lg:visible invisible"/> Here's a little more about me:
                    </p>
                  </div>
                </div>
                <div className=" lg:h-[42vh] gap-4  flex flex-col items-center justify-around">
                  <div className=" flex  flex-col lg:flex-row gap-6 w-full lg:w-full lg:h-[19vh] items-center justify-start">
                    <PersonalInfo
                      subject="Email"
                      details="kmaxtaxx@gmail.com"
                    />
                    <PersonalInfo subject="Phone" details="+234 7025283450" />
                  </div>
                  <div className=" flex gap-6 lg:w-full w-full lg:h-[19vh] flex-col lg:flex-row items-center  justify-start">
                    <PersonalInfo subject="Nationality" details="Nigeria" />

                    <div className=" carlito font-[600] h-[17vh] bg-[#1c1c1c] w-full lg:w-[20vw]  gap-3 flex-col flex p-6   rounded-lg">
                      <p className=" text-[#4f4e4e] fon leading-tight">
                        Follow{" "}
                      </p>
                      <div className="flex gap-4  text-[13px] lg:text-[18px] text-[#bebbbb]">
                        <a href="" target="_blank" rel="noopener noreferrer">
                          {" "}
                          <FaXTwitter className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          {" "}
                          <FaLinkedinIn className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          {" "}
                          <PiMediumLogoFill className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <FaTelegramPlane className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <SiUpwork className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          {" "}
                          <PiGithubLogoFill className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                          <TbBrandFiverr className=" text-[13px] lg:text-[18px] text-[#bebbbb]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div   id={ExperienceSections} className="  h-[175vh] border  border-solid  lg:flex-row flex-col lg:h-[94vh] w-[85vw] absolute  flex invisible  bg-[#212121]  p-3  rounded-lg   items-center justify-around">
              <div className="  h-[50vh] lg:h-[79vh] lg:w-[30vw] ">
                <img src={TrophyNeon} className="h-full w-full  brightness-60" />
              </div>
              <div className="lg:h-[79vh] h-[110vh] border  border-solid lg:w-[43vw]  gap-6  flex flex-col">
                <div className="">
                  <div className="     h-[10vh] flex items-center ">
                    <p className=" dongle-regular leading-[1] text-[38px]  lg:text-[50px] text-[#d0cfcf] ">Career Highlights </p>
                  </div>
                  <div className="  lg:w-[41.6vw]  lg:h-[22vh]">
                    <p className="carlito text-[#b4b0b0] text-[14px]  lg:text-[17px] font-[500]">
                    Transformational frontend developer with 3+ years of experience in crafting scalable, responsive, and high-performance  applications that delight users and drive business results. Proven track record of delivering projects on time, with a strong focus on quality, usability, and accessibility. <br  className=" lg:visible invisible"/> Here are some key achievements:
                    </p>
                  </div>
                </div>
                <div className=" lg:h-[42vh] gap-4  flex flex-col items-center justify-around">
                  <div className=" flex lg:flex-row flex-col gap-6 w-full lg:h-[19vh] items-center justify-start">
                    <PersonalInfo
                      subject="56% "
                      details="increased user engagement"
                    />
                    <PersonalInfo subject="95%" details="improved app responsiveness" />
                  </div>
                  <div className=" flex lg:flex-row flex-col gap-6 w-full lg:h-[19vh] items-center  justify-start">
                    <PersonalInfo subject="30%" details=" Increased Sales Performance" />

<PersonalInfo subject="89%" details="   Code quality & maintainability" />
                  </div>
                </div>
              </div>
            </div>
            <div   id={SkillsSections} className="  h-[175vh] border  border-solid  lg:flex-row flex-col lg:h-[94vh] w-[85vw] absolute  flex invisible  bg-[#212121]  p-3  rounded-lg   items-center justify-around">
              <div className=" h-[50vh] lg:h-[79vh] lg:w-[30vw] ">
                <img src={CodeSymbolNeon} className="h-full w-full  brightness-10  drop-shadow-xl backdrop-saturate-200  -backdrop-hue-rotate-30" />
              </div>
              <div className="lg:h-[79vh] h-[110vh] lg:w-[43vw]  gap-8 lg:gap-4  flex flex-col">
                <div className="">
                  <div className="  h-[10vh] flex items-center ">
                    <p className=" dongle-regular leading-[1] text-[38px]  lg:text-[50px] text-[#d0cfcf] ">Technical Skills </p>
                  </div>
                  <div className="  lg:w-[41.6vw]  lg:h-[22vh]">
                    <p className="carlito text-[#b4b0b0] text-[14px]  lg:text-[17px] font-[500]">
                    Designing, developing, and delivering solutions across multiple domains. Staying current with industry trends, best practices, and emerging technologies. Continuously enhancing my skillset to drive innovation and excellence. <br  className=" lg:visible invisible"/> My expertise includes:
                    </p>
                  </div>
                </div>
                <div className=" lg:h-[42vh] lg:gap-4  gap-5 flex flex-col items-center justify-around">
                  <div className=" flex gap-6 w-full lg:flex-row flex-col lg:h-[19vh] items-center justify-start">
                    
                  <div className=" carlito  flex-wrap font-[600] h-[23vh] bg-[#1c1c1c] lg:w-[41vw]  gap-2 flex-col flex p-6   rounded-lg">
      
            <div className="flex gap-3 flex-row">    
               
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"  className="h-6 rounded-sm w-6"/>
          
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="h-6 rounded-sm w-6" />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="h-6 rounded-sm w-6" />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"  className="h-6 rounded-sm w-6" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"  className="h-6 rounded-sm w-6" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"  className="h-6 rounded-sm w-6" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg" className="h-6 rounded-sm w-6"  />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"  className="h-6 rounded-sm w-6" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" className="h-6 rounded-sm w-6"  />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"  className="h-6 rounded-sm w-6" />
       
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="h-6 rounded-sm w-6"  />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="h-6 rounded-sm w-6" />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="h-6 rounded-sm w-6" />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="h-6 rounded-sm w-6" />
          
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" className="h-6 rounded-sm w-6"  />
          
       
          </div> 

      <p className="leading-tight dongle-regular text-[23px] text-[#bebbbb]">
        fd
      </p>
    </div>
                   
                  </div>
                  <div className=" flex gap-6 w-full lg:h-[19vh]  items-center  justify-start">
                    <PersonalInfo subject="Nationality" details="Nigeria" className ="h-[28vh]" />

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const PersonalInfo = ({ subject, details }) => {
  return (
    <div className=" carlito font-[600] h-[17vh] bg-[#1c1c1c] w-full lg:w-[20vw]  gap-2 flex-col flex p-6   rounded-lg">
      <p className=" text-[#4f4e4e]  leading-tight"> {subject}</p>
      <p className="leading-tight dongle-regular  text-[17px]  lg:text-[23px] text-[#bebbbb]">
        {details}
      </p>
    </div>
  );
};

export default AboutBackUp;
