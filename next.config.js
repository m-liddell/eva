/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: ['images.unsplash.com']
  },
  transpilePackages: ['lucide-react']
}

module.exports = nextConfig