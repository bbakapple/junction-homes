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
      {
        protocol: 'https',
        hostname: 'd2wm5j67hrdrdj.amplifyapp.com',
        port: '',
      },
    ],
  },
}

export default nextConfig
