import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/game-plan-golf-performance" : "",
  assetPrefix: isProd ? "/game-plan-golf-performance/" : undefined,
};

export default nextConfig;
