import React from "react";
import "./Service.css";

function Service() {
  return (
    <>
      <div className="ourservices">
        <div className="ourservicearea">
          <h1>
            Our Digital <span>Solutions</span>
          </h1>
          <br />
          <br />
          <br />
          <br />
          {/*main solutions */}
          <div className="servicearea">
            <div className="box">
              <div className="boxarea">
                <h4>Web Design</h4>
                <p>
                  Professional web design services that focus on creating
                  visually stunning, user-friendly websites. Our designs are
                  tailored to enhance user experience, strengthen your brand,
                  and drive online engagement.
                </p>
                <a href="">Discover more</a>
              </div>
            </div>
            <div className="box">
              <div className="boxarea">
                <h4>App Design</h4>
                <p>
                  Expert app design services focused on delivering intuitive,
                  user-centric mobile experiences. We create sleek, functional
                  designs that enhance user engagement and bring your app's
                  vision to life across all platforms
                </p>
                <a href="">Discover more</a>
              </div>
            </div>
            <div className="box">
              <div className="boxarea">
                <h4>Graphic Design</h4>
                <p>
                  Creative graphic design services that bring your brand to life
                  with visually compelling designs. We craft eye-catching
                  graphics that communicate your message, enhance brand
                  identity, and captivate your audience
                </p>
                <a href="">Discover more</a>
              </div>
            </div>
            <div className="box">
              <div className="boxarea">
                <h4>Payment Gateways</h4>
                <p>
                  Secure and seamless payment gateway integration services that
                  ensure smooth transactions for your business. We implement
                  reliable solutions to handle online payments, providing your
                  customers with a safe.
                </p>
                <a href="">Discover more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
