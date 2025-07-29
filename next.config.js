/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'], // Add your image domains here
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
