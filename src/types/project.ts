export type Project = {
  _id: string;
  title: string;
  summary: string;
  slug?: { current: string };
  coverImage?: {
    asset?: { url?: string };
  };
  links?: {
    live?: string;
    repo?: string;
  };
  techStack?: string[];
};