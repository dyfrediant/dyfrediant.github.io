<script>
  import { tagToBadge } from '$lib/projects.js';

  /**
   * @type {{ project: import('./projects.js').Project, variant?: 'project' | 'highlight' }}
   */
  let { project, variant = 'project' } = $props();

  /** Extract display hostname from a URL string */
  function displayUrl(url) {
    try {
      return new URL(url).hostname.replace(/^www\./, '');
    } catch {
      return url;
    }
  }

  const statusLabel = $derived.by(() => {
    switch (project.status) {
      case 'coming-soon': return 'Coming Soon';
      case 'internal':    return 'Internal Use Only';
      case 'defunct':     return 'No Longer Exists';
      default:            return '';
    }
  });
</script>

<div class="{variant}-card" data-animate="fade-up">
  <div class="{variant}-card-image">
    <img src={project.image} alt={project.title} loading="lazy" />
  </div>
  <div class="{variant}-card-body">
    {#if variant === 'highlight'}
      <h3>{project.title}</h3>
    {:else}
      <h4>{project.title}</h4>
    {/if}

    <div class="badge-group">
      {#each project.tags as tag}
        <span class="badge {tagToBadge(tag)}">{tag}</span>
      {/each}
    </div>

    {#if project.status === 'coming-soon'}
      <span class="{variant}-card-link">
        <span>{statusLabel}</span>
      </span>
    {:else if project.status === 'internal' || project.status === 'defunct'}
      <span class="{variant}-card-link error">
        <i class="fas fa-link-slash"></i> {statusLabel}
      </span>
    {:else if project.url}
      <a href={project.url} class="{variant}-card-link" target="_blank" rel="noopener">
        <span>{displayUrl(project.url)}</span>
        <i class="fas fa-arrow-right"></i>
      </a>
    {/if}
  </div>
</div>
