import React from "react";
import "./global.css";

function MyServices() {
  return (
    <>
      <div className="bg-[#0c0d08] h-[151vh]  w-screen flex justify-center items-center ">
        <div className="h-[131vh]  w-full gap-3  flex-col items-center justify-center  flex   ">
          <div className="flex flex-col   h-[19vh] w-[68vw]">
            <div className="flex flex-col items-center   h-[19vh] gap-8 w-full">
              <div className=" border-[#4f4e4e] flex flex-row items-center justify-center  h-[5.4vh] border-solid   border-[2.5px] w-[10vw] rounded-[2vw]">
                {" "}
                <p className=" dongle-regular text-[30px] text-[#9fe30e] leading-tight">
                  Services
                </p>
              </div>
              <div className=" flex flex-row  items-center justify-center  w-[40vw] leading-tight h-[7vh]  ">
                <h2 className="dongle-regular text-[#dddbdb] text-[58px]">
                  My Special Services
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full  gap-6  h-[105vh]">
            <MyServiceTitled numberList=" 01 ." serviceType="Web Development" />
            <MyServiceTitled
              numberList=" 02 ."
              serviceType="Mobile App Development"
            />
            <MyServiceTitled numberList=" 03 ." serviceType="Custom Solutions" />
            <MyServiceTitled
              numberList=" 04 ."
              serviceType="Maintenance and Improvement"
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
    <div className="w-full  flex items-center   justify-center  h-[20vh]">
      <div className="w-[85vw]  serviceBorder  flex items-center h-full">
        <div className="h-full  flex items-center justify-start  w-[6vw]">
          <p className="text-[#dddbdb] dongle-regular text-[42px]">
            {numberList}
          </p>
        </div>
        <div className="h-full  flex items-center justify-start  w-[60vw]">
          <p className="text-[#dddbdb] dongle-regular text-[68px]  leading-tight">
            {serviceType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
