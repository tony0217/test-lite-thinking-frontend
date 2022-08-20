/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      // {
      //   source: '/inicio',
      //   destination: '/home',
      //   permanent: true,
      // },
    ];
  },
}

module.exports = nextConfig
