import React from "react";
import sitConmigoScreenshot from "./../img/sitConmigoThumbnail400.png";
import newGloucesterScreenshot from "./../img/NewGloucesterThumbnail400.png";
import stickyNoteScreenshot from "./../img/StickyNoteThumbnail400.png";

export default function Project(props) {
  console.log(props)
  return (
    <div className="project">
      <div className="project-container">
      <h3><a href={props.data.link}>{props.data.title}</a></h3>
      <div className="project-thumbnail-container">
        <img src={props.data.image==="sitConmigoScreenshot" ? sitConmigoScreenshot 
        : props.data.image==="newGloucesterScreenshot" ? newGloucesterScreenshot
      : stickyNoteScreenshot} />
        </div>
      <p>{props.data.description}</p>
      <h3>Skills</h3>
      <div className="project-skills">
        {props.data.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <h3>Tools</h3>
    <div className="tools">
      {props.data.tools.map((tool)=>(<p>{tool}</p>))}
      </div>
      
    </div>
    </div>
  );
}
