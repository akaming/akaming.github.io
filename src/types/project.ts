import type { PortableTextBlock } from "@portabletext/types";

export type Project = {
  _id: string;
  title: string;
  url: string;
  coverImage?: { asset?: { url?: string } };
  body?: PortableTextBlock[];
};
