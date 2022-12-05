import React from "react";
import { Fade } from "react-awesome-reveal";
import { yourData } from "../yourdata";

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade>
            <h1>Certifications</h1>
          </Fade>
          <div className="skills-grid">
            {yourData.skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.img} alt="css"></img>
                <h3>{skill.title}</h3>
                <p>{skill.para} {skill.url ? <a className="link" href={skill.url}>view &rsaquo;</a> : null}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
