/**
 * Map a tag string to its badge CSS class.
 * Generic tech names get 'badge-tech'; known categories get their own badge.
 */
export function tagToBadge(tag) {
  const known = new Set([
    'Fullstack', 'Frontend', 'Backend', 'UI', 'UX',
    'DevOps', 'CRO', 'API', 'CRM'
  ]);
  return known.has(tag) ? `badge-${tag.toLowerCase()}` : 'badge-tech';
}
