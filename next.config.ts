import type { NextConfig } from "next";
const path = require('path');
const nextConfig: NextConfig = {
 turbopack: {
    root: path.resolve(__dirname), // cambia con il path corretto della root
  },
};

export default nextConfig;
