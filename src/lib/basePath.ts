// This site ships on the raihajawwad.love custom domain, so basePath is
// normally empty. This helper is kept anyway (see next.config.mjs) so
// `<img>` sources stay correct if the site is ever built as a plain
// github.io/<repo> project page instead.
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path.startsWith('/')) return `${basePath}/${path}`;
  return `${basePath}${path}`;
}
