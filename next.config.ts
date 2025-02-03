/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  images: { unoptimized: true }, // Fix for next/image
  basePath: "/maths", // Must match your repo name
  assetPrefix: "/maths/", // Ensures assets load correctly
};

export default nextConfig;
