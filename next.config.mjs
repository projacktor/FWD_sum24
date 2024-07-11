/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/FWD_sum24',
  // output: 'export',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.xkcd.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
