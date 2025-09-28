import React, { useState } from "react";
import portfolioData from "./portfolioData";

const categories = [
  { label: "All", value: "all" },
  ...Array.from(new Set(portfolioData.projects.map((p) => p.category))).map(
    (cat) => ({
      label: cat,
      value: cat,
    })
  ),
];

function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const filteredProjects =
    filter === "all"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <div className="container page-content active" id="projects-page">
      <div className="projects-header section-header">
        <h2 className="section-title">All Projects</h2>
        <div className="projects-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn${filter === cat.value ? " active" : ""}`}
              onClick={() => setFilter(cat.value)}
              data-filter={cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid" id="projects-grid">
        {filteredProjects.map((project, idx) => (
          <ProjectCard project={project} key={idx} detailed />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project, detailed }) {
  const statusClass =
    project.status === "Completed" ? "completed" : "in-development";
  return (
    <div className="project-card" data-category={project.category}>
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className={`project-status ${statusClass}`}>
          {project.status}
        </span>
      </div>
      <p className="project-duration">{project.duration}</p>
      <p className="project-description">{project.description}</p>
      {detailed && (
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="project-tech">
        {project.techStack.map((tech, i) => (
          <span className="tech-tag" key={i}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
