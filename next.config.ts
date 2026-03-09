import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "static.nike.com" },
      { hostname: "assets.adidas.com" },
      { hostname: "assets.reebok.com" },
      { hostname: "images.vans.com" },
      { hostname: "cdn.shopify.com" },
    ],
  },
};

export default nextConfig;
