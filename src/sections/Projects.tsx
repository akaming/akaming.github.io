import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/sanity";
import type { Project } from "@/types/project";
import ProjectCard from "@/components/ProjectCard";
import Title from "@/components/Ttitle";
import Container from "@/layout/Container/Container";
import styles from "./Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await fetchProjects();
        if (mounted) setProjects(data);
      } catch (e: unknown) {
        const message =
          e instanceof Error ? e.message : "프로젝트를 불러오지 못했습니다.";

        if (mounted) setError(message);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div style={{ padding: 24 }}>불러오는 중...</div>;
  if (error) return <div style={{ padding: 24 }}>에러: {error}</div>;
  return (
    <Container color="dark">
      <Title as="h2" align="center" color="light">
        My <strong>Projects</strong>
      </Title>
      <div className={styles.content}>
        {projects.length === 0 ? (
          <p>등록된 프로젝트가 없습니다.</p>
        ) : (
          <ul className={styles.projectList}>
            {projects.map((p, index) => (
              <ProjectCard key={p._id} project={p} index={index} />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
};

export default Projects;
