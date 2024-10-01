import React from "react";
import "./Sectiontwo.css";
import myimage from "./istockphoto.jpg";

function Sectiontwo() {
  return (
    <>
      <div className="subsec">
        <div className="subimage">
          <img src={myimage} alt="img_1" />
        </div>
        <br />
        <div className="subsectioncontent">
          <h2>
            <span>Full Stack</span> Digital Agency
          </h2>
          <p>
            Full Stack Digital Agency offering comprehensive solutions for web
            design, development, and digital marketing. We specialize in
            crafting tailored digital experiences that drive growth, enhance
            brand visibility, and deliver measurable results for your business.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sectiontwo;
