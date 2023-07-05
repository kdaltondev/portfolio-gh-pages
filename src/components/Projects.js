import React from "react";
import Project from "./Project";
import projectData from "./projectData";

export default function Projects() {
  console.log(projectData);
  return (
    <div id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map((data) => (
          <Project data={data} />
        ))}
      </div>
    </div>
  );
}
