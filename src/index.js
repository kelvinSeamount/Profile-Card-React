import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "💪",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "💪",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "💪",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "👍",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "💪",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "👶",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <section>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </section>
  );
}

function Avatar() {
  return <img className="avatar" src="asset/Kelvin.jpg" alt="Human" />;
}

function Intro() {
  return (
    <div>
      <h1>Kelvin Nwachukwu</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>{skillObj.skill}</span>
      <span>{skillObj.level}</span>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
