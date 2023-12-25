/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "img.shields.io",
      },
    ],
  },
};

module.exports = nextConfig;
