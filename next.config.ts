import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      // Water Intelligence was renamed WaterAgent; keep the old product URLs working.
      { source: "/products/water-intelligence", destination: "/products/wateragent", permanent: true },
      { source: "/fr/products/water-intelligence", destination: "/fr/products/wateragent", permanent: true },
      // CareerAI was withdrawn; send its old pages to the products overview.
      { source: "/products/careerai", destination: "/products", permanent: true },
      { source: "/fr/products/careerai", destination: "/fr/products", permanent: true }
    ];
  }
};

export default nextConfig;
