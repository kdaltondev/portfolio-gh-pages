import React from "react";
import Navigation from "./Navigation";

function Hero(){
    return(
        <>
         <div id="hero" className="hero">
        <Navigation />
        <div className="hero-container">
          <h2>Hi, I'm Kate.</h2>
          <h1>A front-end developer who loves working with people</h1>
        </div>
      </div>
        </>
    )
}

export default Hero