/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roots-island.mostafataha.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
