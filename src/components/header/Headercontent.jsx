import React from "react";
import './Headercontent.css'
import myimg from './pngtree.jpg'

function Headercontent() {
  return (
    <>
      <div id="header">
        <div className="headerarea">
          <div className="logo">
            <img   src={myimg} alt="company." />
          </div>

          <div className="navlinks">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Our Services</a>
              </li>
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Headercontent;
