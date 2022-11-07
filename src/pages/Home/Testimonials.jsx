import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "../../css/Carousel.css";
import { TestimonialData } from "../../data/Data";

export default class Testimonials extends Component {
  render() {
    return (
      <>
        <h1 className="p-4 m-4 d-flex justify-content-center">
          Students Feedback
        </h1>
        <Carousel
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          {TestimonialData.map((user, i) => {
            return (
              <div key={i} className="row">
                <div className=" col-sm-12  p-3">
                  <img alt="image3" src="../../images/john.png"  style={{height:"200px",width:"200px"}}  />
                </div>
                <div className=" col-sm-12 p-5">
                  <h3>{user.person}</h3>
                  <h4> {user.profession}</h4>
                  <p>{user.description}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </>
    );
  }
}
