import React from "react";

import {
  FaReact,
  FaWordpress,
  FaFigma,
  FaHtml5,
  FaGithub,
  FaWix,
  FaJs,
  FaCss3,
  FaGitAlt,
  FaBootstrap,

} from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <FaHtml5 className="icon" />
          <h3>HTML5</h3>
        </div>

        <div className="skill">
          <FaCss3 className="icon" />
          <h3>CSS3</h3>
        </div>

        <div className="skill">
         <FaJs className="icon" />
          <h3>JavaScript</h3>
        </div>

        <div className="skill">
        <FaReact className="icon" />
          <h3>React</h3>
        </div>

        <div className="skill">
        <FaBootstrap className="icon" />
          <h3>Bootstrap</h3>
        </div>

        <div className="skill">
           <FaGitAlt className="icon" />
          <h3>Git</h3>
        </div>

        
        <div className="skill">
           <FaGithub className="icon" />
          <h3>GitHub</h3>
        </div>

        <div className="skill">
           <FaWordpress className="icon" />
          <h3>WordPress</h3>
        </div>

        <div className="skill">
        <FaFigma className="icon" />
          <h3>Figma</h3>
        </div>

      

        </div>

      <h3>
        JavaScript ES6 | APIs | php | SQL | Photoshop | Chrome DevTools | Responsive Design | Visual Studio Code |
        Strategic Planning | Copywriting
      </h3>
    </div>
  );
}
