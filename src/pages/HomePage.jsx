import React from "react";
import portfolioData from "./portfolioData";
import { Link } from "react-router-dom";
import avatarImg from "../assets/pavan_avatar.jpg";
import ProjectDetailModal from "./ProjectDetailModal";
import GitHubCalendar from "react-github-calendar";
function ImageViewer({ src, onClose }) {
  if (!src) return null;
  return (
    <div className="image-viewer-overlay" onClick={onClose}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <img
        src={src}
        alt="Architecture Diagram"
        onClick={(e) => e.stopPropagation()}
      />
      <style>{`
        .image-viewer-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex; align-items: center; justify-content: center;
          z-index: 3000;
          backdrop-filter: blur(8px);
        }
        .image-viewer-overlay img {
          max-width: 90vw; max-height: 90vh;
          object-fit: contain; border-radius: 8px;
        }
        .image-viewer-overlay .close-button {
          position: absolute; top: 15px; right: 25px;
          font-size: 2.5rem; color: white;
          background: transparent; border: none; cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function HomePage() {
  const {
    personalInfo,
    experience,
    projects,
    achievements,
    problemSolvingSkills,
  } = portfolioData;
  const avatarExists = !!avatarImg;
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [viewingArch, setViewingArch] = React.useState(null); // State for architecture diagram

  return (
    <>
      <div className="page-content active" id="home-page">
        {/* Hero Section */}
        <section className="hero-section section" id="hero">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-greeting">Hi, I'm</span>
              <span className="hero-name">{personalInfo.name}</span>
              <div className="hero-subtitle">{personalInfo.title}</div>
              <div className="hero-description">{personalInfo.summary}</div>
              <div className="hero-cta">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn btn--primary"
                >
                  Contact Me
                </a>
                <Link to="/projects" className="btn btn--secondary">
                  View Projects
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-avatar">
                <div className="avatar-placeholder">
                  {avatarExists ? (
                    <img
                      src={avatarImg}
                      alt={personalInfo.name}
                      className="avatar-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        display: "block",
                      }}
                    />
                  ) : (
                    <span className="avatar-initials">
                      {personalInfo.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                Passionate about creating innovative solutions
              </p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a dedicated Full Stack Developer and AI Engineer based in
                  Hyderabad, specializing in building scalable web applications
                  and intelligent AI systems. With expertise in modern
                  technologies like React, Node.js, AWS, and AI/ML frameworks, I
                  create solutions that make a real impact.
                </p>
                <p>
                  Currently working at Potlam Retail Concepts, I've successfully
                  delivered applications serving 10,000+ users while
                  implementing robust CI/CD pipelines and cloud infrastructure.
                  My journey includes developing everything from AI-powered
                  tutoring systems to smart cooking assistants.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <h3 className="stat-number">1+</h3>
                    <p className="stat-label">Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">10+</h3>
                    <p className="stat-label">Projects Completed</p>
                  </div>
                  <div className="stat-item">
                    <h3 className="stat-number">300+</h3>
                    <p className="stat-label">DSA Problems Solved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Technical Skills</h2>
              <p className="section-subtitle">Technologies I work with</p>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3 className="skill-category-title">Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Frontend Technologies</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">React Native</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Expo</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Backend Technologies</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">FastAPI</span>
                  <span className="skill-tag">Django</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Cloud & DevOps</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">GitHub Actions</span>
                  <span className="skill-tag">CI/CD</span>
                  <span className="skill-tag">Nginx</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">Databases</h3>
                <div className="skill-tags">
                  <span className="skill-tag">MySQL</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Firebase</span>
                </div>
              </div>
              <div className="skill-category">
                <h3 className="skill-category-title">AI/ML Technologies</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Vertex AI</span>
                  <span className="skill-tag">Gemini</span>
                  <span className="skill-tag">ChromaDB</span>
                  <span className="skill-tag">OpenAI APIs</span>
                  <span className="skill-tag">Agentic AI</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="problem-solving" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Problem-Solving Skills</h2>
              <p className="section-subtitle">
                Data Structures & Algorithms Proficiency
              </p>
            </div>
            <div className="dsa-skills-grid">
              {problemSolvingSkills.map((category, idx) => (
                <div
                  className="dsa-card"
                  key={idx}
                  style={{ "--level-color": category.color }}
                >
                  <h3 className="dsa-card-title">{category.level}</h3>
                  <ul className="dsa-skill-list">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="dsa-skill-item">
                        <span className="dsa-skill-name">{skill.name}</span>
                        <span className="dsa-skill-count">{skill.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p
              style={{
                textAlign: "center",
                marginTop: "32px",
                color: "var(--color-text-secondary)",
              }}
            >
              Total problems solved on LeetCode & HackerRank: 700+
            </p>
          </div>
        </section>
        {/* GitHub Activity Section */}
        <section id="github-activity" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Open Source Contributions</h2>
              <p className="section-subtitle">My Public Coding Footprint</p>
            </div>
            <div className="github-calendars">
              <div className="github-calendar-container">
                <GitHubCalendar
                  username="pavankumar19992208"
                  blockSize={12}
                  blockMargin={4}
                  fontSize={14}
                  theme={{
                    light: [
                      "#ebedf0",
                      "#9be9a8",
                      "#40c463",
                      "#30a14e",
                      "#216e39",
                    ],
                    dark: [
                      "#161b22",
                      "#0e4429",
                      "#006d32",
                      "#26a641",
                      "#39d353",
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="section container" id="experience">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">My Professional Journey</p>
          </div>
          <div className="timeline" id="experience-timeline">
            {experience.map((job, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">{job.title}</h3>
                  <p className="timeline-company">{job.company}</p>
                  <p className="timeline-duration">{job.duration}</p>
                  <ul className="timeline-responsibilities">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Preview */}
        <section className="section container" id="projects">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-preview-grid" id="projects-preview-grid">
            {projects.slice(0, 6).map((project, idx) => (
              <ProjectCard
                project={project}
                key={idx}
                onDiveIn={setSelectedProject}
                onViewArch={() => setViewingArch(project.architecture)}
              />
            ))}
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn btn--primary">
              See All Projects
            </Link>
          </div>
        </section>
        {/* ...existing code... */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onViewArch={() => setViewingArch(selectedProject.architecture)}
          />
        )}
        <ImageViewer src={viewingArch} onClose={() => setViewingArch(null)} />

        {/* Education Section */}
        <section id="education" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Education</h2>
              <p className="section-subtitle">Academic background</p>
            </div>
            <div className="education-card">
              <div className="education-content">
                <h3 className="education-degree">
                  Bachelor of Technology in Computer Science &amp; Engineering
                  (AI/ML)
                </h3>
                <p className="education-institution">
                  Swami Vivekananda Institute of Technology, Secunderabad
                </p>
                <p className="education-duration">2021 - 2024</p>
                <p className="education-grade">CGPA: 6.98/10</p>
                <div className="status status--success">
                  Academic Topper - 2nd Year 1st Semester
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Achievements */}
        <section className="section container" id="achievements">
          <div className="section-header">
            <h2 className="section-title">Achievements</h2>
          </div>
          <div className="achievements-grid" id="achievements-grid">
            {achievements.map((ach, idx) => (
              <div className="achievement-item" key={idx}>
                <p>{ach}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Let's Connect</h2>
              <p className="section-subtitle">
                Ready to start your next project?
              </p>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <h3 className="contact-label">Email</h3>
                  <a
                    href="mailto:pavankumar19992208@gmail.com"
                    className="contact-value"
                  >
                    pavankumar19992208@gmail.com
                  </a>
                </div>
                <div className="contact-item">
                  <h3 className="contact-label">Phone</h3>
                  <a href="tel:+919182442102" className="contact-value">
                    +91-9182442102
                  </a>
                </div>
                <div className="contact-item">
                  <h3 className="contact-label">Location</h3>
                  <span className="contact-value">Hyderabad, Telangana</span>
                </div>
              </div>
              <div className="contact-form">
                <form id="contact-form">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn--primary btn--full-width"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Jagarapu Pavankumar. All rights reserved.</p>
            <p>Built with passion for innovation and excellence.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// Pass setSelectedProject to ProjectCard
function ProjectCard({ project, onDiveIn, onViewArch }) {
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
      <div className="project-tech">
        {project.techStack.map((tech, i) => (
          <span className="tech-tag" key={i}>
            {tech}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: 16,
          flexWrap: "wrap",
        }}
      >
        <button
          className="btn btn--primary"
          style={{ flex: "1 1 auto" }}
          onClick={() => onDiveIn(project)}
        >
          Dive In
        </button>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
            style={{
              flex: "1 1 auto",
              textAlign: "center",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Live Demo
          </a>
        )}
        {project.architecture && (
          <button
            className="btn btn--outline"
            style={{ flex: "1 1 auto" }}
            onClick={onViewArch}
          >
            Architecture
          </button>
        )}
      </div>
    </div>
  );
}

export default HomePage;
