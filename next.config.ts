import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "helmifireworks.b-cdn.net", pathname: "/**" },
      { protocol: "https", hostname: "helmifireworks2.b-cdn.net", pathname: "/**" },
    ],
  },
};

export default nextConfig;
