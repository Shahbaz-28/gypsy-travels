/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**.pexels.com', // Allows all subdomains of pexels.com
          },
          {
            protocol: 'https',
            hostname: '**.example.com', // Another example
            port: '', // Optional port
            pathname: '/account123/**', // Optional path pattern
          }
        ]
      }
};

export default nextConfig;
