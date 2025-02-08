import React, { useEffect, useState } from "react";
import { IoRocketSharp } from "react-icons/io5";
import "./global.css";

function HeaderBackUp({
  homeBodyRef,
  aboutRef,
  workRef,
  servicesRef,
  testimonialsRef,
}) {
  const [activeLink, setActiveLink] = useState("");

  // Set up intersection observer to track sections
  useEffect(() => {
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // 50% of the section must be visible to be considered active
    };

    // Create an intersection observer callback
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Mark the active section when it enters the viewport
          setActiveLink(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe each section reference
    observer.observe(homeBodyRef.current);
    observer.observe(aboutRef.current);
    observer.observe(workRef.current);
    observer.observe(servicesRef.current);
    observer.observe(testimonialsRef.current);

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [homeBodyRef, aboutRef, workRef, servicesRef, testimonialsRef]);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };    
  

  const styles = {
    position: "fixed",
    top: 0,
    height: "16vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(12, 13, 8, 0)',
    backdropFilter: "blur(10px)",
    zIndex: 1000
  };

  const stylesTwo = {
    top: 0,
    height: "12vh",
    width: "90vw",
    paddingLeft: "2.3vw",
    borderRadius: "3vw",
    background: "rgba(12, 13, 8, 0.5)",
    backdropFilter: "blur(13px)",
    zIndex: 1000
  };

  return (
    <div>
      <div style={styles} className="bg-[#0c0d08] brightness-125 z-[1000] flex h-[15vh] w-[100vw] items-center justify-center">
        <div style={stylesTwo} className="z-[1000] bg-[#0c0d08] flex h-[15vh] w-[85vw] items-center justify-between">
          <div className="text-[#cccccc] w-[15vw] h-[15vh] flex items-center">
            <h1 className="pacifico-regular">
              Por<span className="text-[#9fe30e]">tf</span>olio
            </h1>
          </div>

          <div className="w-[60vw] h-[inherit] flex items-center">
            <div className="text-[#cccccc] flex gap-12 items-center border-solid h-[inherit] border-[0px] border-[red] w-[50vw]">
              <div className={`hover:border-b-[2px] hover:border-solid ${activeLink === "home" ? "text-[#9fe30e]" : "text-[#cccccc]"}`}>
                <a onClick={() => handleScroll(homeBodyRef)} href="#home" className="dongle-regular">
                  HOME
                </a>
              </div>
              <div className={`hover:border-b-[2px] hover:border-solid ${activeLink === "about" ? "text-[#9fe30e]" : "text-[#cccccc]"}`}>
                <a onClick={() => handleScroll(aboutRef)} href="#about" className="dongle-regular">
                  ABOUT
                </a>
              </div>
              <div className={`hover:border-b-[2px] hover:border-solid ${activeLink === "work" ? "text-[#9fe30e]" : "text-[#cccccc]"}`}>
                <a onClick={() => handleScroll(workRef)} href="#work" className="dongle-regular">
                  WORK
                </a>
              </div>
              <div className={`hover:border-b-[2px] hover:border-solid ${activeLink === "service" ? "text-[#9fe30e]" : "text-[#cccccc]"}`}>
                <a onClick={() => handleScroll(servicesRef)} href="#service" className="dongle-regular">
                  SERVICES
                </a>
              </div>
              <div className={`hover:border-b-[2px] hover:border-solid ${activeLink === "testimonial" ? "text-[#9fe30e]" : "text-[#cccccc]"}`}>
                <a onClick={() => handleScroll(testimonialsRef)} href="#testimonial" className="dongle-regular">
                  TESTIMONIALS
                </a>
              </div>
              <div className="hover:border-b-[2px] hover:border-solid hover:text-[#9fe30e]">
                <a href="#" className="dongle-regular">
                  CONTACT
                </a>
              </div>
            </div>

            <div className="border-solid border-[red] border-[0px] h-[inherit] flex items-center justify-center w-[15vw]">
              <button className="drop-shadow-[#9fe30e] text-[#cccccc] cursor-pointer flex w-[8vw] rounded-lg hover:h-[7.1vh] hover:w-[8.2vw] h-[7vh] border-solid border-[#9fe30e] border-[2px] items-center gap-2 justify-center hover:bg-[#9fe30e] hover:text-[black] hover:duration-[1s]">
                <IoRocketSharp /> Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBackUp;
