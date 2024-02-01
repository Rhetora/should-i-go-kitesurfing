/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    basePath: '/repository',
    assetPrefix: '/repository/',
    output: 'export',
    images: {
      loader: 'akamai',
      path: '',
    }
  };
  
  export default nextConfig;