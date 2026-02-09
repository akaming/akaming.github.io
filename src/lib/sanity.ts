import axios from "axios";
import type { Project } from "../types/project";

const PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID as string;
const DATASET = import.meta.env.VITE_SANITY_DATASET as string;
const API_VERSION = import.meta.env.VITE_SANITY_API_VERSION as string;

function buildQueryUrl(groq: string) {
  if (!PROJECT_ID || !DATASET || !API_VERSION) {
    throw new Error("Sanity env가 비어 있습니다. .env 값을 확인하세요.");
  }
  const base = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}`;
  return `${base}?query=${encodeURIComponent(groq)}`;
}

export async function fetchProjects(): Promise<Project[]> {
  const groq = `
    *[_type=="project" && !(_id in path("drafts.**"))]
    | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      title,
      body,
      url,
      coverImage{
        asset->{url}
      },
    }
  `;

  const url = buildQueryUrl(groq);
  const res = await axios.get(url);
  return res.data.result as Project[];
}
