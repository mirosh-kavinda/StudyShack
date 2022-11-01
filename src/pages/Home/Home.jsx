import React from 'react'
import img from "../../images/G3.png";
import "../../css/LandingPage.css";
import Testimonials from "./Testimonials";
import Tutors from "./Tutors";
import Tutoring from "./Tutoring";


function Home() {
  return (
    <div className="body">
      <div className="container">
      <div className="para">
          <h1>
            Access To Most Valuable <br />
            10 Courses from 30 <br />
            Instructors{" "}
          </h1>
          <p>Various versions have evolved over the years, sometimes by accident,</p>
       
        </div>
        <img src={img} alt="land" className="landing-image toggle " />
        
        <div className="d-grid gap-3 d-md-flex justify-content-md-start buttons ">
        </div>
      </div>
      <Tutoring />
      <Tutors />
      <Testimonials />
      <br />
    </div>
  );
}

export default Home;
