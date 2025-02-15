import React from "react";
import "./global.css";

function MyServices() {
  return (
    <>
      <div className="bg-[#0c0d08] h-[151vh]  w-screen flex justify-center items-center ">
        <div className="h-[131vh]  w-full gap-3  flex-col items-center justify-center  flex   ">
          <div className="flex flex-col  border border-solid   lg:h-[19vh] w-[80vw] lg:w-[68vw]">
            <div className="flex flex-col items-center  border-[purple] border-[10px] border-solid  lg:h-[19vh] gap-4  lg:gap-8  w-full">
              <div className=" border-[#4f4e4e] flex flex-row items-center justify-center  lg:h-[5.4vh] border-solid   border-[2.5px] w-[27vw] lg:w-[10vw] rounded-[5vw] lg:rounded-[2vw]">
                
                <p className=" dongle-regular text-[27px] lg:text-[30px] text-[#9fe30e] leading-tight">
                  Services
                </p>
              </div>
              <div className=" flex flex-row  border border-solid  items-center justify-center text-center  w-full lg:w-[40vw] leading-tight h-[7vh]  ">
                <h2 className="dongle-regular text-[#dddbdb]  text-[35px] lg:text-[58px]">
                  My Special Services
                </h2>
              </div>
            </div>
          </div>
          <div className="lg:w-full  w-[97vw] gap-6   border border-solid  h-[105vh]">
            <MyServiceTitled numberList=" 01 ." serviceType="Web Development" />
            <MyServiceTitled
              numberList=" 02 ."
              serviceType="Mobile App Development"
            />
            <MyServiceTitled numberList=" 03 ." serviceType="Custom Solutions" />
            <MyServiceTitled
              numberList=" 04 ."
              serviceType="Maintenance and Improvement" className="invisible lg:visible lg:relative absolute"
            />
            <MyServiceTitled
              numberList=" 05 ."
              serviceType="Training and Growth"
            />
          </div>
        </div>
      </div>
    </>
  );
}

const MyServiceTitled = ({ numberList, serviceType }) => {
  return (
    <div className="w-full  flex items-center cursor-pointer hover:bg-[#2c2b2b]   justify-center  h-[20vh]">
      <div className="lg:w-[85vw]  w-[90vw]  serviceBorder  flex items-center h-full">
        <div className="lg:h-full  flex items-center justify-start  w-[10vw] lg:w-[6vw]">
          <p className="text-[#dddbdb] dongle-regular text-[23px] lg:text-[42px]">
            {numberList}
          </p>
        </div>
        <div className="lg:h-full  flex items-center justify-start w-full  lg:w-[60vw]">
          <p className="text-[#dddbdb] dongle-regular  text-[39px] lg:text-[68px]  leading-tight">
            {serviceType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
