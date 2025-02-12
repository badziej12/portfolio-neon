import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: './ImageLoader.js'
  },
  output: "export",
  distDir: "out",
};

export default nextConfig;
