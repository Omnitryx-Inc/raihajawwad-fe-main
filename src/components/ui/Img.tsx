import type { ImgHTMLAttributes } from 'react';
import { withBasePath } from '@/lib/basePath';

/**
 * Plain <img> that automatically prefixes /public asset paths with the
 * (normally empty, custom-domain) basePath. next/image's optimizer needs a
 * server, which a static export doesn't have, so this keeps things simple.
 */
export function Img({
  src,
  alt,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}: ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- static export has no Image Optimization server
  return <img src={withBasePath(src)} alt={alt} loading={loading} decoding={decoding} {...rest} />;
}
