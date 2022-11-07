import React from "react";
import img from "../../images/G3.png";
import Testimonials from "./Testimonials";
import Tutors from "./Tutors";
import Tutoring from "./Tutoring";

function Home() {
  return (
    <div className="  container   ">
      <div className=" " style={{ "marginTop": "100px" }}>
        <div className="row  ">
          <div className="  mt-4  col col-md-5  col-sm-12 col-lg-4">
            <h1>
              Access To Most Valuable <br />
              10 Courses from 30 <br />
              Instructors{" "}
            </h1>
            <p>
              Various versions have evolved over the years, sometimes by
              accident,
            </p>
            <div className="input-group  ">
              <input
                type="text"
                className="form-control input-text"
                placeholder="Search products...."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-dark btn-lg" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <span className=" mt-4 mx-0 col-md-6  col-sm-12 col-lg-6  ">
            <img src={img} alt="land" width={"700px"} />
          </span>
        </div>
      </div>
      <div style={{ "marginTop": "80px" }}>
        <Tutoring />
        <Tutors />
        <Testimonials />
      </div>

      <br />
    </div>
  );
}

export default Home;
