import React, { useMemo, useState } from "react";
import { projectFilters, projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  const toggleDetails = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="projects">
      <header className="projects-hero">
        <p className="projects-kicker">Selected work</p>
        <h2>Projects</h2>
        <p className="projects-intro">
          Production-style backends, AI pipelines, and full-stack platforms —
          from .NET microservices to FastAPI, live streaming, and portfolio intelligence.
        </p>
      </header>

      <div className="project-filters" role="tablist" aria-label="Filter projects by stack">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            className={`filter-chip${activeFilter === filter ? " is-active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-list">
        {visibleProjects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <article key={project.id} className="project-card">
              <header className="project-header">
                <span className="project-number" aria-hidden="true">
                  {project.number}
                </span>
                <div className="project-heading">
                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-role">{project.role}</p>
                </div>
              </header>

              <p className="project-tagline">{project.tagline}</p>
              <p className="project-summary">{project.summary}</p>

              <h4 className="project-section-label">Key contributions</h4>
              <ul className="project-points">
                {project.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {isExpanded && (
                <>
                  <h4 className="project-section-label">Additional highlights</h4>
                  <ul className="project-points project-points-secondary">
                    {project.details.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              )}

              <div className="project-footer">
                <ul className="project-stack">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      className="project-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    className="details-toggle"
                    aria-expanded={isExpanded}
                    onClick={() => toggleDetails(project.id)}
                  >
                    {isExpanded ? "Hide details" : "More details"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
