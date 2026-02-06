import { PortableText } from "@portabletext/react";
import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const imageUrl = project.coverImage?.asset?.url;
  console.log(project);
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
      {project.body?.length ? (
        <PortableText
          value={project.body}
          components={{
            block: {
              normal: ({ children }) => (
                <p style={{ margin: 0, color: "#444", lineHeight: 1.5 }}>
                  {children}
                </p>
              ),
            },
          }}
        />
      ) : null}
    </article>
  );
}
