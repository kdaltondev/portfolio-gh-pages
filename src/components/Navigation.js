import React, {useState} from "react";


function Navigation() {
  const [mobileDisplay,setMobileDisplay]=useState(false)

 const handleClick=()=>{
    setMobileDisplay(!mobileDisplay)
    console.log(mobileDisplay)
  }
  
  return (
    
    <div className="navigation">

      {/*Mobile Navigation Menu*/}


      
  
  <button id="hamburger-menu" onClick={handleClick}>
  {mobileDisplay && <div className="sidebar-navigation-menu"><nav>
    <h3>Kate Dalton Portfolio</h3>
    <ul>
      <li onClick={handleClick}><a href="#about">About</a></li>
      <li  onClick={handleClick}><a href="#skills">Skills</a></li>
      <li onClick={handleClick}><a href="#projects">Projects</a></li>
      <li onClick={handleClick}><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  </div>}
</button>
<div class="overlay"></div>

{/*Main Navigation*/}

      <nav className="navbar navbar-expand" id="main-menu">
        <div className="container">
            <ul className="navbar-nav mr-auto">
              <li>Kate Dalton</li>
              <li className="nav-item">
                <a href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item contact-btn">
                <a href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          
        </div>
      </nav>
  </div>
  );
}

export default Navigation;
