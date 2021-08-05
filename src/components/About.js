import React from "react";
import talha from "./talha.png";
function About() {
  return (
    <>
      <div className="text-center mt-3">
        <h5>Hello I am React JS developer</h5>
        <img
          className=" rounded float-left img-responsive img-fluid mt-4"
          height="300px"
          width="300px"
          src={talha}
          alt=""
        />
      </div>
    </>
  );
}

export default About;
