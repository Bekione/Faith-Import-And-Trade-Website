/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./utils/image-loader.js",
  },
};

module.exports = nextConfig;
