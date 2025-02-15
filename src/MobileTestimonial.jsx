import React from "react";
import "./global.css";
import ClientOne from "./assets/PortfolioClientsPIC4.jpg";
import ClientTwo from "./assets/PortfolioClientsPIC1.jpg";
import ClientThree from "./assets/testimonialImg4.jpg";
import ClientFour from "./assets/testimonialImg7.jpg";
import ClientFive from "./assets/testimonialImg1.jpg";
import ClientSix from "./assets/testimonialImg5.jpg";
import ClientSeven from "./assets/angelo.jpg";
import ClientEight from "./assets/PortfolioClientsPIC3.jpg";
import ClientNine from "./assets/mabel.jpg";

function MobileTestimonial() {
  return (
    
   <div className="flex flex-nowrap gap-28 min-w-fit animate-scroll">
   <TestimoniesMobile
          writeUp="If you're looking for a frontend developer who will change the way you think about web development, Emmanuel is indeed a great choice, He's knows his work."
          clientName="Brandon Hall"
          imageSrc={ClientThree}
        />
        <TestimoniesMobile
          writeUp="He's a master problem-solver, a brilliant designer, and a dedicated professional who will stop at nothing to deliver exceptional results. His passion for innovation is contagious."
          clientName="Ethan Patel "
          imageSrc={ClientOne}
        />
        <TestimoniesMobile
          writeUp="Emmanuel is a genius! , for the first time my project reached
                    massive user engagements and recommendations making impact to our
                    sales and active subscribers , I'm glad i choose right."
          clientName="Isabella Martin "
          imageSrc={ClientTwo}
        />
        <TestimoniesMobile
          writeUp="I had the pleasure of working with Emmanuel on my recent web development project, and I must say, I'm blown away by his exceptional skills and professionalism!"
          clientName="Kai Jenkins"
          imageSrc={ClientFour}
        />
        <TestimoniesMobile
          writeUp=" Emmanuel demonstrated a deep understanding of my modern web technologies and best practices. He brought my vision to life with his meticulous attention to detail."
         clientName="Charlotte Davis"
          imageSrc={ClientFive}

        />
        <TestimoniesMobile
          writeUp="What impressed me most about Emmanuel was his excellent communication skills, responsiveness, and willingness to go above and beyond to ensure my satisfaction."
          clientName="Elijah Moreno "
          imageSrc={ClientSix}
        />
        <TestimoniesMobile
          writeUp="Emmanuel's technical expertise is impressive, but what really sets him apart is his ability to understand the client's vision and bring it to life. He's a master of his craft."
          clientName="Cameron Santos "
          imageSrc={ClientSeven}
        />
        <TestimoniesMobile
          writeUp="Emmanuel took the time to understand my goals, target audience, and
                    brand identity, and then crafted a bespoke solution that exceeded my
                    expectations"
          clientName="Beckett Reyes"
          imageSrc={ClientEight}
        />
        <TestimoniesMobile
          writeUp="What I appreciate most about Emmanuel is his professionalism, work ethic, and commitment to delivering high-quality results creative problem-solving skills, and dedication to deliver early. "
          clientName="Rohan Sharma"
          imageSrc={ClientNine}
        />
      </div>
   

  );
}
const TestimoniesMobile = ({ writeUp, clientName, imageSrc }) => {
  return (
    <div className="h-[46vh] flex flex-col items-center shadow-lg p-6 rounded-lg  justify-around gap-24 w-[84vw] bg-[#292929] ">
      <div className="h-[9.5vh]  w-full">
        <p className="dongle-regular text-[24px] leading-tight text-[#c0bfbf]">
          {writeUp}
        </p>
      </div>
      <div className="gap-3 h-[5vh] pb-3  items-center justify-start  flex-row flex w-full">
        <img
          className=" rounded-full w-10 h-10"
          src={imageSrc}
          alt={clientName}
        />
        <p className="text-[#dddbdb] carlito-bold   leading-tight  text-[15px] tracking-[0.7px]">
          {clientName}
        </p>
      </div>
    </div>
  );
};

export default MobileTestimonial;
