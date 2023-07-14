import React from "react";
import headshotImage from "./../img/kate-headshot-about.jpg";

export default function About(){
    return(
        <>
        <div id="about" className="about">
        <div class="container">
          <div class="row my-5">
            <div class="col-sm-12 col-lg-5" className="about-img-container">
              <img
                class="img-fluid mb-4 mb-lg-0"
                className="about-img"
                src={headshotImage}
                alt="headshot of Kate Dalton wearing a baseball cap and smiling at the camera"
                />
              </div>
              <div className="about-txt-container" class="col-sm-12 col-lg-7">
                <h2>About Me</h2>
                <h3>
                  Hi, I’m Kate Dalton. I’m a front-end developer based in
                  Portland, ME. I specialize in creating websites that are
                  fully-responsive, beautiful and easy to update. 
                </h3>
                <h3>
                  With a background in local church ministry and electrical
                  engineering, I am uniquely suited to bridge the gap between
                  those who speak tech and those who don’t. </h3>
                  <h3>I hope to join a team where I can leverage my passion for working with people to
                  delight customers and create websites that transform businesses.
                </h3>
                <h3>
                  When I’m not coding I enjoy riding my bike, playing guitar, and
                  spending time in nature with my family, friends, and my Whoodle
                  - Millie.
                </h3>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}