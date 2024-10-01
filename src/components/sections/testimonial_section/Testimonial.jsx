import React from "react";
import './Testimonial.css'
import myimg from './avatar.avif'

function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="testimonialarea">
          <h3>What <span>Our Client</span> Says</h3>
          <div className="testimonialcontent">
            <div>
              <img src={myimg} alt="" />
            </div>
            <div >
              <p>Jane doe</p>
              <br />
              <p>Colombo</p>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda amet natus necessitatibus adipisci tenetur rerum.
              </p>
            </div>
          </div>

          <div className="testimonialcontent">
            <div>
              <img src={myimg} alt="" />
            </div>
            <div>
              <p>Minura pieris</p>
              <br />
              <p>Colombo</p>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Assumenda amet natus necessitatibus adipisci tenetur rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
