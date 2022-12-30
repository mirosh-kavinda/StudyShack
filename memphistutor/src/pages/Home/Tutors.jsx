import React from "react";
import { Link } from "react-router-dom";
// import image from "../../images/Rectangle.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { TutorsData } from "../../data/Data";
import image1 from "../../images/shirley.png";

function Tutors() {
  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6000}
    >
      {TutorsData.map((user, i) => {
        return (
          <div key={i} className="content mt-3">
            <h1 className="  d-flex justify-content-center">
              Our Lecturers
            </h1>
            <div className="row ">
              <div className="col-sm-12 col-md-6 col-lg-6">
                <img src={image1}  style={{height:"200px",width:"200px"}} alt="memphis " />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 p-3">
                <p className="ps ma-3">{user.para1}</p>
                <p className="ps">{user.para2}</p>
                <strong>
                  <p className="ps">{user.para3}</p>
                </strong>
                <p className="ps">
                  See my{" "}
                  <strong>
                    <Link to="#" className="ps2">
                      LinkedIn
                    </Link>
                  </strong>{" "}
                  profile{" "}
                  <Link to="#" className="ps2">
                    here
                  </Link>{" "}
                  and my{" "}
                  <strong>
                    <Link
                      to="https://scholar.google.com/citations?user=HdDV3_wAAAAJ&hl=en"
                      className="ps2"
                    >
                      google scholar
                    </Link>
                  </strong>{" "}
                  page{" "}
                  <Link to="#" className="ps2">
                    here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Tutors;
