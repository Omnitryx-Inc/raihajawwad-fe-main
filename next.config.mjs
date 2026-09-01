// GitHub Pages serves static files only, so this app builds as a fully
// static export (no server runtime, no API routes). The countdown, map
// embed, and calendar links all run client-side against public URLs, so
// nothing here needs a backend.
//
// This site ships on a custom domain (raihajawwad.love, via public/CNAME),
// so it always builds for the root path. If it's ever moved to a plain
// project page (https://<user>.github.io/<repo>/) instead, delete
// public/CNAME and flip usesCustomDomain to false so basePath/assetPrefix
// get derived from GITHUB_REPOSITORY again.
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const usesCustomDomain = (process.env.NEXT_PUBLIC_USE_CUSTOM_DOMAIN ?? 'true') === 'true';

let basePath = '';
let assetPrefix = '';

if (isGithubActions && !usesCustomDomain) {
  const repo = (process.env.GITHUB_REPOSITORY || '').split('/')[1] || '';
  if (repo) {
    basePath = `/${repo}`;
    assetPrefix = `/${repo}/`;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    // next/image's optimizer needs a server, which GitHub Pages doesn't have.
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  eslint: {
    // Don't fail production builds on lint issues. `npm run lint` still
    // reports them for anyone who wants to check locally.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
