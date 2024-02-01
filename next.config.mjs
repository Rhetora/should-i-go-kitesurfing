/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    basePath: '/repository',
    assetPrefix: '',
    output: 'export',
    images: {
      loader: 'akamai',
      path: '',
    }
  };
  
  export default nextConfig;