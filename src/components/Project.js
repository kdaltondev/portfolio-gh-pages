import React from "react";
import sitConmigoScreenshot from "./../img/sitConmigoThumbnail400.png";
import newGloucesterScreenshot from "./../img/NewGloucesterThumbnail400.png";
import stickyNoteScreenshot from "./../img/StickyNoteThumbnail400.png";
import mobileTriviaUnlimitedScreenshot from "./../img/MobileTriviaThumbnail400.png";

export default function Project(props) {
  console.log(props);
  return (
    <div className="project">
      <div className="project-container">
        <a href={props.data.link} target="_blank">
          <h3>{props.data.title}</h3>
          <div className="project-thumbnail-container">
            <img
              src={
                props.data.image === "sitConmigoScreenshot"
                  ? sitConmigoScreenshot
                  : props.data.image === "newGloucesterScreenshot"
                  ? newGloucesterScreenshot
                  : props.data.image === "stickyNoteScreenshot"
                  ? stickyNoteScreenshot
                  : mobileTriviaUnlimitedScreenshot
              } alt={props.data.imageAlt}
            />
          </div>
        </a>
        <p>{props.data.description}</p>
        <h3>Skills</h3>
        <div className="project-skills">
          {props.data.skills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
        <h3>Tools</h3>
        <div className="tools">
          {props.data.tools.map((tool) => (
            <p>{tool}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
