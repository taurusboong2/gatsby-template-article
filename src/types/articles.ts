export type Article = {
  html: string;
  frontmatter: {
    date: string;
    slug: string;
    title: string;
    tags: string[] | null;
    description: string;
    category: string;
  };
};
