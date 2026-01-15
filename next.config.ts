import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: [
    "@ampproject/toolbox-optimizer",
    "edge-runtime",
    "node-fetch",
    "ws",
  ],
};

export default nextConfig;
