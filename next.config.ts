import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/blog/circle-acceleration-season-en", destination: "/blog/arc-acceleration-season-en", permanent: true },
      { source: "/es/blog/circle-acceleration-season", destination: "/es/blog/arc-acceleration-season", permanent: true },
      { source: "/blog/circle-acceleration-season", destination: "/blog/arc-acceleration-season-en", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/admin", destination: "/admin/index.html" },
      { source: "/admin/", destination: "/admin/index.html" },
    ];
  },
};

export default nextConfig;
