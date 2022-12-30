import React from "react";
import image from "../images/create.png";




const Card = ({ name, facility, id }) => {
  return (
    <a className=" d-flex justify-content-center col-sm-6 col-md-4 col-lg-4" href="23"style={{"textDecoration": "none" ,"color":"black" ,"cursor":"pointer"}}>
      <img
    
        alt="robots"
        src={image}
        style={{ width: "150px", height: "150px" }}
      />
      <div className="card-body">
        <h5>{name}</h5>
        <h5>{facility}</h5>
      </div>
    </a>
  );
};

const CardList = ({ facility }) => {
  return (
    <div className="container ">
    <div className="row e-3">
      {facility.map((user, i) => {
       
        return (
          <Card
            key={i}
            facility={facility[i].facility}
            name={facility[i].name}
            id={facility[i].id}
          />
        );
      })}
    </div>
    </div>
  );
};
export default CardList;
