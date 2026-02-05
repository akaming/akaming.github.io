import { useEffect, useState } from "react";
import { fetchProjects } from "../lib/sanity";
import type { Project } from "../types/project";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
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
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Projects</h1>

      {projects.length === 0 ? (
        <p>등록된 프로젝트가 없습니다.</p>
      ) : (
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </section>
      )}
    </main>
  );
}
