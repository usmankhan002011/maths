const nextConfig = {
  output: "export", // Enable static export
  images: { unoptimized: true }, // Fix for next/image in static builds
};

export default nextConfig;