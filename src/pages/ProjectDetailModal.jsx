import React from "react";

function ProjectDetailModal({ project, onClose, onViewArch }) {
  if (!project) return null;

  const hasMedia =
    (project.images && project.images.length > 0) ||
    (project.videos && project.videos.length > 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--color-surface)",
          borderRadius: 20,
          maxWidth: 700,
          margin: "5vh auto",
          padding: 32,
          boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          color: "var(--color-text)",
          position: "relative",
        }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "var(--color-primary)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 36,
            height: 36,
            fontSize: 20,
            cursor: "pointer",
          }}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 style={{ marginBottom: 8 }}>{project.title}</h2>

        {/* Project Links */}
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              style={{ fontSize: 14 }}
            >
              GitHub Repo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ fontSize: 14 }}
            >
              Live Project
            </a>
          )}
          {project.architecture && (
            <button
              onClick={onViewArch}
              className="btn btn--secondary"
              style={{ fontSize: 14 }}
            >
              View Architecture
            </button>
          )}
        </div>

        <p style={{ color: "var(--color-text-secondary)", marginBottom: 24 }}>
          {project.description}
        </p>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div style={{ marginBottom: 24 }}>
            <strong>Features:</strong>
            <ul style={{ margin: "8px 0 0 0", paddingLeft: 20 }}>
              {project.features.map((f, i) => (
                <li
                  key={i}
                  style={{
                    color: "var(--color-text-secondary)",
                    marginBottom: 4,
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ marginBottom: 24 }}>
          <strong>Tech Stack:</strong>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}
          >
            {project.techStack.map((tech, i) => (
              <span className="tech-tag" key={i}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Media Section */}
        {hasMedia ? (
          <div style={{ marginTop: 16 }}>
            {project.images && project.images.length > 0 && (
              <div style={{ marginBottom: 24 }}>
                <strong>Screenshots:</strong>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 8,
                  }}
                >
                  {project.images.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Screenshot ${i + 1}`}
                      style={{
                        width: 120,
                        height: 80,
                        objectFit: "cover",
                        borderRadius: 8,
                        border: "1px solid var(--color-border)",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            {project.videos && project.videos.length > 0 && (
              <div>
                <strong>Videos:</strong>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 8,
                  }}
                >
                  {project.videos.map((url, i) => (
                    <video
                      key={i}
                      src={url}
                      controls
                      style={{
                        width: 220,
                        height: 140,
                        borderRadius: 8,
                        background: "#000",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              color: "var(--color-text-secondary)",
              fontStyle: "italic",
              marginTop: 24,
              textAlign: "center",
              padding: "20px 0",
              border: "1px dashed var(--color-border)",
              borderRadius: 8,
            }}
          >
            No screenshots or videos available for this project yet.
          </div>
        )}
      </div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            z-index: 2000;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(19,52,59,0.45);
            display: flex;
            align-items: flex-start;
            justify-content: center;
            overflow-y: auto;
            backdrop-filter: blur(4px);
          }
        `}
      </style>
    </div>
  );
}

export default ProjectDetailModal;
