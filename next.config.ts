import type { NextConfig } from 'next'

// Static export for GitHub Pages: `next build` writes plain HTML to `out/`.
// Pages serves `about.html` at `/about`, so the existing URLs are unchanged.
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
}

export default nextConfig
