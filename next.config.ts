import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Retrato da seção "sobre" vem do avatar do GitHub.
    remotePatterns: [{ protocol: "https", hostname: "github.com", pathname: "/**" }],
  },
};

export default nextConfig;
