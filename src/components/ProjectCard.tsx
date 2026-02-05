import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const imageUrl = project.coverImage?.asset?.url;

  return (
    <article
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        padding: 16,
        background: "white",
      }}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={project.title}
          loading="lazy"
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderRadius: 10,
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: 180,
            borderRadius: 10,
            background: "#f2f2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: 14,
          }}
        >
          No Image
        </div>
      )}

      <h3 style={{ margin: "12px 0 8px" }}>{project.title}</h3>
      <p style={{ margin: 0, color: "#444", lineHeight: 1.5 }}>
        {project.summary}
      </p>

      {(project.links?.live || project.links?.repo) && (
        <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
          {project.links?.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
          {project.links?.repo && (
            <a href={project.links.repo} target="_blank" rel="noreferrer">
              Repo
            </a>
          )}
        </div>
      )}

      {project.techStack?.length ? (
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 12,
            padding: 0,
            listStyle: "none",
          }}
        >
          {project.techStack.map((t) => (
            <li
              key={t}
              style={{
                border: "1px solid #ddd",
                borderRadius: 999,
                padding: "4px 10px",
                fontSize: 12,
                color: "#333",
              }}
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
