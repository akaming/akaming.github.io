import { PortableText } from "@portabletext/react";
import type { Project } from "@/types/project";
import styles from "@/sections/Projects.module.css";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const imageUrl = project.coverImage?.asset?.url;
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className={styles.projectItem}>
      {imageUrl ? (
        <div className={styles.projectImage}>
          <img src={imageUrl} alt={project.title} loading="lazy" />
        </div>
      ) : (
        <div>No Image</div>
      )}
      <div className={styles.projectInfo}>
        <span className={styles.projectNum}>{number}</span>
        <span className={styles.projectTitle}>{project.title}</span>
        <div>
          {project.body?.length ? (
            <PortableText
              value={project.body}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          ) : null}
        </div>
        {project.url?.length ? (
          <a href={project.url} target="_blank" className={styles.projectLink}>
            <svg
              className={styles.projectLinkIcon}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M10.8333 9.16658L17.6666 2.33325"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 5.66675V1.66675H14.3333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16675 1.66675H7.50008C3.33341 1.66675 1.66675 3.33341 1.66675 7.50008V12.5001C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V10.8334"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="sr-only">{project.title}사이트 바로가기</span>
          </a>
        ) : null}
      </div>
    </li>
  );
}
