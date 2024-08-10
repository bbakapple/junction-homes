import { hostname } from 'os'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '',
        port: '3000',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
      },
    ]
  },
}

export default nextConfig
