import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com",          pathname: "/**" },
      { protocol: "https", hostname: "images.pexels.com",            pathname: "/**" },
      { protocol: "https", hostname: "**.supabase.co",               pathname: "/**" },
      { protocol: "https", hostname: "res.cloudinary.com",           pathname: "/**" },
      { protocol: "https", hostname: "i.ibb.co",                     pathname: "/**" },
      { protocol: "https", hostname: "**.ibb.co",                    pathname: "/**" },
      { protocol: "https", hostname: "**.postimg.cc",                pathname: "/**" },
      { protocol: "https", hostname: "**.imgur.com",                 pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com",    pathname: "/**" },
      { protocol: "https", hostname: "**.cloudfront.net",            pathname: "/**" },
      { protocol: "https", hostname: "**.amazonaws.com",             pathname: "/**" },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
