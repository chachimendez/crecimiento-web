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
      {
        source: "/",
        has: [{ type: "host", value: "rosario.crecimiento.build" }],
        destination: "/rosario/index.html",
      },
      { source: "/admin", destination: "/admin/index.html" },
      { source: "/admin/", destination: "/admin/index.html" },
      // Aleph Rosario (sitio estático en public/rosario)
      { source: "/rosario", destination: "/rosario/index.html" },
      { source: "/rosario/", destination: "/rosario/index.html" },
    ];
  },
};

export default nextConfig;
