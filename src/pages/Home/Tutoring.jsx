import React from "react";
import CardList from "../../components/CardList";
import { Facilities } from "../../data/Data";

function Tutoring() {
  return (
    <div>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>Facilities That we provide</h2>
        </div>
        <br />
        <br />
        <div className="m-2 p-2">
          <CardList facility={Facilities} />
        </div>
      </div>
    </div>
  );
}

export default Tutoring;
