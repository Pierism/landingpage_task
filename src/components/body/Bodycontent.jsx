import React from "react";
import Sectionone from "../sections/section_one/Sectionone";
import Sectiontwo from "../sections/section_two/Sectiontwo";
import Service from "../sections/section_service/Service";
import Testimonial from "../sections/testimonial_section/Testimonial";
import Connect from "../sections/section_connect/Connect";
import Animation from "../sections/animation_section/Animation";


function Bodycontent() {
  return (
    <>
      <div id="body">
        {/*first section*/}
        <Sectionone/>
        <br />
        {/*second section */}
        <Sectiontwo/>
        <br/><br /><br />
        {/*our services section */}
        <Service/>
        <br/><br /><br /><br /><br /><br />
        {/*testimonial section */}
        <Testimonial/>
        <br/><br />
        {/*connect section */}
        <Connect/>
        <br /><br /><br />
        
      </div>
    </>
  );
}

export default Bodycontent;
