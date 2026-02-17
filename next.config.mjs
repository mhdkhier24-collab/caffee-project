/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true, // ضروري لمجلد app
  },
  // احذف output: "export" بالكامل
};

export default nextConfig;
