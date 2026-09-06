import React from "react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import "./Summary.css";

function Summary() {
  return (
    <div className="summary-page">
      <header className="summary-hero">
        <p className="summary-kicker">Profile</p>
        <h2>{profile.name}</h2>
        <p className="summary-role">{profile.role}</p>
        <p className="summary-focus">{profile.focus}</p>
      </header>

      <section className="summary-card summary-about">
        <h3>About</h3>
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>

      <section className="summary-strengths" aria-label="Core strengths">
        {profile.strengths.map((item) => (
          <article key={item.title} className="strength-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="summary-card">
        <h3>Technical skills</h3>
        <div className="skill-groups">
          {profile.skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="summary-split">
        <article className="summary-card">
          <h3>Education</h3>
          <p className="education-degree">{profile.education.degree}</p>
          <p className="education-years">{profile.education.years}</p>
        </article>
        <article className="summary-card">
          <h3>Focus</h3>
          <p>{profile.goal}</p>
        </article>
      </section>

      <section className="summary-card summary-work">
        <div className="summary-work-header">
          <h3>Selected work</h3>
          <Link className="summary-link" to="/projects">
            View all projects
          </Link>
        </div>
        <ul className="work-list">
          {projects.map((project) => (
            <li key={project.id}>
              <span className="work-number">{project.number}</span>
              <div>
                <p className="work-title">
                  {project.title}
                  <span>{project.category}</span>
                </p>
                <p className="work-tagline">{project.tagline}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Summary;
