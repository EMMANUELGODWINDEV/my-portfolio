import React, { useRef } from "react";
// import HeaderBackUp from "./BackUpForHeader.jsx";
import Header from "./Header.jsx";
// import Body from "./Body.jsx";
import BodyBackUp from "./BodyBackup.jsx";
// import AboutMe from "./AboutMe.jsx";
import AboutBackUp from "./AbotBackUp.jsx";
import MyServices from "./Service.jsx";
import Testimonial from "./Testimonial.jsx";
import Working from "./Working.jsx";
import "./global.css";

function App() {
  const homeBodyRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <div className="overflow-auto bg-[#0c0d08] ">
      <Header
        homeBodyRef={homeBodyRef}
        aboutRef={aboutRef}
        workRef={workRef}
        servicesRef={servicesRef}
        testimonialsRef={testimonialsRef}
      />

      <main>
        <section id="home" ref={homeBodyRef} className="mt-[16vh]">
          <BodyBackUp />
        </section>

        <section id="about" ref={aboutRef}>
          <AboutBackUp />
        </section>

        <section id="service" ref={servicesRef}>
          <MyServices />
        </section>

        <section id="testimonial" ref={testimonialsRef}>
          <Testimonial />
        </section>

        <section id="work" ref={workRef}>
          <Working />
        </section>
      </main>
    </div>
  );
}

export default App;
