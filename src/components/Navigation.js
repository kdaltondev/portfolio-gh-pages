import React from "react";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand">
        <div className="container">
          <div>
            <ul className="navbar-nav mr-auto">
              
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
              <li className="nav-item">
                <a href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
