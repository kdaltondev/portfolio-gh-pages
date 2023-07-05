import React from "react";

import {
  FaReact,
  FaWordpress,
  FaFigma,
  FaHtml5,
  FaGithub,
  FaWix,
  FaJs,
  FaCss3
} from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills" className="skills">
        <h2>Skills</h2>
        <FaHtml5 className="icon" />
        <FaCss3 className="icon" />
        <FaJs className="icon" />
      <FaReact className="icon" />
      <FaGithub className="icon"/>      
      <FaWordpress className="icon" />
      <FaFigma className="icon" />
      <FaWix className="icon" />
      <h3>Photoshop | Chrome DevTools | Responsive Design | Visual Studio Code | Strategic Planning | Copywriting</h3>

      
    </div>
  );
}
