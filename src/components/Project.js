import React from "react";

export default function Project(props) {
  return (
    <div className="project">
      <h3>{props.data.title}</h3>
      <p>{props.data.description}</p>
      <p>{props.data.link}</p>
      <p>
        {props.data.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </p>
    </div>
  );
}
