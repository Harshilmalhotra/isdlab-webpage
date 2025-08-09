import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
 images: {
  domains: ["raw.githubusercontent.com", "drive.google.com", "lh3.googleusercontent.com"],
},

};

export default nextConfig;
