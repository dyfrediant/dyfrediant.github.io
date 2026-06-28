import matter from 'gray-matter';

/**
 * Load every markdown file from src/content/portfolio/ via Vite glob,
 * parse frontmatter, sort by date descending.
 */
const modules = import.meta.glob('/src/content/portfolio/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

const allProjects = Object.entries(modules)
  .map(([path, raw]) => {
    const { data } = matter(/** @type {string} */ (raw));
    return {
      ...data,
      slug: path.split('/').pop().replace('.md', ''),
      section: data.featured ? 'featured' : data.archived ? 'archived' : 'latest'
    };
  })
  .sort((a, b) => new Date(b.date ?? 0) - new Date(a.date ?? 0));

/** @type {import('./$types').PageServerLoad} */
export function load() {
  return {
    projects: allProjects,
    featuredProjects: allProjects.filter((p) => p.featured),
    latestProjects: allProjects.filter((p) => !p.featured && !p.archived),
    archivedProjects: allProjects.filter((p) => p.archived)
  };
}
