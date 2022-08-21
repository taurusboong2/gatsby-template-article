import { Image } from './image';

export type Article = {
  html: string;
  frontmatter: {
    date: string;
    slug: string;
    title: string;
    tags: string[] | null;
    description: string;
    category: string;
    author: string;
    author_description: string;
    author_thumbnail?: Image;
    thumbnail?: Image;
  };
};
